<template>
    <footer>
        <div class="iconFooter">
            <img class="icon" src="../../assets/icons/mail.svg" alt="mail icon"/>
            <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
        </div>
        <div class="iconFooter">
            <img class="icon" src="../../assets/icons/phone.svg" alt="phone icon"/>
            <a href="tel:+32476691674">+32 (0)476 69 16 74</a>
        </div>
        <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener">
            <img class="facebookIcon" src="../../assets/icons/facebook.svg" alt="facebook icon"/>
        </a>
        <a href="https://www.linkedin.com/in/dimitri-steinbusch-239878129" target="_blank" rel="noopener">
            <img class="facebookIcon" src="../../assets/icons/linkedin.svg" alt="linkedIn icon"/>
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
    width: 50px;
}

footer{
    background-color: #ffa41b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
}

footer > *:not(:last-child) {
    margin-bottom: 20px;
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
        margin-bottom: 0px;
    }

    footer{
        font-size: x-large;
    }

    .icon{
        height: 30px;
    }
}

</style>