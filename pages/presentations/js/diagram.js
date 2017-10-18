// Diagram
const WAIT_FOR_CLICK = 'wait-for-click';

function Diagram(canvas) {
	this.canvas = canvas;

	this.active = false;
	this.events = [];

	this.objects = [];
}

// Event Management
Diagram.prototype._add_event = function(event) {
	this.events.push(event);
}

Diagram.prototype.add_step = function(callback) {
	this._add_event(callback);
}

Diagram.prototype.add_click = function(callback) {
	this._add_event(WAIT_FOR_CLICK);
	this.add_step(callback);
}

Diagram.prototype.run = function() {
	var self = this;
	setInterval(function() {self.draw(self);}, 10);

	this.active = true;
	this.events.reverse();
	this._run_event();
}

Diagram.prototype._run_event = function() {
	var event = this.events.pop();

	if (event == undefined) {
		return;
	}

	if (event == WAIT_FOR_CLICK) {
		var click_event = this.events.pop();
		var self = this;
		console.log("Running '" + click_event.name + "' on click.");
		this.canvas.click(function(event) {click_event(); self._run_event();});
	} else {
		console.log("Running '" + event.name + "'.");
		event();
		this._run_event();
	}
}

// Object Management
Diagram.prototype.add_object = function(object) {
	this.objects.push(object);
}

// Drawing
Diagram.prototype.draw = function(self) {
	self.canvas.clear();
	for (object of self.objects) {
		object.draw(self.canvas);
	}
}

// Time
var TIME_DILATION = 1;
var _last_time = (new Date()).getTime();
var _global_time = 0;
function GLOBAL_TIME() {
	var new_time = (new Date()).getTime();
	_global_time += (new_time - _last_time)/TIME_DILATION;
	_last_time = new_time;
	return _global_time
}
