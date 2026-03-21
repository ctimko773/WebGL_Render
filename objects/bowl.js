import * as THREE from 'three';

export function createBowl() {
    const loader = new THREE.TextureLoader();
    const bowlTexture = loader.load('texture_images/black-plastic.jpg');
    const bowl = new THREE.Group();

    const bowlBody = new THREE.CylinderGeometry(3, 5, 2, 64, 1, true);
    const material = new THREE.MeshBasicMaterial({ map: bowlTexture, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(bowlBody, material);
    bowlBody.translate(0, 1, 0);
    bowl.add(mesh);

    const bowlBottom = new THREE.CircleGeometry(3, 32);
    const material2 = new THREE.MeshBasicMaterial({ map: bowlTexture });
    const mesh2 = new THREE.Mesh(bowlBottom, material2);
    bowlBottom.rotateX(THREE.MathUtils.degToRad(90));
    bowlBottom.translate(0, 2, 0);
    bowl.add(mesh2);

    return bowl;
}