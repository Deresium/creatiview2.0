<template>
    <div class="aboutMe">
        <img src="../assets/me.png" alt="Dimitri"/>
        <div class="text">
            <p class="hello">{{ $t('home.hello') }} ! 👋</p>
            <p class="title">{{ $t('home.title') }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

})
</script>

<style scoped>
.aboutMe{
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.aboutMe img{
    width: 30%;
    border-radius: 50%;
    margin-right: 10px;
}

.text{
    color: #005082;
    font-weight: 300;
}

.hello{
    font-size: x-large;
    font-weight: bold;
    margin-bottom: 0;
}

.title{
    margin-top: 0;
}

@media(min-width: 900px){
    .aboutMe img{
        width: 10%;
    }

    .hello{
        font-size: xx-large;
    }

    .title{
        font-size: x-large;
    }
}
</style>