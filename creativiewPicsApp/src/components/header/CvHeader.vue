<template>
    <header>
        <div class="logoText">
            <img class="desktop logo" src="../../assets/logo.svg" alt="ceatiview logo"/>
            <div class="desktop text">
                <img class="svgTxt" src="../../assets/fullName.svg" alt="creatiview text logo"/>
            </div>
        </div>
        <div class="desktop menuRoutes rightMenu">
            <RouterLink :to="{name:'home'}">{{ $t('nav.home') }}</RouterLink>
            <RouterLink :to="{name:'pictures'}">{{ $t('nav.pictures') }}</RouterLink>
            <RouterLink :to="{name:'contact'}">{{ $t('nav.contact') }}</RouterLink>
        </div>

        <button class="phone hamburger" @click="showFullMenu=true">
            <img class="logoHamburger" src="../../assets/icons/menu_white.svg" alt="hamburger menu"/>
        </button>

        <CvFullMenu v-model="showFullMenu"/>
    </header>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import CvFullMenu from "./CvFullMenu.vue";
import CvRoutes from "./CvRoutes.vue";

export default defineComponent({
    components: {CvRoutes, CvFullMenu},
    setup(){
        const showFullMenu = ref(false);

        return{
            showFullMenu
        }
    }
})
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    margin-top: 10px;
}


.orange{
    color: #ffa41b;
}

.logo{
    width: 75px;
}

.svgTxt{
    width: 150px;
}

.hamburger{
    background-color: transparent;
    border: none;
}

.logoHamburger{
    width: 50px;
}

@media(min-width: 900px){
    header{
        justify-content: center;
    }

    .menuRoutes{
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;
    }

    .leftMenu{
        margin-right: 20px;
    }

    .rightMenu{
        margin-left: 20px;
    }

    .menuRoutes a{
        text-decoration: none;
        color: white;
        font-size: xx-large;
        font-weight: 300;
    }

    .logoText{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .text{
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .text > p{
        margin: 0;
        color: #005082;
        font-weight: 300;
        font-size: large;
    }
}

</style>