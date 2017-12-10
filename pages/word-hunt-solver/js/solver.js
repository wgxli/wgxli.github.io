var WORD_GRID = '';
var MIN_LENGTH = 0;
var MAX_LENGTH = 0;

var NUM_NODES;
var VISITED = [];
var JOINED;
var NEIGHBORHOOD;

$(document).ready(function() {
	$("textarea[name='grid']").on('input', solve);
	$("input[name='min-length']").on('input', solve);
	$("input[name='max-length']").on('input', solve);
	solve();
});




function clear_table() {
	$('tr.search-result').remove();
}

function add_table_entries(words) {
	var words = Array.from(words).sort(function(a, b) {return b.length - a.length || a.localeCompare(b);});

	entries = [];
	for (word of words) {
		entries.push(`<tr class="search-result"><td>${word.length}</td><td>${word}</td></tr>`);
	}
	$('table#results').append(entries.join('\n'));
}

function solve() {
	var start_time = (new Date()).getTime();

	get_input();
	clear_table();
	words_found = iterate_tree(word_search());
	add_table_entries(words_found);

	var end_time = (new Date()).getTime();
	var seconds_elapsed = (end_time - start_time)/1000;
	
	console.log(`${words_found.size} words found in ${seconds_elapsed} seconds.`);
	$('#num-results').text(`${words_found.size} words found.`);
}

function iterate_tree(generator) {
	found = new Set();
	for (word of generator) {
		if (word.length >= MIN_LENGTH) {
			if (!found.has(word)) {
				found.add(word);
			}
		}
	}
	return found;
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
	WORD_GRID = WORD_GRID.replace(/\n/g, '');
	
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

	NEIGHBORHOOD = {};
	for (var i=0; i < NUM_NODES; i++) {
		NEIGHBORHOOD[i] = neighborhood(i);
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

	var letter = WORD_GRID[start];

	trie = trie[letter]

	if ('eow' in trie) {
		yield letter;
	}

	VISITED[start] = true;
	for (var neighbor of NEIGHBORHOOD[start]) {
		if (!VISITED[neighbor] && WORD_GRID[neighbor] in trie) {
			for (var path of all_simple_paths(neighbor, length + 1, trie)) {
				yield letter + path;
			}
		}
	}
	VISITED[start] = false;
}

function neighborhood(vertex) {
	neighbors = new Set();
	var adjacency_list = JOINED[vertex];
	for (var i=0; i<NUM_NODES; i++) {
		if (adjacency_list[i]) {
			neighbors.add(i);
		}
	}
	return neighbors;
}
