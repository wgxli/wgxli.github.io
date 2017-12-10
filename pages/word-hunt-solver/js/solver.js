var WORD_GRID = '';
var MIN_LENGTH = 0;
var MAX_LENGTH = 0;

var VISITED = [];
var JOINED = [];

var TABLE;
var TRIE;

const NUM_NODES = 16;

$(document).ready(function() {
	for (var i=0; i<NUM_NODES; i++) {
		VISITED.push(false);
		var neighbor_list = [];
		for (var j=0; j<NUM_NODES; j++) {
			neighbor_list.push(false);
		}
		JOINED.push(neighbor_list);
	}

	for (var x=0; x<3; x++) {
		for (var y=0; y<3; y++) {
			var a = 4*x + y;
			var b = 4*x + (y + 1);
			var c = 4*(x+1) + y;
			var d = 4*(x+1) + (y+1);
			JOINED[a][b] = true;
			JOINED[a][c] = true;
			JOINED[a][d] = true;
			JOINED[b][a] = true;
			JOINED[b][c] = true;
			JOINED[b][d] = true;
			JOINED[c][a] = true;
			JOINED[c][b] = true;
			JOINED[c][d] = true;
			JOINED[d][a] = true;
			JOINED[d][b] = true;
			JOINED[d][c] = true;
		}
	}
	$("textarea[name='grid']").on('input', solve);
	$("input[name='min-length']").on('input', solve);
	$("input[name='max-length']").on('input', solve);
	solve();
});




function clear_table() {
	$('tr.search-result').remove();
	TABLE = [undefined];
	for (i=0; i<NUM_NODES; i++) {
		TABLE.push('');
	}
}

function add_table_entry(word) {
	for (i = word.length; i >= 0; i--) {
		if (TABLE[i] != '') {
			add_entry_before(word, TABLE[i]);
			TABLE[word.length] = word;
			return;
		}
	}
}

function add_entry_before(word, key) {
	var entry_text = '<tr class="search-result" id="result-' + word + '"><td>' + word.length + '</td><td>' + word + '</td></tr>';
	if (key != undefined) {
		$('tr.search-result#result-' + key).before(entry_text);
	} else {
		$('table#results').append(entry_text);
	}
}

function solve() {
	get_input();
	clear_table();
	var start_time = (new Date()).getTime();
	words_found = iterate_tree(word_search(), 0, new Set());
	var end_time = (new Date()).getTime();
	var seconds_elapsed = (end_time - start_time)/1000;
	console.log(`${words_found.size} words found in ${seconds_elapsed} seconds.`);
}

function iterate_tree(generator, index, found) {
	for (i=0; i<1000; i++) {
		var next_element = generator.next();
		if (next_element.done) {
			return found;
		}
		var word = next_element.value;
		if (word.length >= MIN_LENGTH) {
			if (!found.has(word)) {
				found.add(word);
				add_table_entry(word);
			}
		}
	}
	setTimeout(function() {iterate_tree(generator, index, found);}, 0);
}

function get_input() {
	WORD_GRID = $("textarea[name='grid']").val().replace(/\n/g, '').toLowerCase();
	MIN_LENGTH = parseInt($("input[name='min-length']").val());
	MAX_LENGTH = parseInt($("input[name='max-length']").val());

	while (WORD_GRID.length < NUM_NODES) {
		WORD_GRID += '.';
	}
}

function* word_search() {
	for (var vertex=0; vertex<NUM_NODES; vertex++) {
		yield* all_simple_paths(vertex, 0, TRIE);
	}
}

function* all_simple_paths(start, length, trie) {
	if (length >= MAX_LENGTH || WORD_GRID[start] == '.') {
		return;
	}
	trie = trie[WORD_GRID[start]]

	if ('eow' in trie) {
		yield WORD_GRID[start];
	}

	VISITED[start] = true;
	for (var neighbor of neighborhood(start)) {
		if (!VISITED[neighbor] && WORD_GRID[neighbor] in trie) {
			for (var path of all_simple_paths(neighbor, length + 1, trie)) {
				yield WORD_GRID[start] + path;
			}
		}
	}
	VISITED[start] = false;
}

function* neighborhood(vertex) {
	var adjacency_list = JOINED[vertex];
	for (var i=0; i<NUM_NODES; i++) {
		if (adjacency_list[i]) {
			yield i;
		}
	}
}
