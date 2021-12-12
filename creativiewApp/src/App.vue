<template>
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
*{
    font-family: 'Roboto', sans-serif;
}

.desktop{
    display: none;
}

@media (min-width: 900px) {
    .phone {
        display: none;
    }

    .desktop {
        display: block;
    }
}
</style>
