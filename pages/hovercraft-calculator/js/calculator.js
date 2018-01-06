STATE = {};
GRAVITY = 9.8;
AIR_DENSITY = 1.225;

function calculate() {
	area = STATE['length'] * STATE['width'];
	weight = STATE['mass'] * GRAVITY;

	pressure = weight / area;

	disk_area = Math.PI * (STATE['diameter'] / 2)**2;

	power = STATE['voltage'] * STATE['current'] * STATE['efficiency'];

	flow_rate = power / pressure;
	intake_velocity = flow_rate / disk_area;

	thrust = (2 * power**2 * AIR_DENSITY * disk_area)**(1/3);

	write_value('pressure', pressure);
	write_value('flow-rate', flow_rate * 1e6);
	write_value('intake-velocity', intake_velocity);
	write_value('thrust', thrust);
}

function write_value(name, value) {
	$('#' + name).text(value.toPrecision(3));
}

function add_trigger(name, factor=1) {
	$('#' + name).on('input',
	function() {
		STATE[name] = parseFloat($('#' + name).val()) * factor;
		console.log(name, STATE[name]);
		calculate();
	});
	STATE[name] = parseFloat($('#' + name).val()) * factor;
	calculate();
}

$(document).ready(function () {
	add_trigger('length', 0.01);
	add_trigger('width', 0.01);
	add_trigger('mass');

	add_trigger('voltage');
	add_trigger('current');

	add_trigger('diameter', 0.01);
	add_trigger('efficiency');
});
