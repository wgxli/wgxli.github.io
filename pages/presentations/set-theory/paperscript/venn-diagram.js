var center = view.center;
var width = view.bounds.width - 10;
var height = view.bounds.height - 10;
var box_size = new Size(width, height);

var radius = height * 0.4;
var offset = new Point(width * 0.15, 0);

var upper_left = center - box_size/2;
var outer_box = new Path.Rectangle(upper_left, box_size);

var left_circle = new Path.Circle(center - offset, radius);
var right_circle = new Path.Circle(center + offset, radius);

var union = left_circle.unite(right_circle);

var left_region = left_circle.subtract(right_circle);
var right_region = right_circle.subtract(left_circle);
var central_region = right_circle.intersect(left_circle);
var outer_region = outer_box.subtract(union);

contents = [[1, 2], [3, 4], [5, 6], [7, 8]];
regions = [left_region, central_region, right_region, outer_region];
states = [false, false, false, false];

function update_state(event) {
	i = this.region_index;
	console.log(i);
	if (states[i]) {
		regions[i].fillColor='black';
		for (var j = 0; j < 2; j++) {
			text_items[i][j].fillColor='#ddd';
		}
	} else {
		regions[i].fillColor='#ddd';
		for (var j = 0; j < 2; j++) {
			text_items[i][j].fillColor='black';
		}
	}
	states[i] = !states[i];

	update_label();
}

for (var i = 0; i < 4; i++) {
	region = regions[i];
	region.region_index = i;
	region.strokeWidth = 3;
	region.strokeColor = 'white';
	region.fillColor = 'black';
	region.onClick = update_state;
}

// Text
function add_text(x, y, text) {
	var text_item = new PointText(center + (new Point(x, y)) * radius);
	text_item.justification = 'center';
	text_item.fillColor = '#ddd';
	text_item.fontFamily = 'Palatino Linotype';
	text_item.fontSize = radius * 0.4;
	text_item.content = text;
	return text_item
}

text_items = [
[add_text(-0.9, -0.3, '1'), add_text(-0.9, 0.5, '2')],
[add_text(0, -0.3, '3'), add_text(0, 0.5, '4')],
[add_text(0.9, -0.3, '5'), add_text(0.9, 0.5, '6')],
[add_text(-1.4, -0.9, '7'), add_text(1.4, -0.9, '8')]];

label_dict = {
	0: '\\emptyset',
	1: '(A \\cup B)^\\complement',
	2: 'B \\setminus A',
	3: 'A^\\complement',
	4: 'A \\cap B',
	5: '(A \\vartriangle B)^\\complement',
	6: 'B',
	7: '(A \\setminus B)^\\complement',
	8: 'A \\setminus B',
	9: 'B^\\complement',
	10: 'A \\vartriangle B',
	11: '(A \\cap B)^\\complement',
	12: 'A',
	13: '(B \\setminus A)^\\complement',
	14: 'A \\cup B',
	15: 'U'
}

venn_label = $('#venn-label')[0];

function update_label() {
	code = 0;
	elements = [];
	for (var i = 0; i < 4; i++) {
		code *= 2;
		if (states[i]) {
			code += 1;
			for (var j = 0; j < 2; j++) {
				elements.push(contents[i][j]);
			}
		}
	}
	latex_string = label_dict[code] + ' = \\{' + elements.join(', ') + '\\}';
	katex.render(latex_string, venn_label);
}

update_label();
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 2; j++) {
		text_items[i][j].region_index = i;
		text_items[i][j].onClick = update_state;
	}
}
