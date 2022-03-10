<template>
    <teleport to="body">
        <div class="fixedPanel divHeroImg"/>
        <div class="fixedPanel txtCenterHome">
            <img class="svgTxt" src="../assets/fullName.svg" alt="creatiview text logo"/>
            <router-link class="linkToPictures" :to="{name: 'pictures'}">Découvrir</router-link>
        </div>
    </teleport>
</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.fixedPanel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: 0;
    padding: 0;
}

.txtCenterHome{
    z-index: 2;
    width: 100%;
    top: 30vh;
    left: 0;
}

.divHeroImg {
    background-image: url("../assets/blue_fire_min.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

}

.svgTxt {
    width: 60%;
}

.linkToPictures {
    display: block;
    color: #005082;
    font-size: x-large;
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #ffa41b;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 100px;
}

@media(orientation: landscape){
    .txtCenterHome{
        top: 15vh;
    }
}

@media (min-width: 900px) {
    .divHeroImg {
        background-image: url("../assets/IMG_9947_MIN.PNG");
        background-color: black;
    }

    .svgTxt {
        display: none;
    }

    .txtCenterHome{
        display: none;
    }

}

</style>