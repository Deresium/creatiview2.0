<template>
    <div class="titleMain">
        <h1>{{ $t('nav.projects') }}</h1>
        <p class="subtitle">{{ $t('projects.findProject') }}</p>
        <p class="subtitle">{{ $t('projects.needs') }}</p>
        <p class="subtitle">{{ $t('projects.estimate') }}</p>
    </div>

    <div class="projects">
        <div class="project">
            <div class="head">
                <h2>Cable & Network</h2>
                <img class="imgSite" src="../assets/logo_cn.png" alt="image c-n"/>
                <p>{{ $t('projects.cnTitle') }}</p>
            </div>
            <div class="actions">
                <a href="https://www.c-n.be" rel="noopener" target="_blank"><span>Visiter le site web</span></a>
                <a class="githubButton" href="https://github.com/Deresium/c-n" rel="noopener"
                   target="_blank">
                    <img class="githubIcon" src="../assets/icons/github.svg" alt="github icon"/>
                    <span>Voir le code</span>
                </a>
            </div>
            <div class="tech">
                <p>{{ $t('projects.cnTech1') }}</p>
                <p>{{ $t('projects.cnTech2') }}</p>
                <p>{{ $t('projects.cnTech3') }}</p>
            </div>
        </div>
        <div class="project">
            <div class="head">
                <h2>Cable & Network Distri</h2>
                <img class="imgSite" src="../assets/c-n-distri.ico" alt="image c-n-distri"/>
                <p>{{ $t('projects.cnDistriTitle') }}</p>
            </div>
            <div class="actions">
                <a href="https://www.c-n-distri.be" rel="noopener" target="_blank"><span>Visiter le site web</span></a>
            </div>
            <div class="tech">
                <p>{{ $t('projects.cnDistriTech1') }}</p>
                <p>{{ $t('projects.cnDistriTech2') }}</p>
                <p>{{ $t('projects.cnDistriTech3') }}</p>
            </div>
        </div>
        <div class="project">
            <div class="head">
                <h2>Creatiview Pictures</h2>
                <img class="imgSite" src="../assets/logo.svg" alt="logo creatiview"/>
                <p>{{ $t('projects.creativiewPictureTitle') }}</p>
            </div>
            <div class="actions">
                <a href="https://www.pictures.creatiview.be" rel="noopener" target="_blank"><span>Visiter le site web</span></a>
                <a class="githubButton" href="https://github.com/Deresium/creatiview2.0" rel="noopener"
                   target="_blank">
                    <img class="githubIcon" src="../assets/icons/github.svg" alt="github icon"/>
                    <span>Voir le code</span>
                </a>
            </div>
            <div class="tech">
                <p>{{ $t('projects.creativiewPictureAmazon') }}</p>
                <p>{{ $t('projects.creativiewAmazonSES') }}</p>
                <p>{{ $t('projects.creativiewPictureDb') }}</p>
            </div>
        </div>
        <div class="project">
            <div class="head">
                <h2>ULiège</h2>
                <img class="imgSite" src="../assets/uliege.png" alt="image uliège"/>
                <p>{{ $t('projects.uliegeTitle') }}</p>
            </div>
        </div>

        <div class="project">
            <div class="head">
                <h2>Samplier</h2>
                <img class="imgSite" src="../assets/logo_samplier.png" alt="logo samplier"/>
                <p>{{ $t('projects.samplierTitle') }}</p>
            </div>
            <div class="tech">
                <p>{{ $t('projects.samplierCopywriting') }}</p>
                <p>{{ $t('projects.samplierCalendar') }}</p>
                <p>{{ $t('projects.samplierSounds') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({})
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

.subtitle {
    font-style: italic;
    font-size: large;
    font-weight: 400;
}

.head {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.head h2 {
    font-weight: bold;
    border-left: 1px solid #ffa41b;
    border-right: 1px solid #ffa41b;
    padding-left: 3px;
    padding-right: 3px;
}

.head p {
    text-align: center;
}

.imgSite {
    max-width: 150px;
    max-height: 100px;
}

.actions {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: stretch;
}

.actions a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    background-color: #005082;
    color: white;
    margin-top: 20px;
    border-radius: 10px;
}

.actions span {
    color: white;
}

.githubButton span {
    margin-left: 10px;
}

.githubIcon {
    width: 25px;
}

.tech {
    margin-top: 30px;
}

.project {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(min-width: 900px){
    .projects{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .project{
        width: 45%;
    }
}


</style>