<template>
    <div class="titleMain">
        <h1>{{ $t('nav.contact') }}</h1>
    </div>
    <div class="mainPage">
        <div class="allInfo">
            <div class="info">
                <img class="mePicture" src="../assets/me.png" alt="photo of me"/>
                <div class="meInfo">
                    <p class="name">Dimitri Steinbusch</p>
                    <p class="title">{{ $t('contact.title') }}</p>
                </div>
            </div>
            <div class="additionalInfo">
                <a href="mailto:dimitri.steinbusch@creatiview.be">dimitri.steinbusch@creatiview.be</a>
                <a href="tel:+32476691674">+32 (0)476 69 16 74</a>
                <div class="icons">
                    <a href="https://www.facebook.com/Creatiview-115424323438636" target="_blank" rel="noopener">
                        <img class="icon" src="../assets/icons/facebook.svg" alt="facebook icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/dimitri-steinbusch-239878129" target="_blank" rel="noopener">
                        <img class="icon" src="../assets/icons/linkedin.svg" alt="linkedIn icon"/>
                    </a>
                </div>
            </div>
        </div>
        <div class="contactForm">
            <CvContactForm/>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CvContactForm from "../components/CvContactForm.vue";

export default defineComponent({
    components: {CvContactForm}
})
</script>

<style scoped>
h1 {
    width: 50%;
    border-bottom: 1px solid #ffa41b;
    font-size: xx-large;
    font-weight: 300;
    color: #005082;
    padding-bottom: 3px;
}


.info {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
}

.mePicture {
    width: 150px;
    border-radius: 50%;
}

.meInfo {
    padding-left: 20px;
    flex-grow: 1;
}

.name {
    font-weight: bold;
}

.title {
    font-style: italic;
}

.additionalInfo {
    display: none;
}

@media (min-width: 900px) {
    .mainPage {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    .contactForm {
        width: 30%;
    }

    .allInfo {
        width: 65%;
    }

    .additionalInfo {
        display: flex;
        flex-direction: column;
    }

    .additionalInfo a{
        font-size: large;
        margin-bottom: 20px;
    }

    .icons{
        display: flex;
        align-items: center;
    }

    .icons > a{
        margin-right: 20px;
    }

    .icon {
        width: 50px;
    }

    .info{
        margin-bottom: 20px;
    }


}
</style>