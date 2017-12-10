// Lines
function Line(start, end) {
	this.start = start;
	this.end = end;
	this.color = WHITE.copy();
	this.width = CV(2);
}

Line.prototype.isolate = function() {
	this.start = this.start.copy();
	this.end = this.end.copy();
	this.color = this.color.copy();
}

Line.prototype.copy = function() {
	return new Line(this.start.copy(), this.end.copy());
}

Line.prototype.value = function() {
	return [this.start.value(), this.end.value()];
}

Line.prototype.draw = function(canvas) {
	canvas.start_path();
	canvas.color(this.color.value());
	canvas.width(this.width.value());
	canvas.line(this.start.value(), this.end.value());
	canvas.stop_path();
}

Line.prototype.toString = function() {
	return 'Line(' + this.start.toString() + ', ' + this.end.toString() + ')';
}

// Animation
function AnimLine(start, end) {
	var line = new Line(start, start.copy());
	line.end.animate_to(end);
	return line;
}

// Utilities
Line.prototype.midpoint = function() {
	var self = this;
	return new Vector(
		new Variable(function() {return self.start.x.lerp(self.end.x).value()}),
		new Variable(function() {return self.start.y.lerp(self.end.y).value()}),
	);
}


// Rays
function Ray(start, end) {
	this.start = start;
	this.end = end;
	this.color = WHITE.copy();
	this.width = CV(2);
	this.arrow_size = CV(0.05);
}

Ray.prototype.isolate = function() {
	this.start = this.start.copy();
	this.end = this.end.copy();
	this.color = this.color.copy();
	this.width = this.width.copy();
	this.arrow_size = this.arrow_size.copy();
}

Ray.prototype.copy = function() {
	return new Ray(this.start.copy(), this.end.copy());
}

Ray.prototype.value = function() {
	return [this.start.value(), this.end.value()];
}

Ray.prototype.draw = function(canvas) {
	canvas.start_path();
	canvas.color(this.color.value());
	canvas.width(this.width.value());
	canvas.line(this.start.value(), this.end.value());
	canvas.stop_path();
}

Ray.prototype.toString = function() {
	return 'Ray(' + this.start.toString() + ', ' + this.end.toString() + ')';
}

// Utilities
Ray.prototype.midpoint = function() {
	var self = this;
	return new Vector(
		new Variable(function() {return self.start.x.lerp(self.end.x).value()}),
		new Variable(function() {return self.start.y.lerp(self.end.y).value()}),
	);
}


// Angle Marker
function AngleMarker(start, vertex, end) {
	this.start = start;
	this.vertex = vertex;
	this.end = end;
	this.color = WHITE.copy();
	this.size = CV(0.1);
}

AngleMarker.prototype.angle = function() {
	var side_a = this.start.sub(this.vertex);
	var side_b = this.end.sub(this.vertex);

	return side_a.angle_to(side_b);
}

AngleMarker.prototype.draw = function(canvas) {
	var side_a = this.start.sub(this.vertex);
	var side_b = this.end.sub(this.vertex);

	canvas.start_path();
	canvas.color(this.color.value());
	canvas.arc(this.vertex.value(), this.size.value(), side_a.angle().value(), side_b.angle().value());
	canvas.stop_path();
}

AngleMarker.prototype.toString = function() {
	return 'AngleMarker(' + start.toString() + ', ' + this.vertex.toString() + ', ' + this.end.toString() + ', size=' + this.size.toString() + ')';
}

// Right Angle Marker
function RightAngleMarker(start, vertex) {
	this.start = start;
	this.vertex = vertex;
	this.size = CV(0.05);
	this.color = WHITE.copy();
	this.width = CV(1);
}


RightAngleMarker.prototype.isolate = function() {
	this.start = this.start.copy();
	this.vertex = this.vertex.copy();
	this.size = this.size.copy();
}

RightAngleMarker.prototype.draw = function(canvas) {
	var angle = this.start.sub(this.vertex).angle();

	var a = this.vertex.add(polar(angle, this.size));
	var b = this.vertex.add(polar(angle.add(CV(Math.PI/2)), this.size));
	var c = this.vertex.add(polar(angle.add(CV(Math.PI/4)), this.size.scale(CV(Math.sqrt(2)))));

	canvas.start_path();
	canvas.color(this.color.value());
	canvas.width(this.width.value());
	canvas.line(a.value(), c.value());
	canvas.line(c.value(), b.value());
	canvas.stop_path();
}

// Label
function Label(text, anchor) {
	this.text = text;
	this.anchor = anchor;
	this.angle = CV(0);
	this.color = TRANSPARENT.copy();
	this.color.animate_to(WHITE);
}

Label.prototype.draw = function(canvas) {
	canvas.fill_color(this.color.value());
	canvas.text(this.text, this.anchor.value(), this.angle.value());
}
