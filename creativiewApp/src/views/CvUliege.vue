<template>
    <div class="container" :ref="setContainerRef">
        <canvas class="webglCanvas" :ref="setRef"/>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {PerspectiveCamera, PointLight, Scene, WebGLRenderer} from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const webgl = ref();
const container = ref();

const setRef = (el: any) => {
    webgl.value = el;
};

const setContainerRef = (el: any) => {
    container.value = el;
};

onMounted(() => {
    const scene = new Scene();

    const loader = new GLTFLoader();
    loader.load('/uliege.glb', (gltf) => {
        scene.add(gltf.scene);
    }, undefined, error => {
        console.log(error);
    });

    // Sizes
    const sizes = {
        width: container.value.offsetWidth,
        height: container.value.offsetHeight
    };

    // camera
    const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 10;
    scene.add(camera);

    // controls
    const controls = new OrbitControls(camera, webgl.value);
    controls.enableDamping = true;

    // light
    const light = new PointLight();
    light.position.z = 1000;
    camera.add(light);


    // renderer
    const renderer = new WebGLRenderer({
        canvas: webgl.value
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor('0xffffff', 0);

    const tick = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener('resize', event => {
        sizes.width = container.value.offsetWidth;
        sizes.height = container.value.offsetHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
});

</script>

<style scoped>

.container {
    width: 100%;
    height: 50vh;
}

</style>