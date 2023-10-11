console.log("Hello from three js");

console.log(THREE);

// to create a view, one needs to create a scene which will have light, and mesh (fundamental geometry),
//mesh contains material and\texture
//we also need to provide a camera and a renderer.

const scene = new THREE.Scene(); // Creating a scene

const geometry = new THREE.BoxGeometry(1, 1, 1); // Creating a geometry
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Creating a camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
