<template>
    <header>
        <div class="desktop menuRoutes leftMenu">
            <RouterLink :to="{name:'home'}">{{ $t('nav.home') }}</RouterLink>
            <RouterLink :to="{name:'projects'}">{{ $t('nav.projects') }}</RouterLink>
        </div>
        <div class="logoText">
            <img class="desktop logo" src="../../assets/logo.svg" alt="ceatiview logo"/>
            <div class="text">
                <img class="svgTxt" src="../../assets/fullName.svg" alt="creatiview text logo"/>
            </div>
        </div>
        <div class="desktop menuRoutes rightMenu">
            <RouterLink :to="{name:'services'}">{{ $t('nav.services') }}</RouterLink>
            <RouterLink :to="{name:'contact'}">{{ $t('nav.contact') }}</RouterLink>
        </div>
        <div class="menu">
            <button class="phone hamburger" @click="showFullMenu=true">
                <img class="logoHamburger" src="../../assets/icons/menu.svg" alt="hamburger menu"/>
            </button>
        </div>
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

.orange{
    color: #ffa41b;
}

.logo{
    width: 75px;
}

.svgTxt{
    font-family: 'Anton', sans-serif;
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
        border-bottom: 1px solid #ffa41b;
    }

    .leftMenu{
        margin-right: 20px;
    }

    .rightMenu{
        margin-left: 20px;
    }

    .menuRoutes a{
        text-decoration: none;
        color: #005082;
        font-size: xx-large;
        font-weight: 300;
    }
}

</style>