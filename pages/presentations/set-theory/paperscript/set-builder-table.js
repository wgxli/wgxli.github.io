fragments = [];
animation_function = null;
start_time = null;
global_state = null;

function onMouseDown(event) {
	if (fragments.length) {
		start_time = (new Date()).getTime();
		functions = fragments.pop();
		initialization_function = functions[0];
		animation_function = functions[1];
		initialization_function();
	} else {
		animation_function = null;
	}
}

function onFrame(event) {
	if (animation_function != null) {
		var stop = animation_function(event);
		if (stop) {
			animation_function = null;
		}
	}
}

var top_y = 50;
var bottom_y = 100;
var spacing = 50;

function add_text(x, y, text) {
	var text_item = new PointText(new Point(x, y));
	text_item.justification = 'center';
	text_item.fillColor = 'white';
	text_item.fontFamily = 'Palatino Linotype';
	text_item.fontSize = 30;
	text_item.content = text;
	return text_item;
}

fragments.push([
function(event) {
	global_state = 1;
},
function(event) {
	if ((new Date()).getTime() - start_time > global_state * 100) {
		add_text(50 + spacing * global_state, top_y, global_state - 1);
		global_state += 1;
	}
	if (global_state > 10) {
		add_text(50 + spacing * global_state, top_y, '...');
		return true;
	}
	return false;
}
]);

fragments.push([
function(event) {
	global_state = 1;
},
function(event) {
	if ((new Date()).getTime() - start_time > global_state * 100) {
		add_text(50 + spacing * global_state, bottom_y, (global_state - 1)*(global_state-1));
		global_state += 1;
	}
	if (global_state > 10) {
		add_text(50 + spacing * global_state, bottom_y, '...');
		return true;
	}
	return false;
}
]);

fragments.push([
function(event) {
	add_text(50, bottom_y, 'S = {');
	add_text(625, bottom_y, '}');
},
function(event) {return true;}
]);



fragments.reverse();
