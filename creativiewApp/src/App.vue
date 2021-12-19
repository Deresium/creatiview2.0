<template>
    <div class="fixedBackground whiteBackground"/>
    <div class="fixedBackground backgroundImg"/>
    <div id="app">
        <CvHeader/>
        <RouterView/>
    </div>
</template>

<script lang="ts">
import CvHeader from "./components/header/CvHeader.vue";

export default {
    components: {CvHeader}
}
</script>

<style>

.fixedBackground{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.whiteBackground{
    background-color: rgba(255, 255, 255, .8);
    z-index: 1;
}

.backgroundImg{
    background-image: url("assets/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#app {
    z-index: 2;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
}

* {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}

.desktop {
    display: none;
}

@media (min-width: 900px) {
    #app{
        padding-left: 20px;
        padding-right: 20px;
    }

    .phone {
        display: none;
    }

    .desktop {
        display: block;
    }
}
</style>
