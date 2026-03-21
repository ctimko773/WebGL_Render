import * as THREE from 'three';
import { MathUtils } from 'three/webgpu';
export function createHeart() {

    const loader = new THREE.TextureLoader();
    const heartTexture = loader.load('texture_images/scratch-plastic.jpg');
    const heart = new THREE.Group();


    //Create a sphere to be the top of the heart on the left side
    const sphereLeft = new THREE.SphereGeometry(1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2);
    const material = new THREE.MeshStandardMaterial({ map: heartTexture });
    const meshLeft = new THREE.Mesh(sphereLeft, material);
    sphereLeft.translate(1.3, 4, 0);
    sphereLeft.computeBoundingBox();
    sphereLeft.rotateZ(THREE.MathUtils.degToRad(23));
    heart.add(meshLeft);

    //Create a sphere to be the top of the heart on the right side
    const sphereRight = new THREE.SphereGeometry(1, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2);
    const material2 = new THREE.MeshStandardMaterial({ map: heartTexture });
    const meshRight = new THREE.Mesh(sphereRight, material2);
    sphereRight.translate(0, 4.5, 0);
    sphereRight.rotateZ(THREE.MathUtils.degToRad(-23));
    heart.add(meshRight);

    //Create a cylinder to be the bottom of the heart on the left side
    const cylinderLeft = new THREE.CylinderGeometry(1, 0.1, 3, 64);
    const material3 = new THREE.MeshStandardMaterial({ map: heartTexture });
    const mesh3 = new THREE.Mesh(cylinderLeft, material3);
    cylinderLeft.translate(1.3, 2.5, 0);
    cylinderLeft.rotateZ(MathUtils.degToRad(23));

    heart.add(mesh3);

    //Create a cylinder to be the bottom of the heart on the right side
    const cylinderRight = new THREE.CylinderGeometry(1, 0.11, 3, 64);
    const material4 = new THREE.MeshStandardMaterial({ map: heartTexture });
    const mesh4 = new THREE.Mesh(cylinderRight, material4);
    cylinderRight.translate(0, 3, 0);
    cylinderRight.rotateZ(MathUtils.degToRad(-23));

    heart.add(mesh4);


    const baseStand = new THREE.CylinderGeometry(0.2, 0.2, 3, 64);
    const material5 = new THREE.MeshStandardMaterial({ map: heartTexture });
    const mesh5 = new THREE.Mesh(baseStand, material5);
    baseStand.translate(0.9, 1, 0);
    heart.add(mesh5);

    const basePlate = new THREE.BoxGeometry(2, 0.1, 2);
    const material6 = new THREE.MeshStandardMaterial({ map: heartTexture });
    const mesh6 = new THREE.Mesh(basePlate, material6);
    basePlate.translate(0.85, -0.5, 0);
    heart.add(mesh6);

    return heart;
}

