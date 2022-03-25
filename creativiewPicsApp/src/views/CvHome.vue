<template>
    <teleport to="body">
        <div class="fixedPanel divHeroImg"/>
        <div class="fixedPanel txtCenterHome">
            <div class="svgTxt">
                <CvLogoSvg width="60%"/>
            </div>
            <router-link class="linkToPictures" :to="{name: 'pictures'}">Découvrir les albums</router-link>
        </div>
    </teleport>
</template>

<script lang="ts">
import CvLogoSvg from "../components/header/CvLogoSvg.vue";
export default {
    components: {CvLogoSvg}
}
</script>

<style scoped>
.fixedPanel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: 0;
    padding: 0;
}

.svgTxt{
    width: 100%;
    text-align: center;
}

.txtCenterHome{
    z-index: 2;
    width: 100%;
    top: 30vh;
    left: 0;
}

.divHeroImg {
    background-image: url("../assets/blue_fire_min.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

}

.linkToPictures {
    display: block;
    color: #005082;
    font-size: x-large;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #ffa41b;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 100px;
}

@media(orientation: landscape){
    .txtCenterHome{
        top: 15vh;
    }
}

@media (min-width: 900px) {
    .divHeroImg {
        background-image: url("https://www.pictures.creatiview.be/api/pictures/11");
        background-color: black;
    }

    .svgTxt {
        display: none;
    }

    .txtCenterHome{
        display: none;
    }

}

</style>