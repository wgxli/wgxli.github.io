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
Canvas.prototype.clear = function() {
	this.canvas.clearRect(0, 0, this.container.width(), this.container.height());
}

Canvas.prototype.line = function(start, end) {
	var start_screen = this.world_to_screen(start);
	var end_screen = this.world_to_screen(end);

	this.canvas.beginPath();
	this.canvas.moveTo(start_screen[0], start_screen[1]);
	this.canvas.lineTo(end_screen[0], end_screen[1]);
	this.canvas.strokeStyle = 'white';
	this.canvas.stroke();
}
