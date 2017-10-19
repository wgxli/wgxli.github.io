var raw_canvas = $('#geometric-derivation');
var canvas = new Canvas(raw_canvas, [130, 450], 450);
var diagram = new Diagram(canvas);

// Outline
diagram.add_step(draw_line);
diagram.add_click(rotate_line);
diagram.add_click(draw_base);
diagram.add_click(highlight_vertical);
diagram.add_click(label_vertical);
diagram.add_click(label_horizontal);
diagram.add_click(move_legs);
diagram.add_click(draw_diagram);
diagram.add_click(label_alpha);
diagram.add_click(highlight_angle);
diagram.add_click(label_angle);
diagram.add_click(label_beta);
//diagram.add_step(animate);

// Constants
var ALPHA = CV(0.6);
var BETA = CV(0.4);

// Variables
var alpha = CV(0);
var beta = CV(0);
var gamma = alpha.add(beta);

// Points
var endpoint = polar(gamma);
var foot = new Point(endpoint.x, ORIGIN.y);
var mid_endpoint = polar(beta, alpha.cosine());
var upper_right;
var lower_right;
var upper_left;

// Lines
var radius = new Line(ORIGIN, endpoint);
var cevian;
var vertical;
var horizontal;

// Angle Markers
var foot_marker;
var alpha_marker;
var beta_marker;
var beta_similar_marker;

// Behavior
function draw_line() {
	diagram.add_object(radius);
	diagram.add_object(new Label('1', ORIGIN.lerp(endpoint).add(polar(gamma.add(CV(Math.PI/2)), CV(0.03)))));
}

function rotate_line() {
	horizontal = new Line(ORIGIN, constant_vector(1, 0));
	cevian = new Line(ORIGIN, polar(beta));
	diagram.add_object(horizontal);
	diagram.add_object(cevian);
	
	var alpha_marker = new AngleMarker(mid_endpoint, ORIGIN, endpoint);
	var beta_marker = new AngleMarker(foot, ORIGIN, mid_endpoint);
	diagram.add_object(alpha_marker);
	diagram.add_object(beta_marker);

	diagram.add_object(new Label('α', polar(beta.lerp(gamma, CV(0.4)), CV(0.2))));
	diagram.add_object(new Label('β', polar(beta.scale(CV(0.3)), CV(0.2))));

	beta.animate_to(BETA);
	alpha.animate_to(ALPHA);

}

function draw_base() {
	vertical = new Line(endpoint, endpoint.copy());
	diagram.add_object(vertical);

	vertical.end.animate_to(foot);
	horizontal.end.animate_to(foot);

	foot_marker = new RightAngleMarker(endpoint, foot);
	diagram.add_object(foot_marker);

	var cevian_length = CV(1);
	cevian.end = polar(beta, cevian_length);
	cevian_length.animate_to(gamma.cos().div(beta.cos()));
}

function highlight_vertical() {
	vertical.color.animate_to(RED);
}

function label_vertical() {
	vertical.color.animate_to(WHITE);
	diagram.add_object(new Label('sin(α + β)', vertical.midpoint().add(CVec(0.03, 0)), CV(-Math.PI/2)));
}

function label_horizontal() {
	diagram.add_object(new Label('cos(α + β)', horizontal.midpoint().add(CVec(0, -0.06))));
}

function move_legs() {
	upper_left = new Point(ORIGIN.x, endpoint.y);
	lower_right = new Point(alpha.cos().times(beta.cos()), ORIGIN.x);
	upper_right = new Point(lower_right.x, endpoint.y);

	foot_marker.isolate();
	vertical.isolate();
	horizontal.isolate();

	var lower_side = horizontal.copy();
	diagram.add_object(lower_side);
	lower_side.end.animate_to(lower_right);

	vertical.start.animate_to(upper_left);
	vertical.end.animate_to(ORIGIN);

	horizontal.start.animate_to(upper_left);
	horizontal.end.animate_to(endpoint);

	foot_marker.start.animate_to(ORIGIN);
	foot_marker.vertex.animate_to(upper_left);

	cevian.end.animate_to(polar(beta, alpha.cos()));
}

function draw_diagram() {
	diagram.add_object(animate_line(endpoint, mid_endpoint));
	diagram.add_object(animate_line(endpoint, upper_right));
	diagram.add_object(animate_line(mid_endpoint, upper_right));
	diagram.add_object(animate_line(mid_endpoint, lower_right));

	beta_similar_marker = new AngleMarker(upper_right, mid_endpoint, endpoint);
	diagram.add_object(beta_similar_marker);
	diagram.add_object(new RightAngleMarker(endpoint, mid_endpoint));
	diagram.add_object(new RightAngleMarker(mid_endpoint, lower_right));
}

function highlight_angle() {
	beta_similar_marker.color.animate_to(RED);
}

function label_angle() {
	beta_similar_marker.color.animate_to(WHITE);
	diagram.add_object(new Label('β', mid_endpoint.add(CVec(-0.03, 0.15))));
}

function label_alpha() {
	diagram.add_object(new Label('cos(α)', ORIGIN.lerp(mid_endpoint).add(polar(beta.sub(CV(Math.PI/2)), CV(0.06))), beta));
	diagram.add_object(new Label('sin(α)', endpoint.lerp(mid_endpoint).add(polar(beta, CV(-0.06))), beta.sub(CV(Math.PI/2))));
}

function label_beta() {
	diagram.add_object(new Label('cos(α) cos(β)', ORIGIN.lerp(lower_right).add(CVec(0, -0.06))));
	diagram.add_object(new Label('cos(α) sin(β)', mid_endpoint.lerp(lower_right).add(CVec(0.03, 0)), CV(-Math.PI/2)));
	diagram.add_object(new Label('sin(α) cos(β)', upper_right.lerp(mid_endpoint).add(CVec(0.03, 0)), CV(-Math.PI/2)));
	diagram.add_object(new Label('sin(α) sin(β)', endpoint.lerp(upper_right).add(CVec(0, 0.03))));
}

diagram.run();
function animate() {
	requestAnimationFrame(animate);
	diagram.draw();
}
animate();
