function Color(r, g, b, a) {
	if (a == undefined) {a = 1;}
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a;
}

Color.prototype.copy = function() {
	return new Color(this.r.copy(), this.g.copy(), this.b.copy(), this.a.copy());
}

function to_int(value) {
	return Math.round(value * 255);
}

function to_hex(value) {
	var level = to_int(value);
	return level.toString(16).padStart(2, '0');
}

Color.prototype.value = function(other) {
	if (this.a.value() > 0.99) {
		return '#' + to_hex(this.r.value()) + to_hex(this.g.value()) + to_hex(this.b.value());
	} else {
		return 'rgba(' + to_int(this.r.value()) + ', ' + to_int(this.g.value()) + ', ' + to_int(this.b.value()) + ', ' + this.a.value() + ')';
	}
}

function constant_color(r, g, b, a) {
	if (a == undefined) {a = 1;}
	return new Color(CV(r), CV(g), CV(b), CV(a));
}
CColor = constant_color;

Color.prototype.animate_to = function(other) {
	this.r.animate_to(other.r);
	this.g.animate_to(other.g);
	this.b.animate_to(other.b);
	this.a.animate_to(other.a);
}

WHITE = constant_color(1, 1, 1);
RED = constant_color(1, 0, 0);
BLUE = constant_color(0, 0.5, 1);
TRANSPARENT = constant_color(1, 1, 1, 0);
