function Canvas(canvas, center, scale) {
	this.container = canvas
	this.canvas = canvas[0].getContext('2d');
	this.center = center;
	this.scale = scale;
}

Canvas.prototype.off = function() {
	this.container.off();
}

Canvas.prototype.click = function(callback) {
	this.container.click(callback);
}

Canvas.prototype.world_to_screen = function(world_vector) {
	return [this.center[0] + world_vector[0] * this.scale,
	       this.center[1] - world_vector[1] * this.scale];
}

// Drawing
var DEFAULT_COLOR = 'white';

Canvas.prototype.clear = function() {
	this.canvas.clearRect(0, 0, this.container[0].width, this.container[0].height);
}

Canvas.prototype.start_path = function() {
	this.canvas.beginPath();
}

Canvas.prototype.end_path = function() {
	this.canvas.stroke();
}
Canvas.prototype.stop_path = Canvas.prototype.end_path;

Canvas.prototype.color = function(color) {
	this.canvas.strokeStyle = color;
}

Canvas.prototype.width = function(width) {
	this.canvas.lineWidth = width;
}

Canvas.prototype.line = function(start, end) {
	var start_screen = this.world_to_screen(start);
	var end_screen = this.world_to_screen(end);

	this.canvas.moveTo(start_screen[0], start_screen[1]);
	this.canvas.lineTo(end_screen[0], end_screen[1]);
}

Canvas.prototype.arc = function(center, radius, start_angle, end_angle) {
	var center_screen = this.world_to_screen(center);
	var radius_screen = radius * this.scale;

	this.canvas.arc(center_screen[0], center_screen[1], radius_screen, -start_angle, -end_angle, true);
}

Canvas.prototype.text = function(text, anchor, angle) {
	if (angle == undefined) {angle = 0;}
	var anchor_screen = this.world_to_screen(anchor);

	this.canvas.fillStyle = DEFAULT_COLOR;
	this.canvas.textAlign = 'center';
	this.canvas.font = '18pt computer-modern';

	if (Math.abs(angle) < 0.01) {
		this.canvas.fillText(text, anchor_screen[0], anchor_screen[1]);
	} else {
		this.canvas.save();
		this.canvas.translate(anchor_screen[0], anchor_screen[1]);
		this.canvas.rotate(-angle);
		this.canvas.fillText(text, 0, 0);
		this.canvas.restore();
	}
}
