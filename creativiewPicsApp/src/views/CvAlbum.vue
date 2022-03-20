<template>
    <div v-if="albumPictures" class="album">
        <h1>{{ albumPictures.getAlbumName() }}</h1>
        <div class="pictures">
            <div
                tabindex="0"
                class="picture"
                v-for="picture in albumPictures.getPictures()"
                :key="picture.getPictureId()"
                @click="setPickingImage(picture.getPictureId())"
            >
                <img class="imgPicture" :src="getImgSrc(picture.getPictureId())" alt="picture"/>
                <div class="settings">
                    <p>{{ picture.getAperture() }}</p>
                    <p>{{ picture.getSpeed() }}</p>
                    <p>{{ picture.getCamera() }}</p>
                    <p>{{ picture.getIso() }}</p>
                    <p>{{ picture.getFocalLength() }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="fullScreenViewer" v-if="pickingPictureId !== 0" @click="resetPicking">
        <img class="imgFullScreen" :src="getImgSrc(pickingPictureId)" alt="picture fullscreen"/>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import AlbumPicturesVM from "../models/AlbumPicturesVM";
import AlbumRequester from "../requesters/AlbumRequester";

export default defineComponent({

    setup() {
        const {params: {albumId}} = useRoute();
        const id = parseInt(albumId as string);
        const albumPictures = ref<AlbumPicturesVM>();

        const pickingPictureId = ref(0);


        onMounted(async () => {
            albumPictures.value = await AlbumRequester.getAlbum(id);
        });

        const getImgSrc = (pictureId: number) => {
            return `${import.meta.env.VITE_APP_URL_CREATIVIEW}/api/pictures/${pictureId}`
        };

        const setPickingImage = (pictureId: number) => {
            pickingPictureId.value = pictureId;
        };

        const resetPicking = () => {
            pickingPictureId.value = 0;
        };


        return {
            albumId,
            albumPictures,
            getImgSrc,
            setPickingImage,
            pickingPictureId,
            resetPicking
        }
    }
});
</script>

<style scoped>
h1{
    color: white;
    font-size: xx-large;
    padding-left: 10px;
    font-family: 'Anton', sans-serif;
    background: linear-gradient(90deg, rgba(255,164,27,1) 0%, rgba(0,212,255,0) 100%);
}

.pictures{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-bottom: 25px;
    cursor: pointer;
}

.imgPicture {
    display: block;
    max-width: 100%;
    max-height: 90vh;
}

.settings {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background: #ffa41b;
}

.settings p {
    color: white;
}

.fullScreenViewer {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
}

.imgFullScreen {
    display: block;
    max-width: 100%;
    max-height: 100%;
}

</style>