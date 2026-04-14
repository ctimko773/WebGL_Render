import * as THREE from 'three';
import { createHeart } from './objects/heart.js';
import { createBooks } from './objects/books.js';
import { createCandle } from './objects/candle.js';
import { createBowl } from './objects/bowl.js';

import { lightPosition } from 'three/src/nodes/TSL.js';
import { rand } from 'three/tsl';

const loader = new THREE.TextureLoader();



let glInitialized = false;

window.show = function(type) {
  document.getElementById('img').style.display = type === 'img' ? 'block' : 'none';
  document.getElementById('canvas').style.display = type === 'canvas' ? 'block' : 'none';

  if (type === 'canvas' && !glInitialized) {
    initWebGL();
    glInitialized = true;
  }
}

function initWebGL() {
  const canvas = document.getElementById('canvas');




    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    

    const light = new THREE.AmbientLight(0xfdfbd3, 3);
    light.position.set(lightPosition.x, lightPosition.y, lightPosition.z);
    scene.add(light);


    loader.load('texture_images/blue-sky.jpg', function (texture) {
        scene.background = texture;
    });


    const table = loader.load('texture_images/bright-wood.jpg');
    const plane = new THREE.PlaneGeometry(50, 50);
    const material = new THREE.MeshStandardMaterial({ map: table, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(plane, material);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.y = -1;
    scene.add(mesh);

    const heart = createHeart();
    heart.position.set(5, 5, -1);
    heart.rotateY(THREE.MathUtils.degToRad(300));
    scene.add(heart);

    const books = createBooks();
    books.position.set(7, -20, 0);
    books.scale.set(3, 3, 3);
    books.rotation.y = Math.PI / 6;
    scene.add(books);

    const candle = createCandle();
    candle.position.set(7, 4.5, 3);
    candle.scale.set(0.7, 0.7, 0.7);
    scene.add(candle);

    const bowl = createBowl();
    bowl.position.set(-8, 5, 0);
    bowl.scale.set(1.2, 3, 1.5);
    bowl.rotation.x = (THREE.MathUtils.degToRad(180));
    scene.add(bowl);

    camera.position.z = 20;
    camera.position.y = 10;
    camera.position.x = 0;

    camera.rotateX(THREE.MathUtils.degToRad(-20));


    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}