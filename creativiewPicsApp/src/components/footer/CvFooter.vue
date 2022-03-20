<template>
    <footer :class="footerClass">
        <div class="iconFooter">
            <img class="icon" src="../../assets/icons/mail_white.svg" alt="mail icon"/>
            <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
        </div>
        <div class="iconFooter">
            <img class="icon" src="../../assets/icons/phone_white.svg" alt="phone icon"/>
            <a href="tel:+32476691674">+32 (0)476 69 16 74</a>
        </div>
        <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener">
            <img class="facebookIcon" src="../../assets/icons/facebook_white.svg" alt="facebook icon"/>
        </a>
        <div>
            <a class="webLink" href="https://www.creatiview.be" target="_blank" rel="noopener">Découvrir mes réalisations web</a>
        </div>
        <div>
            <p>TVA: BE0753 863 214</p>
        </div>
        <div>
            <router-link :to="{name: 'termsOfUse'}">Conditions générales</router-link>
        </div>
    </footer>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
    setup(){
        const isHomePage = computed(() => {
            const {name} = useRoute();
            return name === 'home';
        });

        const footerClass = computed(() => {
            return {
                'footerClass': !isHomePage.value
            }
        });

        return {
            footerClass
        }
    }
})
</script>

<style scoped>

.facebookIcon{
    width: 40px;
}

footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 5px;
}

footer > *:not(:last-child) {
    margin-bottom: 20px;
}

footer a, p{
    color: white;
    font-size: medium;
}

.iconFooter{
    display: flex;
    align-items: center;
}

.iconFooter a{
    text-decoration: none;
}

footer.footerClass{
    background-color: #005082;
}

.webLink{
    text-decoration: none;
    background-color: #ffa41b;
    padding: 5px;
    border-radius: 5px;
}

@media(orientation: landscape){
    footer{
        display: none;
    }

    footer.footerClass{
        display: flex;
    }
}


@media(min-width: 900px){
    footer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    footer > *:not(:last-child) {
        margin-bottom: 0;
    }

    footer{
        font-size: x-large;
    }

    .icon{
        height: 30px;
    }

    .webLink{
        background-color: transparent;
    }
}

</style>