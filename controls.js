import { cameraPosition } from "three/tsl";
import * as THREE from 'three'; 

 export function getControls() {
    const keys = {
        w: false,
        a: false,
        s: false,
        d: false,
        e: false,
        q: false
    }

    document.body.addEventListener('keydown', (event) => {
        if (event.key in keys) {
            keys[event.key] = true;
        }
    });
    document.body.addEventListener('keyup', (event) => {
        if (event.key in keys) {
            keys[event.key] = false;
        }
    });

    const speed = 0.1;

    if (keys.w) {
        camera.position.z -= speed;
    }
    if (keys.s) {
        camera.position.z += speed; 
    }
    if (keys.a) {
        camera.position.x -= speed;
    }
    if (keys.d) {  
        camera.position.x += speed;
    }

}