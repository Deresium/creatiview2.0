<template>
  <div id="appVue">
    <div class="exceptFooter">
        <CvHeader/>
        <RouterView/>
    </div>
    <CvFooter/>
</div>
</template>
<script setup lang="ts">
import CvHeader from "./components/header/CvHeader.vue";
import CvFooter from "./components/footer/CvFooter.vue";
import DecryptCookie from "./utils/DecryptCookie";

new DecryptCookie().tryLoginUser();
</script>

<style>
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