<template>
    <div class="fixedBackground whiteBackground"/>
    <div class="fixedBackground backgroundImg"/>
    <div id="appVue">
        <div class="exceptFooter">
            <CvHeader/>
            <RouterView/>
        </div>
        <CvFooter/>
    </div>
</template>

<script lang="ts">
import CvHeader from "./components/header/CvHeader.vue";
import CvFooter from "./components/footer/CvFooter.vue";

export default {
    components: {CvFooter, CvHeader}
}
</script>

<style>

.fixedBackground {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}

.whiteBackground {
    background-color: rgba(255, 255, 255, .95);
    z-index: 1;
}

.backgroundImg {
    background-image: url("assets/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.exceptFooter{
    margin: 10px 10px 100px 10px;
    padding-left: 10px;
    padding-right: 10px;
}

#appVue {
    z-index: 2;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

* {
    font-family: 'Roboto', sans-serif;
    color: #005082;
    font-weight: 400;
}

.desktop {
    display: none;
}

body {
    margin: 0;
}

@media (min-width: 900px) {
    .exceptFooter {
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
