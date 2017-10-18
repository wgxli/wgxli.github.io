function Variable(expression) {
	this.value = expression;
}

function constant_variable(value) {
	return new Variable(function() {return value;});
}
CV = constant_variable

Variable.prototype.copy = function() {
	return new Variable(this.value);
}

// Arithmetic
Variable.prototype.add = function(other) {
	var self = this;
	return new Variable(function() {return self.value() + other.value();});
}

Variable.prototype.subtract = function(other) {
	var self = this;
	return new Variable(function() {return self.value() - other.value();});
}
Variable.prototype.sub = Variable.prototype.subtract;

Variable.prototype.multiply = function(other) {
	var self = this;
	return new Variable(function() {return self.value() * other.value();});
}
Variable.prototype.mul = Variable.prototype.multiply;
Variable.prototype.times = Variable.prototype.multiply;
Variable.prototype.scale = Variable.prototype.multiply;

Variable.prototype.divide = function(other) {
	var self = this;
	return new Variable(function() {return self.value() / other.value();});
}
Variable.prototype.div = Variable.prototype.divide;

Variable.prototype.inverse = function() {
	var self = this;
	return new Variable(function() {return 1 / self.value();});
}

// Trigonometry
Variable.prototype.sine = function() {
	var self = this;
	return new Variable(function() {return Math.sin(self.value());});
}
Variable.prototype.sin = Variable.prototype.sine;

Variable.prototype.cosine = function() {
	var self = this;
	return new Variable(function() {return Math.cos(self.value());});
}
Variable.prototype.cos = Variable.prototype.cosine;

// Utility
Variable.prototype.lerp = function(other, factor) {
	if (factor == undefined) {factor = CV(0.5);}
	return this.mul(CV(1).sub(factor)).add(other.scale(factor));
}


// Animation
Variable.prototype.animate_to = function(end, duration, easing_function) {
	if (easing_function == undefined) {
		easing_function = cosine_ease;
	}
	if (duration == undefined) {
		duration = 300;
	}

	var start_value = this.value();
	var start_time = GLOBAL_TIME();

	var self = this;
	this.value = function() {
		var time = GLOBAL_TIME();
		var progress = (time - start_time) / duration;

		if (progress > 1) {
			self.value = function() {return end.value();}
			progress = 1;
		}
		return start_value + (end.value() - start_value) * easing_function(progress);
	}
}

function cosine_ease(t) {
	return (1 - Math.cos(t * Math.PI))/2;
}
