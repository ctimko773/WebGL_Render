import * as THREE from 'three';

export function createCandle() {
    const loader = new THREE.TextureLoader();
    const candleTexture = loader.load('texture_images/alien-metal.jpg');
    const lidTexture = loader.load('texture_images/brushed-metal.jpg');
    const candle = new THREE.Group();

    const candleBody = new THREE.CylinderGeometry(1.5, 1.5, 3, 64);
    const material = new THREE.MeshBasicMaterial({ map: candleTexture });
    const mesh = new THREE.Mesh(candleBody, material);
    candleBody.translate(0, 1.5, 0);
    candle.add(mesh);

    const candleLid = new THREE.CylinderGeometry(1.7, 1.7, 0.5, 64);
    const material2 = new THREE.MeshBasicMaterial({ map: lidTexture });
    const mesh2 = new THREE.Mesh(candleLid, material2);
    candleLid.translate(0, 3.25, 0);
    candle.add(mesh2);

    return candle;
}
