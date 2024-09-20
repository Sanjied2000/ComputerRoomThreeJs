// Import necessary Three.js modules
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';




// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;
camera.position.y = 2;



// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled =true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls( camera, renderer.domElement );

// Create room
const roomGeometry = new THREE.BoxGeometry(8, 5, 8);
const wallTexture = new THREE.TextureLoader().load('texture/wall-texture.jpg');
const floorTexture = new THREE.TextureLoader().load('texture/floor-texture.avif');

const roomMaterials = [
    new THREE.MeshBasicMaterial({ color: 0x4d004d, side: THREE.BackSide }), // Right face - red color
    new THREE.MeshBasicMaterial({ color: 0x4d004d, side: THREE.BackSide }), // Left face - green color
    new THREE.MeshBasicMaterial({ color: 0x800080, side: THREE.BackSide }), // Top face - blue color
    new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.BackSide }), // Bottom face - yellow color
    new THREE.MeshBasicMaterial({ color: 0x660066, side: THREE.BackSide }), // Front face - magenta color
    new THREE.MeshBasicMaterial({ color: 0x660066, side: THREE.BackSide })  // Back face - cyan color
];
const room = new THREE.Mesh(roomGeometry, roomMaterials);
room.position.set(0, 1, 0);
scene.add(room);







//adding the table model
const loader = new GLTFLoader();

var table = null;
loader.load( 'model/Table.gltf', function ( gltf ) {
    table = gltf.scene;
    var scale = 0.15;
    table.scale.set(scale, scale, scale);
    table.position.set(.7, -1.5, -3.2);
    table.rotation.y = Math.PI / 2;
    
	scene.add( table );

}, undefined, function ( error ) {

	console.error( error );

} );


var chair = null;
loader.load( 'model/Chair.glb', function ( gltf ) {
    chair = gltf.scene;
    var scale = 1.5;
    chair.scale.set(scale, scale, scale);
    chair.position.set(0.7, -1.5, -1.8);
    chair.rotation.y = 180 ;
    
    
	scene.add( chair );

}, undefined, function ( error ) {

	console.error( error );

} );





var monitor = null;
loader.load( 'model/Monitor.glb', function ( gltf ) {
    monitor = gltf.scene;
    var scale = 3;
    monitor.scale.set(scale, scale, scale);
    monitor.position.set(0.3, -0.36,-3.2);
    //monitor.receiveShadow=true;
   // monitor.castShadow=true;
    //monitor.rotation.y = Math.PI ;
    gltf.scene.traverse(function(node) {
        if (node.isMesh) node.castShadow = true;
})
    
    
	scene.add( monitor );

}, undefined, function ( error ) {

	console.error( error );

} );

var CPU = null;
loader.load( 'model/Casing.glb', function ( gltf ) {
    CPU = gltf.scene;
    var scale = 3;
    CPU.scale.set(scale, scale, scale);
    CPU.position.set(1.8, -0.36,-3.2);
    //CPU.rotation.y = Math.PI ;
    
    
	scene.add( CPU );

}, undefined, function ( error ) {

	console.error( error );

} );















var bed = null;
loader.load( 'model/Bed.glb', function ( gltf ) {
    bed = gltf.scene;
    var scale = .045;
    bed.scale.set(scale, scale, scale);
    bed.position.set(17, -1.5, -8.2);
    bed.rotation.y = Math.PI ;
    
    
	scene.add( bed );

}, undefined, function ( error ) {

	console.error( error );

} );







var couch = null;
loader.load( 'model/Couch.glb', function ( gltf ) {
    couch = gltf.scene;
    var scale = .05;
    couch.scale.set(scale, scale, scale);
    couch.position.set(7.9, -1.5, 19);
    couch.rotation.y = Math.PI/2 ;
    
    
    
	scene.add( couch );

}, undefined, function ( error ) {

	console.error( error );

} );









