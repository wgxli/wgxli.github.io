// Lines
function Line(start, end, color) {
	if (color == undefined) {color = WHITE.copy();}
	this.start = start;
	this.end = end;
	this.color = color;
}

Line.prototype.isolate = function() {
	this.start = this.start.copy();
	this.end = this.end.copy();
	this.color = this.color.copy();
}

Line.prototype.copy = function() {
	return new Line(this.start.copy(), this.end.copy(), this.color.copy());
}

Line.prototype.value = function() {
	return [this.start.value(), this.end.value()];
}

Line.prototype.draw = function(canvas) {
	canvas.line(this.start.value(), this.end.value(), this.color.value());
}

Line.prototype.toString = function() {
	return 'Line(' + this.start.toString() + ', ' + this.end.toString() + ')';
}

// Utilities
Line.prototype.midpoint = function() {
	var self = this;
	return new Vector(
		new Variable(function() {return self.start.x.lerp(self.end.x).value()}),
		new Variable(function() {return self.start.y.lerp(self.end.y).value()}),
	);
}

// Animation
function animate_line(start, end) {
	var line = new Line(start, start.copy());
	line.end.animate_to(end);
	return line
}



// Angle Marker
function AngleMarker(start, vertex, end, size) {
	if (size == undefined) {size = constant_variable(0.1);}
	this.start = start;
	this.vertex = vertex;
	this.end = end;
	this.size = size;
}

AngleMarker.prototype.angle = function() {
	var side_a = this.start.sub(this.vertex);
	var side_b = this.end.sub(this.vertex);

	return side_a.angle_to(side_b);
}

AngleMarker.prototype.draw = function(canvas) {
	var side_a = this.start.sub(this.vertex);
	var side_b = this.end.sub(this.vertex);

	canvas.arc(this.vertex.value(), this.size.value(), side_a.angle().value(), side_b.angle().value());
}

AngleMarker.prototype.toString = function() {
	return 'AngleMarker(' + start.toString() + ', ' + this.vertex.toString() + ', ' + this.end.toString() + ', size=' + this.size.toString() + ')';
}

// Label
function Label(text, anchor, angle) {
	if (angle == undefined) {angle = constant_variable(0);}
	this.text = text;
	this.anchor = anchor;
	this.angle = angle;
}

Label.prototype.draw = function() {
	canvas.text(this.text, this.anchor.value(), this.angle.value());
}
