var scene;
var camera, renderer, container;
var hemisphere_light, shadow_light;

var width, height;
var field_of_view=60, near_plane=1, far_plane=10000;

var colors = {
	red: 0xf25346,
	white: 0xd8d0d1,
	brown: 0x59332e,
	pink: 0xF5986E,
	brownDark: 0x23190f,
	blue: 0x68c3c0,

	fog: 0xf7d9aa,
	sky: 0xaaaaaa,
	ground: 0x000000,
	light: 0xffffff
};

window.addEventListener('load', init, false);

function init() {
	create_scene();
	create_lights();
	create_objects();
	//create_plane();
	//create_sea();
	//create_sky();
	document.addEventListener('mousemove', handle_mouse_move, false);
	loop();
}

function create_scene() {
	scene = new THREE.Scene();
	scene.fog = new THREE.Fog(colors.fog, 100, 950);

	camera = new THREE.PerspectiveCamera(
			field_of_view,
			null,
			near_plane,
			far_plane);
	camera.position.set(0, 0, 5);

	renderer = new THREE.WebGLRenderer({alpha: true, antialias:true});
	renderer.shadowMap.enabled = true;
	
	container = document.getElementById('world');
	container.appendChild(renderer.domElement);

	handle_window_resize();
	window.addEventListener('resize', handle_window_resize, false);
}

function handle_window_resize() {
	width = window.innerWidth;
	height = window.innerHeight;

	renderer.setSize(width, height);

	var aspect_ratio = width/height;
	camera.aspect = aspect_ratio;
	camera.updateProjectionMatrix();
}

function create_lights() {
	hemisphere_light = new THREE.HemisphereLight(
			colors.sky,
			colors.ground,
			0.9);
	shadow_light = new THREE.DirectionalLight(colors.light, 0.9);

	shadow_light.position.set(150, 350, 350);
	shadow_light.castShadow = true;

	scene.add(hemisphere_light);
	scene.add(shadow_light);
}

function Cube() {
	var geometry = new THREE.BoxGeometry(2, 1, 0.5);
	var material = new THREE.MeshStandardMaterial(
			{color: colors.red, metalness: 0.2, roughness: 0.5});
	return new THREE.Mesh(geometry, material);
}

var cube;
function create_objects() {
	cube = new Cube();
	scene.add(cube);
}

function loop() {
	cube.rotation.x -= cube.position.y / 20;
	cube.rotation.y += cube.position.x / 20;

	renderer.render(scene, camera);
	requestAnimationFrame(loop);
}

function handle_mouse_move(event) {
	var mouse_x = event.clientX, mouse_y = event.clientY;

	var position = new THREE.Vector3(
			(mouse_x / width) * 2 - 1,
			(mouse_y / height) * -2 + 1,
			0.5);
	position.unproject(camera);

	cube.position.copy(position);
}
