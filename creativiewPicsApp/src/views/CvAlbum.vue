<template>
    <div v-if="albumPictures" class="album">
        <p>{{ albumPictures.getAlbumName() }}</p>
        <div class="pictures">
            <div
                class="picture"
                 v-for="picture in albumPictures.getPictures()"
                :key="picture.getPictureId()"
            >
                <img class="imgPicture" :src="getImgSrc(picture.getPictureId())" alt="picture"/>
                <div class="settings">
                    <p>{{ picture.getAperture() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import AlbumPicturesVM from "../models/AlbumPicturesVM";
import AlbumRequester from "../requesters/AlbumRequester";

export default defineComponent({
    setup(){
        const {params: {albumId}} = useRoute();
        const id = parseInt(albumId as string);
        const albumPictures = ref<AlbumPicturesVM>();
        onMounted(async() => {
            albumPictures.value = await AlbumRequester.getAlbum(id);
        });

        const getImgSrc = (pictureId: number) => {
            return `${import.meta.env.VITE_APP_URL_CREATIVIEW}/api/pictures/${pictureId}`
        };

        return{
            albumId,
            albumPictures,
            getImgSrc
        }
    }
});
</script>

<style scoped>
.imgPicture{
    width: 100%;
}

</style>