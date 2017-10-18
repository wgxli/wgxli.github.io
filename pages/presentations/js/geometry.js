// Vectors
function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.prototype.value = function() {
	return [this.x.value(), this.y.value()];
}

Vector.prototype.copy = function() {
	return new Vector(this.x.copy(), this.y.copy());
}

Vector.prototype.scale = function(factor) {
	return new Vector(this.x.scale(factor), this.y.scale(factor));
}

function polar(angle, magnitude) {
	if (magnitude == undefined) {magnitude = constant_variable(1);}
	return new Vector(angle.cosine().scale(magnitude), angle.sine().scale(magnitude));
}

function constant_vector(x, y) {
	return new Vector(constant_variable(x), constant_variable(y));
}

Vector.prototype.animate_to = function(other) {
	this.x.animate_to(other.x.value());
	this.y.animate_to(other.y.value());
}

ORIGIN = new Vector(constant_variable(0), constant_variable(0));

// Lines
function Line(start, end) {
	this.start = start;
	this.end = end;
}

Line.prototype.value = function() {
	return [this.start.value(), this.end.value()];
}

Line.prototype.draw = function(canvas) {
	canvas.line(this.start.value(), this.end.value());
}
