import * as THREE from 'three';

export function createBooks() {
    const loader = new THREE.TextureLoader();
    const book1Texture = loader.load('texture_images/brown-leather.jpg');
    const book2Texture = loader.load('texture_images/green-leather.jpg');
    const book3Texture = loader.load('texture_images/red-leather.jpg');
    const pageTexture = loader.load('texture_images/paper.jpg');
    const book = new THREE.Group();

    const book1Top = new THREE.BoxGeometry(2, 0.2, 3);
    const material1 = new THREE.MeshStandardMaterial({ map: book1Texture });
    const mesh1 = new THREE.Mesh(book1Top, material1);
    book1Top.translate(0, 8, 0);
    book.add(mesh1);

    const pages1 = new THREE.BoxGeometry(1.8, 0.3, 2.8);
    const material2 = new THREE.MeshStandardMaterial({ map: pageTexture });
    const mesh2 = new THREE.Mesh(pages1, material2);
    pages1.translate(0, 7.9, 0);
    book.add(mesh2);

    const book1Bottom = new THREE.BoxGeometry(2, 0.2, 3);
    const material3 = new THREE.MeshStandardMaterial({ map: book1Texture });
    const mesh3 = new THREE.Mesh(book1Bottom, material3);
    book1Bottom.translate(0, 7.6, 0);
    book.add(mesh3);

    const book1Spine = new THREE.CylinderGeometry(1, 1, 0.8, 64, 64, false, 0, Math.PI);
    const material4 = new THREE.MeshStandardMaterial({ map: book1Texture });
    const mesh4 = new THREE.Mesh(book1Spine, material4);
    book1Spine.translate(0, 8.9, 0);
    book1Spine.rotateZ(THREE.MathUtils.degToRad(100));
    //book.add(mesh4);


    const book2Top = new THREE.BoxGeometry(3, 0.2, 3.5);
    const material5 = new THREE.MeshStandardMaterial({ map: book2Texture });
    const mesh5 = new THREE.Mesh(book2Top, material5);
    book2Top.translate(0, 7.4, 0);
    book.add(mesh5);

    const pages2 = new THREE.BoxGeometry(2.8, 0.3, 3.3);
    const material6 = new THREE.MeshStandardMaterial({ map: pageTexture });
    const mesh6 = new THREE.Mesh(pages2, material6);
    pages2.translate(0, 7.3, 0);
    book.add(mesh6);

    const book2Bottom = new THREE.BoxGeometry(3, 0.2, 3.5);
    const material7 = new THREE.MeshStandardMaterial({ map: book2Texture });
    const mesh7 = new THREE.Mesh(book2Bottom, material7);
    book2Bottom.translate(0, 7.1, 0);
    book.add(mesh7);

    const book3Top = new THREE.BoxGeometry(4, 0.2, 4.5);
    const material8 = new THREE.MeshStandardMaterial({ map: book3Texture });
    const mesh8 = new THREE.Mesh(book3Top, material8);
    book3Top.translate(0, 6.9, 0);
    book.add(mesh8);

    const pages3 = new THREE.BoxGeometry(3.8, 0.3, 4.3);
    const material9 = new THREE.MeshStandardMaterial({ map: pageTexture });
    const mesh9 = new THREE.Mesh(pages3, material9);
    pages3.translate(0, 6.7, 0);
    book.add(mesh9);

    const book3Bottom = new THREE.BoxGeometry(4, 0.2, 4.5);
    const material10 = new THREE.MeshStandardMaterial({ map: book3Texture });
    const mesh10 = new THREE.Mesh(book3Bottom, material10);
    book3Bottom.translate(0, 6.5, 0);
    book.add(mesh10);


    return book;
}