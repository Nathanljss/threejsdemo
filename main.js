import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(3.5, 3.5, 3.5);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0x000000 })
);

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(line);

camera.position.z = 5;

function animate() {
  //change all to 0.0015 for demo
  cube.rotation.x += 0.0;
  cube.rotation.y += 0.0;
  line.rotation.x += 0.0;
  line.rotation.y += 0.0;
  renderer.render(scene, camera);
}
