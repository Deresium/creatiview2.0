<template>
    <header>
        <div class="logoText">
            <img class="desktop logo" src="../../assets/logo.svg" alt="ceatiview logo"/>
            <div class="text">
                <CvLogoSvg/>
            </div>
        </div>
        <div class="desktop menuRoutes rightMenu">
            <RouterLink :to="{name:'billingsList'}">Liste des factures</RouterLink>
            <RouterLink :to="{name:'addBill'}">Ajouter une facture</RouterLink>
            <CvGoogleSignIn v-if="!isLoggedIn"/>
            <span v-if="isAdmin">Administrateur</span>
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
import {computed, defineComponent, ref} from "vue";
import CvFullMenu from "./CvFullMenu.vue";
import CvRoutes from "./CvRoutes.vue";
import CvLogoSvg from "./CvLogoSvg.vue";
import CvGoogleSignIn from "./CvGoogleSignIn.vue";
import {useUserStore} from "../../store/user/UserStore";

export default defineComponent({
    components: {CvGoogleSignIn, CvLogoSvg, CvRoutes, CvFullMenu},
    setup(){
        const showFullMenu = ref(false);

        const userStore = useUserStore();

        const isLoggedIn = computed(() => userStore.isLoggedIn);

        const isAdmin = computed(() => userStore.isAdmin);

        return{
            showFullMenu,
            isLoggedIn,
            isAdmin
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
        padding-bottom: 5px;
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