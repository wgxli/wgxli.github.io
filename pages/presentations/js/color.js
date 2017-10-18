function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.copy = function() {
	return new Color(this.r.copy(), this.g.copy(), this.b.copy());
}

function to_hex(value) {
	var level = Math.round(value * 255);
	return level.toString(16).padStart(2, '0');
}

Color.prototype.value = function(other) {
	return '#' + to_hex(this.r.value()) + to_hex(this.g.value()) + to_hex(this.b.value());
}

function constant_color(r, g, b) {
	return new Color(constant_variable(r), constant_variable(g), constant_variable(b));
}

Color.prototype.animate_to = function(other) {
	this.r.animate_to(other.r);
	this.g.animate_to(other.g);
	this.b.animate_to(other.b);
}

WHITE = constant_color(1, 1, 1);
BLUE = constant_color(0, 0.5, 1);
