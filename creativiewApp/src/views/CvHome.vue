<template>
    <div class="mainTitle">
        <h1>
            <span class="blue">{{ $t('home.build') }}</span>
            <span class="orange">{{ $t('home.together') }}</span>
            <span class="blue">{{ $t('home.website') }}</span>
            <span class="orange">{{ $t('home.lookslike') }}</span>
        </h1>
    </div>
    <div class="buttonsAction">
        <router-link class="btnLink services" :to="{name: 'services'}">{{ $t('home.services') }}</router-link>
        <router-link class="btnLink projects" :to="{name: 'projects'}">{{ $t('home.myProjects') }}</router-link>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<style scoped>
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

.buttonsAction{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.btnLink{
    text-decoration: none;
    font-size: large;
    padding: 15px;
    border-radius: 5px;
    color: #005082;
    font-weight: 400;
}

.services{
    background-color: #ffa41b;
    border: 1px solid #ffa41b;
    margin-bottom: 10px;
}

.projects{
    border: 1px solid #005082;
}

@media(min-width: 900px) {
    .mainTitle span{
        font-size: 100px;
    }

    .buttonsAction{
        flex-direction: row;
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