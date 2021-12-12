<template>
    <header>
        <div class="logoText">
            <img class="desktop logo" src="../../assets/logo.svg" alt="ceatiview logo"/>
            <div class="text">
                <img class="svgTxt" src="../../assets/fullName.svg" alt="creatiview text logo"/>
                <p class="desktop">Website Creation <span class="orange">&</span> Full-Stack Development</p>
            </div>
        </div>
        <div class="menu">
            <div class="desktop">
                <CvRoutes/>
            </div>
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
    align-items: center;
}

.text{
    display: inline-flex;
    flex-direction: column;
}

.text > p{
    margin: 0;
    color: #005082;
    font-weight: 300;
}

.orange{
    color: #ffa41b;
}

.logo{
    width: 75px;
    margin-right: 10px;
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
        justify-content: space-evenly;
    }
}

</style>