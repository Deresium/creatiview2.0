<template>
    <div id="appVue">
        <div class="exceptFooter">
            <CvHeader/>
            <RouterView/>
        </div>
        <CvFooter/>
    </div>
</template>

<script lang="ts">
import CvFooter from "./components/footer/CvFooter.vue";
import CvHeader from "./components/header/CvHeader.vue";

export default {
    components: {CvFooter, CvHeader}
}

</script>

<style>
*{
    font-family: 'Roboto', sans-serif;
    color: #005082;
    font-weight: 400;
}

.exceptFooter{
    position: relative;
    z-index: 1;
    padding-top: 10px;
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

body {
    margin: 0;
}

.desktop{
    display: none;
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
