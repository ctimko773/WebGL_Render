import * as THREE from 'three';
import { MathUtils } from 'three/webgpu';
export function createHeart() {

    const loader = new THREE.TextureLoader();
    const heartTexture = loader.load('texture_images/black-plastic.jpg');
    const heart = new THREE.Group();


    //Create a sphere to be the top of the heart on the left side
    const sphereLeft = new THREE.SphereGeometry(1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2);
    const material = new THREE.MeshBasicMaterial({ map: heartTexture });
    const meshLeft = new THREE.Mesh(sphereLeft, material);
    sphereLeft.translate(-2.5, 2.5, 0);
    sphereLeft.computeBoundingBox();
    sphereLeft.rotateZ(THREE.MathUtils.degToRad(23));
    heart.add(meshLeft);

    //Create a sphere to be the top of the heart on the right side
    const sphereRight = new THREE.SphereGeometry(1, 64, 64);
    const material2 = new THREE.MeshBasicMaterial({ map: heartTexture });
    const meshRight = new THREE.Mesh(sphereRight, material2);
    sphereRight.translate(3, 0, 0);
    heart.add(meshRight);

    //Create a cylinder to be the bottom of the heart on the left side
    const cylinderLeft = new THREE.CylinderGeometry(1, 1, 2, 64);
    const material3 = new THREE.MeshBasicMaterial({ map: heartTexture });
    const mesh3 = new THREE.Mesh(cylinderLeft, material3);
    cylinderLeft.translate(-3, 1, 0);
    cylinderLeft.rotateZ(Math.PI / 20);

    heart.add(mesh3);

    //Create a cylinder to be the bottom of the heart on the right side
    const cylinderRight = new THREE.CylinderGeometry(1, 1, 2, 64);
    const material4 = new THREE.MeshBasicMaterial({ map: heartTexture });
    const mesh4 = new THREE.Mesh(cylinderRight, material4);
    cylinderRight.translate(3, -1, 0);
    //cylinderRight.rotateZ(-Math.PI / 4);

    heart.add(mesh4);

    return heart;
}