var standL = null;
loader.load( 'model/Standing lamp.glb', function ( gltf ) {
    standL = gltf.scene;
    var scale = .2;
    standL.scale.set(scale, scale, scale);
    standL.position.set(0.1, -1.5, 3.6);
    standL.rotation.y = Math.PI ;
    
    
	scene.add( standL );

}, undefined, function ( error ) {

	console.error( error );

} );







var HousePlant = null;
loader.load( 'model/House Plant.glb', function ( gltf ) {
    HousePlant = gltf.scene;
    var scale = 1.5;
    HousePlant.scale.set(scale, scale, scale);
    HousePlant.position.set(-4, -1.5, 0.1);
    HousePlant.rotation.y = Math.PI ;
    
    
	scene.add( HousePlant );

}, undefined, function ( error ) {

	console.error( error );

} );




var clock = null;
loader.load( 'model/Clock.glb', function ( gltf ) {
    clock = gltf.scene;
    var scale = .0008;
    clock.scale.set(scale, scale, scale);
    clock.position.set(0.1, 2.2, -4.02);
    //clock.rotation.y = Math.PI ;
    
    
	scene.add( clock );

}, undefined, function ( error ) {

	console.error( error );

} );







var bookcase = null;
loader.load( 'model/Little Bookcase.glb', function ( gltf ) {
    bookcase = gltf.scene;
    var scale = 1.5;
    bookcase.scale.set(scale, scale, scale);
    bookcase.position.set(3, -.7, -3.6);
    bookcase.rotation.y = Math.PI ;
    
    
	scene.add( bookcase );

}, undefined, function ( error ) {

	console.error( error );

} );





var guiter = null;
loader.load( 'model/Guitar.glb', function ( gltf ) {
    guiter = gltf.scene;
    var scale = 1.2;
    guiter.scale.set(scale, scale, scale);
    guiter.position.set(2.3, -.5, -3);
    guiter.rotation.y = Math.PI/4 ;
    guiter.rotation.x = -(Math.PI/6) ;
    
    
	scene.add( guiter );

}, undefined, function ( error ) {

	console.error( error );

} );




var barbel = null;
loader.load( 'model/Barbell.glb', function ( gltf ) {
    barbel = gltf.scene;
    var scale = .8;
    barbel.scale.set(scale, scale, scale);
    barbel.position.set(3.6, -1.2, -2);
    barbel.rotation.y = Math.PI/2 ;
    
    
	scene.add( barbel );

}, undefined, function ( error ) {

	console.error( error );

} );

var football = null;
loader.load( 'model/Simple soccer football.glb', function ( gltf ) {
    football = gltf.scene;
    var scale = .35;
    football.scale.set(scale, scale, scale);
    football.position.set(3.2, -1.2, -2);
    football.rotation.y = Math.PI/2 ;
    
    
	scene.add( football );

}, undefined, function ( error ) {

	console.error( error );

} );



var FishTank = null;
loader.load( 'model/Fish Tank.glb', function ( gltf ) {
    FishTank = gltf.scene;
    var scale = 2;
    FishTank.scale.set(3, 2.5, 2);
    FishTank.position.set(-2.25, -.1, -3.6);
    FishTank.rotation.y = Math.PI ;
    
    
	scene.add( FishTank );

}, undefined, function ( error ) {

	console.error( error );

} );

var cabinet = null;
loader.load( 'model/Cabinet Television Doo.glb', function ( gltf ) {
    cabinet = gltf.scene;
    var scale = 3;
    cabinet.scale.set(scale, scale, scale);
    cabinet.position.set(-3.5, -1.5, -3.1);
    cabinet.rotation.y = Math.PI ;
    
    
	scene.add( cabinet );

}, undefined, function ( error ) {

	console.error( error );

} );


//POSTERS
const valorant = new THREE.TextureLoader().load('texture/valorant.jpg');

//p1

