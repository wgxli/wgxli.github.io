var WORD_GRID = '';
var MIN_LENGTH = 0;
var MAX_LENGTH = 0;

var NUM_NODES;
var VISITED = [];
var JOINED;

var TABLE;
var TRIE;

$(document).ready(function() {
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
	var start_time = (new Date()).getTime();
	get_input();
	clear_table();
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
	WORD_GRID = $("textarea[name='grid']").val().toLowerCase();
	MIN_LENGTH = parseInt($("input[name='min-length']").val());
	MAX_LENGTH = parseInt($("input[name='max-length']").val());

	initialize_graph();
}

function to_index(row, col, rows) {
	if (row >= rows.length) {return undefined;}
	if (row < 0) {return undefined;}
	if (col < 0) {return undefined;}
	if (col >= rows[row]) {return undefined;}

	row_start = 0;
	for (var i = 0; i < row; i++) {
		row_start += rows[i];
	}
	return row_start + col;
}

function* adjacent(i, rows) {
	row_start = 0;
	for ([row, row_length] of rows.entries()) {
		if (row_length + row_start > i) {
			break;
		}
		row_start += row_length;
	}
	col = i - row_start;
	
	for (var i of [-1, 0, 1]) {
		for (var j of [-1, 0, 1]) {
			if (i != 0 || j != 0) {
				n = to_index(row + i, col + j, rows);
				if (n != undefined) {yield n;}
			}
		}
	}
}

function initialize_graph() {
	var rows = WORD_GRID.split('\n').map(x => x.length);
	WORD_GRID = WORD_GRID.replace('\n', '');
	
	NUM_NODES = WORD_GRID.length;
	JOINED = [];
	
	for (var i=0; i < NUM_NODES; i++) {
		adjacency_vector = [];
		for (var j=0; j < NUM_NODES; j++) {
			adjacency_vector.push(false);
		}
		for (j of adjacent(i, rows)) {
			adjacency_vector[j] = true;
		}
		JOINED.push(adjacency_vector);
	}
}

function* word_search() {
	for (var vertex=0; vertex<NUM_NODES; vertex++) {
		yield* all_simple_paths(vertex, 0, TRIE);
	}
}

function* all_simple_paths(start, length, trie) {
	if (length >= MAX_LENGTH || !(WORD_GRID[start] in trie)) {
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
