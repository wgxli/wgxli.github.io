// Vectors
function Vector(x, y) {
	this.x = x;
	this.y = y;
}
Point = Vector;

Vector.prototype.value = function() {
	return [this.x.value(), this.y.value()];
}

Vector.prototype.copy = function() {
	return new Vector(this.x.copy(), this.y.copy());
}

Vector.prototype.toString = function() {
	return 'Vector(' + x.toString() + ', ' + y.toString() + ')';
}

// Arithmetic
Vector.prototype.add = function(other) {
	return new Vector(this.x.add(other.x), this.y.add(other.y));
}

Vector.prototype.sub = function(other) {
	return new Vector(this.x.sub(other.x), this.y.sub(other.y));
}

Vector.prototype.scale = function(factor) {
	return new Vector(this.x.scale(factor), this.y.scale(factor));
}

// Vector Manipulations
Vector.prototype.angle = function() {
	var self = this;
	return new Variable(function() {return Math.atan2(self.y.value(), self.x.value());});
}

// Interpolation
Vector.prototype.lerp = function(other, factor) {
	return new Vector(this.x.lerp(other.x, factor), this.y.lerp(other.y, factor));
}

// Animation
Vector.prototype.animate_to = function(other) {
	this.x.animate_to(other.x);
	this.y.animate_to(other.y);
}

// Special Constructors
function polar(angle, magnitude) {
	if (magnitude == undefined) {magnitude = constant_variable(1);}
	return new Vector(angle.cosine().scale(magnitude), angle.sine().scale(magnitude));
}

function constant_vector(x, y) {
	return new Vector(constant_variable(x), constant_variable(y));
}
CVec = constant_vector

ORIGIN = new Vector(constant_variable(0), constant_variable(0));
