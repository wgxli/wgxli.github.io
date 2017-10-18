function Canvas(canvas, center, scale) {
	this.container = canvas
	this.canvas = canvas[0].getContext('2d');
	this.center = center;
	this.scale = scale;
}

Canvas.prototype.click = function(callback) {
	this.container.off();
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

Canvas.prototype.line = function(start, end, color) {
	if (color == undefined) {
		color = DEFAULT_COLOR;
	}
	var start_screen = this.world_to_screen(start);
	var end_screen = this.world_to_screen(end);

	this.canvas.beginPath();
	this.canvas.moveTo(start_screen[0], start_screen[1]);
	this.canvas.lineTo(end_screen[0], end_screen[1]);
	this.canvas.strokeStyle = color;
	this.canvas.lineWidth = 2;
	this.canvas.stroke();
}

Canvas.prototype.arc = function(center, radius, start_angle, end_angle) {
	var center_screen = this.world_to_screen(center);
	var radius_screen = radius * this.scale;

	this.canvas.beginPath();
	this.canvas.arc(center_screen[0], center_screen[1], radius_screen, -start_angle, -end_angle, true);
	this.canvas.strokeStyle = DEFAULT_COLOR;
	this.canvas.lineWidth = 1;
	this.canvas.stroke();
}

Canvas.prototype.text = function(text, anchor, angle) {
	if (angle == undefined) {angle = 0;}
	var anchor_screen = this.world_to_screen(anchor);

	this.canvas.fillStyle = DEFAULT_COLOR;
	this.canvas.textAlign = 'center';
	this.canvas.font = '18pt computer-modern';

	this.canvas.save();
	this.canvas.translate(anchor_screen[0], anchor_screen[1]);
	this.canvas.rotate(-angle);
	this.canvas.fillText(text, 0, 0);
	this.canvas.restore();
}
