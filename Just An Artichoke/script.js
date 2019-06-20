/*
 * Just An Artichoke
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 */

// Creating a new scene  
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

// Setting up a camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
// camera.rotation.y = 45 / 180 * Math.PI;
// camera.position.x = 800;
// camera.position.y = 100;
camera.position.z = 5;


// Now the lighting
const hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

// Render
const renderer = new THREE.WebGLRenderer({
    antialiasis: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Loader
const loader = new THREE.GLTFLoader();
// Loading scene
loader.load('artichoke.gltf', function(gltf) {

    let artichoke = gltf.scene.children[0];
    artichoke.scale.set(0.85, 0.85, 0.85);

    scene.add(gltf.scene);
    renderer.render(scene, camera);
}, undefined, function(error) {
    console.error(error);
});


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