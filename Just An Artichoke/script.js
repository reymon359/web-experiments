/*
 * Just An Artichoke
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 */

// Creating a new scene and setting up a camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd)
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

// Now the lighting
hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

// Render
const renderer = new THREE.WebGLRenderer({
    antialiasis: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Loader

var loader = new THREE.GLTFLoader();

loader.load('artichoke.gltf', function(gltf) {

    scene.add(gltf.scene);

}, undefined, function(error) {

    console.error(error);

});


// Ambient light
let light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

// Point light
let light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

// By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). 
// This would cause both the camera and the cube to be inside each other. 
// To avoid this, we simply move the camera out a bit.
camera.position.z = 5;



// Render or animate loop
function animate() {

    requestAnimationFrame(animate);

    // Rotation stuff
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;



    // Rendering it
    renderer.render(scene, camera);
}
animate();