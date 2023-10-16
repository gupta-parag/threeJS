import * as THREE from "three";
console.log(THREE);

// Creating a scene first
const scene = new THREE.Scene();

// Creating a Mesh/object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "red",
});
const mesh = new THREE.Mesh(geometry, material);
// Added mesh to the scene
scene.add(mesh);

// creating a size object
const sizes = {
  width: 800,
  height: 600,
};

//Creating a camera object, this requires field of view and resolution
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Move the camera away from the cube origin point
camera.position.z = 3;
//Add camera to scene
scene.add(camera);

// Adding the renderer to render the final scene
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector(".webgl"),
});

// fixing the size of renderer or I like to call it as the window
renderer.setSize(sizes.width, sizes.height);
// Finally rendering the complete scene
renderer.render(scene, camera);
