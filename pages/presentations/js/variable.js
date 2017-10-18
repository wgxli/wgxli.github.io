function Variable(expression) {
	this.value = expression;
}

function constant_variable(value) {
	return new Variable(function() {return value;});
}

Variable.prototype.copy = function() {
	return new Variable(this.value);
}

// Arithmetic
Variable.prototype.add = function(other) {
	var self = this;
	return new Variable(function() {return self.value() + other.value();});
}

Variable.prototype.scale = function(factor) {
	var self = this;
	return new Variable(function() {return self.value() * factor.value();});
}

Variable.prototype.inverse = function() {
	var self = this;
	return new Variable(function() {return 1 / self.value();});
}

// Trigonometry
Variable.prototype.sine = function() {
	var self = this;
	return new Variable(function() {return Math.sin(self.value());});
}

Variable.prototype.cosine = function() {
	var self = this;
	return new Variable(function() {return Math.cos(self.value());});
}


// Animation
Variable.prototype.animate_to = function(end_value, duration, easing_function) {
	if (easing_function == undefined) {
		easing_function = cosine_ease;
	}
	if (duration == undefined) {
		duration = 200;
	}

	var start_value = this.value();
	var start_time = GLOBAL_TIME();

	this.value = function() {
		var time = GLOBAL_TIME();
		var progress = (time - start_time) / duration;

		if (progress > 1) {progress = 1;}
		return start_value + (end_value - start_value) * easing_function(progress);
	}
}

function cosine_ease(t) {
	return (1 - Math.cos(t * Math.PI))/2;
}
