<template>
    <div class="threejscontainer" :ref="setThreejsContainer">
        <canvas class="webglCanvas" :ref="setRef"/>
    </div>
    <div class="lighter">
        <div class="center">
            <CvLogoSvg size="large"/>
            <p>where art meets technology</p>
        </div>
        <div class="buttonsAction">
            <router-link class="btnLink services" :to="{name: 'services'}">{{ $t('home.services') }}</router-link>
            <router-link class="btnLink projects" :to="{name: 'projects'}">{{ $t('home.myProjects') }}</router-link>
        </div>
    </div>
    <div class="backgroundImg"/>
</template>

<script lang="ts">
import {defineComponent, onMounted, onUnmounted, ref} from "vue";
import CvLogoSvg from "../components/header/CvLogoSvg.vue";
import {
    AdditiveBlending,
    AmbientLight,
    BufferAttribute,
    BufferGeometry, Clock, Mesh, MeshStandardMaterial, OrthographicCamera,
    PerspectiveCamera, PlaneBufferGeometry, PointLight, PointLightHelper,
    Points,
    PointsMaterial,
    Scene,
    TextureLoader,
    WebGLRenderer
} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {text} from "express";

export default defineComponent({
    components: {CvLogoSvg},
    setup(){
        const threejsContainer = ref();
        const webgl = ref();

        const setThreejsContainer = (el: any) => {
            threejsContainer.value = el;
        };

        const setRef = (el: any) => {
            webgl.value = el;
        };

        let request: any = null;
        onMounted(() => {
            const scene = new Scene();

            // Sizes
            const sizes = {
                width: threejsContainer.value.offsetWidth,
                height: threejsContainer.value.offsetHeight
            };

            // camera
            const camera = new OrthographicCamera();
            camera.position.z = 1;
            scene.add(camera);


            const plane = new Mesh(
                new PlaneBufferGeometry(5, 5),
                new MeshStandardMaterial({
                    color: 0xffffff,
                    transparent: true,
                    opacity: 0.3
                })
            );

            scene.add(plane);

            // lights
            const pointsLight = new Array<PointLight>();
            for(let i = 0; i < 15; ++i){
                const pointLight = new PointLight(0xffa41b, 10, 1);
                const x = (Math.random()-0.5) * 2 ;
                console.log(x);
                const y = Math.random();
                const z = Math.random()/500;
                pointLight.position.set(x, y, z);
                pointsLight.push(pointLight);
            }
            scene.add(...pointsLight);

            /*const lightHelper = new PointLightHelper(orangePointLight);
            scene.add(lightHelper);*/


            // renderer
            const renderer = new WebGLRenderer({
                canvas: webgl.value
            });

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 0);

            const clock = new Clock();
            const tick = () => {
                const intensity = 20 + (Math.sin(clock.getElapsedTime())*4);
                const intensity2 = 20 + (Math.cos(clock.getElapsedTime() * 1.2)*7);
                for(let i = 0; i < pointsLight.length; ++i){
                    const modulo = i % 2;
                    if(modulo === 0){
                        pointsLight[i].intensity = intensity;
                    }else{
                        pointsLight[i].intensity = intensity2;
                    }
                }

                renderer.render(scene, camera);
                request = window.requestAnimationFrame(tick);
            };
            tick();

            window.addEventListener('resize', () => {
                sizes.width = threejsContainer.value.offsetWidth;
                sizes.height = threejsContainer.value.offsetHeight;

                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            });
        });

        onUnmounted(() => {
            window.cancelAnimationFrame(request);
        });

        return {
            setThreejsContainer,
            setRef
        }
    }
})
</script>

<style scoped>
.lighter{
    z-index: 5;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    /*background-color: rgba(255, 255, 255, .3);*/
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.backgroundImg{
    z-index: 3;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    background-image: url("../assets/16.jpg");
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.center p{
    font-family: 'Anton', sans-serif;
    font-size: 30px;
    text-align: center;
    width: 100%;
}

.buttonsAction{
    display: flex;
    flex-direction: column;
}

.mainTitle{
    margin-top: 100px;
}

.mainTitle span{
    font-size: xx-large;
    display: block;
    font-family: 'Anton', sans-serif;
    font-weight: 300;
}

.blue{
    color: #005082;
}

.orange{
    color: #ffa41b;
}

.btnLink{
    text-decoration: none;
    font-size: large;
    padding: 15px;
    border-radius: 5px;
    color: #005082;
    font-weight: 400;
    text-align: center;
}

.services{
    background-color: #ffa41b;
    border: 1px solid #ffa41b;
    margin-bottom: 10px;
}

.projects{
    color: #005082;
    border: 1px solid #005082;
}

.free{
    width: 15px;
    position: fixed;
    z-index: 5;
}

.topLeft{
    transform: rotate(40deg);
    top: 10vh;
    left: 5vw;
}

.top{
    top: 5vh;
    left: 50vw;
    transform: rotate(-25deg);
}

.threejscontainer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 4;
}

@media(min-width: 900px) {
    .center p {
        font-size: 70px;
    }

    .buttonsAction {
        flex-direction: row;
    }


    .mainTitle span{
        font-size: 100px;
    }

    .btnLink{
        font-size: xx-large;
        font-weight: 300;
    }

    .services{
        margin-bottom: 0;
        margin-right: 20px;
    }
}
</style>