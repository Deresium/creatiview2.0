<template>
    <header>
        <div class="logoText">
            <img class="desktop logo" src="../../assets/logo.svg" alt="ceatiview logo"/>
            <div v-if="!isHomePage" class="text">
                <img class="svgTxt" src="../../assets/fullName.svg" alt="creatiview text logo"/>
            </div>
        </div>
        <div class="desktop menuRoutes rightMenu" :class="routesClass">
            <RouterLink :to="{name:'home'}">{{ $t('nav.home') }}</RouterLink>
            <RouterLink :to="{name:'pictures'}">{{ $t('nav.pictures') }}</RouterLink>
            <RouterLink :to="{name:'contact'}">{{ $t('nav.contact') }}</RouterLink>
        </div>

        <button class="phone hamburger" @click="showFullMenu=true">
            <img v-if="!isHomePage" class="logoHamburger" src="../../assets/icons/menu_icon.svg" alt="hamburger menu"/>
            <img v-if="isHomePage" class="logoHamburger" src="../../assets/icons/menu_white.svg" alt="hamburger menu"/>
        </button>

        <CvFullMenu v-model="showFullMenu"/>
    </header>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import CvFullMenu from "./CvFullMenu.vue";
import CvRoutes from "./CvRoutes.vue";
import {useRoute} from "vue-router";

export default defineComponent({
    components: {CvRoutes, CvFullMenu},
    setup(){
        const showFullMenu = ref(false);

        const isHomePage = computed(() => {
            const {name} = useRoute();
            return name === 'home';
        });

        const routesClass = computed(() => {
            return {
                'whiteRoute': isHomePage.value
            }
        });

        return{
            showFullMenu,
            routesClass,
            isHomePage
        }
    }
})
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
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
        color: #005082;
        font-size: xx-large;
        font-weight: 300;
    }

    .whiteRoute a{
        color: white;
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