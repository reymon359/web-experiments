/*
 * Just An Artichoke
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 */

// Creating a new scene  
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// Setting up a camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
// camera.rotation.y = 45 / 180 * Math.PI;
// camera.position.x = 800;
// camera.position.y = 100;
camera.position.z = 5;

// Now the lighting

// Ambient light
const hlight = new THREE.AmbientLight(0x505050, 100);
scene.add(hlight);

// I will add another light because just the ambient one is not enough
const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
directionalLight.position.set(0, 1, 0); // Pointing from above
directionalLight.castShadow = true; // Shadows 🍔
scene.add(directionalLight);

// 4 extra pointlights pointing to the artichoke
light1 = new THREE.PointLight(0xc3c3c3, 10);
light1.position.set(0, 300, 500);
scene.add(light1);

light2 = new THREE.PointLight(0xc3c3c3, 10);
light2.position.set(500, 300, 0);
scene.add(light2);

light3 = new THREE.PointLight(0xc3c3c3, 10);
light3.position.set(0, 300, -500);
scene.add(light3);

light4 = new THREE.PointLight(0xc3c3c3, 10);
light4.position.set(-500, 300, 0);
scene.add(light4);

// Render
const renderer = new THREE.WebGLRenderer({
    antialiasis: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Loader
const loader = new THREE.GLTFLoader();
// Loading scene
let artichoke;
loader.load('artichoke.gltf', function(gltf) {

    artichoke = gltf.scene.children[0];
    artichoke.scale.set(0.85, 0.85, 0.85);

    scene.add(gltf.scene);
    renderer.render(scene, camera);
    animate();

}, undefined, function(error) {
    console.error(error);
});


// // Render or animate loop
function animate() {

    requestAnimationFrame(animate);

    // Rotation stuff
    artichoke.rotation.x += 0.01;
    artichoke.rotation.y += 0.01;

    // Rendering it
    renderer.render(scene, camera);
}