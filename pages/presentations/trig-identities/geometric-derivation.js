var raw_canvas = $('#geometric-derivation');
var canvas = new Canvas(raw_canvas, [500, 250], 200);
var diagram = new Diagram(canvas);

// Outline
diagram.add_step(draw_line);
diagram.add_click(rotate_line);
diagram.add_click(draw_base);
diagram.add_click(draw_diagram);
//diagram.add_step(animate);

// Constants
var ALPHA = 0.4;
var BETA = 0.2;

// Variables
var alpha = constant_variable(0);
var beta = constant_variable(0);
var gamma = alpha.add(beta);

// Points
var endpoint = polar(gamma);
var foot = new Vector(endpoint.x, ORIGIN.y);
var mid_endpoint = polar(beta, alpha.cosine());

// Lines
var radius = new Line(ORIGIN, endpoint);
var cevian;
var vertical;
var horizontal;

// Behavior
function draw_line() {
	diagram.add_object(radius);
}

function rotate_line() {
	horizontal = new Line(ORIGIN, constant_vector(1, 0));
	cevian = new Line(ORIGIN, polar(beta));
	diagram.add_object(horizontal);
	diagram.add_object(cevian);

	beta.animate_to(BETA);
	alpha.animate_to(ALPHA);

}

function draw_base() {
	vertical = new Line(endpoint, endpoint.copy());
	diagram.add_object(vertical);

	vertical.end.animate_to(foot);
	horizontal.end.animate_to(foot);
	cevian.end.animate_to(new Vector(gamma.cosine(), beta.sine()));
}

function draw_diagram() {
	vertical.end = foot;
	horizontal.end = foot;
	return;
}

diagram.run();
