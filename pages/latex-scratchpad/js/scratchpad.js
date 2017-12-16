$(document).ready(function() {
	$('#input').on('input', render);
	render();
});

function render() {
	var source = $('#input').val().split('\n');
	var output = [];
	for (var line of source) {
		if (line == '') {
			continue;
		}
		try {
			output.push(katex.renderToString(line, {
				displayMode: true,
				throwOnError: false
			}));
		} catch (error) {
			console.log(error);
			output.push(`<div class='error'>${error.message.slice(19)}</div>`);
		}
	}
	$('#output').children().remove();
	$('#output').append(output.join('\n'));
}
