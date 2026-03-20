import * as THREE from 'three';
import { createHeart } from './objects/heart.js';
import { createBooks } from './objects/books.js';
import { lightPosition } from 'three/src/nodes/TSL.js';
import { createCandle } from './objects/candle.js';
import { getControls } from './controls.js';

const loader = new THREE.TextureLoader();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0x404040, 1, 100);
light.position.set(lightPosition.x, lightPosition.y, lightPosition.z);
scene.add(light);


const table = loader.load('texture_images/bright-wood.jpg');
const plane = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshBasicMaterial({ map: table, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(plane, material);
mesh.rotation.x = Math.PI / 2;
mesh.position.y = -1;
scene.add(mesh);

const heart = createHeart();
heart.position.set(0, 0, 0);
//scene.add(heart);

const books = createBooks();
books.position.set(3, -5, 2);
books.scale.set(1.5, 1.5, 1.5);
books.rotation.y = Math.PI / 6;
scene.add(books);

const candle = createCandle();
candle.position.set(3, 7, 1.5);
candle.scale.set(0.7, 0.7, 0.7);
scene.add(candle);

const controls = getControls();
scene.add(controls);

camera.position.z = 10;
camera.position.y = 12;
camera.position.x = 0;

camera.rotateX(-Math.PI / 10);


function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();