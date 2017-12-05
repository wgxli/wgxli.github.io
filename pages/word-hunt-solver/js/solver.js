var WORD_GRID = '';
var MIN_LENGTH = 0;
var MAX_LENGTH = 0;

var VISITED = [];
var JOINED = [];

var TABLE;

const NUM_NODES = 16;

const SEARCH_SPACE = [
	0,
	16,
	100,
	508,
	2272,
	8984,
	31656,
	99928,
	283400,
	720384,
	1626160,
	3220808,
	5531072,
	8175592,
	10425784,
	11686456
];

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
});

function clear_table() {
	$('tr.search-result').remove();
	TABLE = [undefined, '', '', '', '', '', '', '', '', '', '', ''];
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
	console.log(word + ', ' + key);
	var entry_text = '<tr class="search-result" id="result-' + word + '"><td>' + word.length + '</td><td>' + word + '</td></tr>';
	if (key != undefined) {
		$('tr.search-result#result-' + key).before(entry_text);
	} else {
		$('table#results').append(entry_text);
	}
}

function solve() {
	if (get_input()) {
		clear_table();
		iterate_tree(word_search(), 0, new Set());
	}
}

function iterate_tree(generator, index, found) {
	for (i=0; i<1000; i++) {
		var next_element = generator.next();
		if (next_element.done) {
			$('progress').attr('value', '1');
			$('#status').text('Done!');
			return;
		}
		var word = next_element.value;
		if (word.length >= MIN_LENGTH && DICTIONARY.has(word)) {
			if (!found.has(word)) {
				found.add(word);
				add_table_entry(word);
			}
		}
	}
	index += 1000;
	var completion = index / SEARCH_SPACE[MAX_LENGTH];
	$('progress').attr('value', completion);
	$('#status').text('Solving (' + Math.round(completion * 100) + '%)');
	setTimeout(function() {iterate_tree(generator, index, found);}, 0);
}

function get_input() {
	WORD_GRID = $("textarea[name='grid']").val().replace(/\n/g, '');
	MIN_LENGTH = parseInt($("input[name='min-length']").val());
	MAX_LENGTH = parseInt($("input[name='max-length']").val());

	if (WORD_GRID.length != 16) {
		$('#status').text('Error: Expected 16 letters, got ' + WORD_GRID.length + '.');
		$('#status').attr('style', 'color: red');
		return false;
	} else {
		$('#status').removeAttr('style');
		return true;
	}
}

function* word_search() {
	for (var vertex=0; vertex<NUM_NODES; vertex++) {
		yield* all_simple_paths(vertex, 0);
	}
}

function* all_simple_paths(start, length) {
	if (length >= MAX_LENGTH) {
		return;
	}

	yield WORD_GRID[start];

	VISITED[start] = true;
	for (var neighbor of neighborhood(start)) {
		if (!VISITED[neighbor]) {
			for (var path of all_simple_paths(neighbor, length + 1)) {
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
