<template>
    <footer>
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
            <p>TVA: BE0753 863 214</p>
        </div>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

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
    padding-top: 30px;
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


@media(min-width: 900px){
    footer{
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
}

</style>