<template>
    <div class="titleMain">
        <h1>{{ $t('nav.services') }}</h1>
        <p class="subtitle">{{ $t('services.subtitle1') }}</p>
        <p class="subtitle">{{ $t('services.subtitle2') }}</p>
        <p class="subtitle">{{ $t('services.subtitle3') }}</p>
        <p class="subtitle">{{ $t('services.subtitle4') }}
            <router-link :to="{name: 'contact'}">{{ $t('services.subtitle5') }}</router-link>
            {{ $t('services.subtitle6') }}
        </p>
    </div>
    <div class="btnsActions">
        <router-link :to="{name: 'serviceWeb'}">{{ $t('services.searchWebsite') }}</router-link>
        <router-link :to="{name: 'serviceIT'}">{{ $t('services.searchDev') }}</router-link>
    </div>


</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({});
</script>

<style scoped>
h1 {
    font-size: xx-large;
    color: #005082;
    padding-bottom: 3px;
    font-weight: 300;
    width: 50%;
    border-bottom: 1px solid #ffa41b;
}

.subtitle {
    font-style: italic;
    font-size: large;
    font-weight: 400;
}

.subtitle a {
    color: #ffa41b;
    font-weight: 400;
}

.btnsActions{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btnsActions a {
    font-size: large;
    text-align: center;
    text-decoration: none;
    margin-bottom: 30px;
    background-color: #ffa41b;
    padding: 10px;
    border-radius: 5px;
}

@media(min-width: 900px){
    .btnsActions{
        align-items: flex-start;
    }
}



</style>