const p1 = new THREE.PlaneGeometry( 1, 1.5 );
const material = new THREE.MeshBasicMaterial( {map:valorant, side: THREE.FrontSide} );
const pos1 = new THREE.Mesh( p1, material );
pos1.position.set(3,2,-3.9)
scene.add( pos1 );


const textureLoader = new THREE.TextureLoader();

//PC Animation

const imagePaths = [
    'texture/well2.jpg',
    'texture/pubg.jpg',
    'texture/friends2.jpg',
    // Add more image paths here
];

let currentImageIndex = 0;

// Function to load and update the texture
function updateTexture() {
    const newTexture = textureLoader.load(imagePaths[currentImageIndex]);
    materialp2.map = newTexture;  // Update the texture on the material
    materialp2.needsUpdate = true; // Mark material for update
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length; // Cycle through images
}

// Geometry and material
const p2 = new THREE.PlaneGeometry( 1.3, 0.6 );
const materialp2 = new THREE.MeshBasicMaterial( {map: textureLoader.load(imagePaths[currentImageIndex]), side: THREE.FrontSide} );
const posx2 = new THREE.Mesh( p2, materialp2 );
posx2.position.set(0.3, 0.2, -3.17);
scene.add( posx2 );

// Update texture every 3 seconds (3000 milliseconds)
setInterval(updateTexture, 3000);


//p2
const pos2 = new THREE.TextureLoader().load('texture/minec.png');

const pos2x = new THREE.PlaneGeometry( 1.4, .8 );
const pos2mat = new THREE.MeshBasicMaterial( {map:pos2, side: THREE.FrontSide} );
const poster2 = new THREE.Mesh( pos2x, pos2mat );
poster2.rotation.y = Math.PI/2;
poster2.position.set(-3.9,2,2.5)
scene.add( poster2 );







//Door
const doorTex = new THREE.TextureLoader().load('texture/door.jpg');

const door = new THREE.PlaneGeometry( 1.5, 3 );
const doormat = new THREE.MeshBasicMaterial( {map:doorTex, side: THREE.FrontSide} );
const frontdoor = new THREE.Mesh( door, doormat );
frontdoor.rotation.y = Math.PI/2;
frontdoor.position.set(-3.9,0,-1.5)
scene.add( frontdoor );




const ambient_light = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambient_light)

const light = new THREE.PointLight(0xFFD700, 20, 10) // 60, 30
light.position.set(.3, 2, -4)
scene.add(light)

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; 
light.castShadow = true

let lorbit = {
  radius: Math.sqrt(light.position.x ** 2 + light.position.z ** 2),
  angle: Math.atan2(light.position.z, light.position.x),
}

const textureChangeInterval = 3000; // 3 seconds in milliseconds
let lastTextureChangeTime = Date.now();

function animate() {
	requestAnimationFrame(animate);
  
  light.position.x = lorbit.radius * Math.cos(lorbit.angle);
  light.position.z = lorbit.radius * Math.sin(lorbit.angle);

  renderer.render(scene, camera);
}

animate();

window.addEventListener('click', () => {
  // Change lorbit orbit on click
  lorbit.angle += (90 * Math.PI / 180); //increase angle by 25 degrees
});



// Define a variable to track whether the light is currently on or off
let lightOn = true;

// Function to toggle the light on/off
function toggleLight() {
  lightOn = !lightOn; // Toggle the value
  light.visible = lightOn; // Set light visibility based on the toggle value
}

// Event listener for the arrow keys
window.addEventListener('keydown', (event) => {
  // Check if the pressed key is the up arrow (key code 38)
  if (event.key == 'ArrowUp') {
    // Turn on the light
    light.visible = true;
    lightOn = true;
  }
  // Check if the pressed key is the down arrow (key code 40)
  else if (event.key === 'ArrowDown') {
    // Turn off the light
    light.visible = false;
    lightOn = false;
  }
});










