/*
 * Just An Artichoke
 * Ramon Morcillo @reymon359
 * ramonmorcillo.com
 */

// Creating a new scene and setting up a camera
const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Appending element generated from renderer to the HTML
const renderer = new THREE.WebGLRenderer({
    antialiasis: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2); // Half the size
document.getElementsByTagName('body')[0].append(renderer.domElement);

// Now we will create a json loader object
// let obj;
// const loader = new THREE.LegacyJSONLoader();
// // The function receives the geometry 
// loader.load('artichoke.json', (g, m) => {
//     // We will create a new mesh using the loaded object and the material
//     obj = new THREE.Mesh(g, m);
//     scene.add(obj);

//     // Now we place the object

// })

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

    // // Sabroseo sabroso
    // if (Math.floor(Math.random() * 100) < 2) cube.material.color.setHex('0x' + Math.floor(Math.random() * 16777215).toString(16));


    // Rendering it
    renderer.render(scene, camera);
}
animate();