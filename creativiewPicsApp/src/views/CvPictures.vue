<template>
    <div class="albums">
        <router-link :to="{name:'album', params: {albumId: album.getId()}}" :style="albumStyle(album.getPresentationPictureId())" class="album albumSizing" v-for="album in albums" :key="album.getId()">
            <div class="orangeBackground albumSizing"/>
            <p class="albumName">{{ album.getName() }}</p>
        </router-link>
    </div>
</template>

<script lang="ts">
import AlbumVM from "../models/AlbumVM";
import {computed, onMounted, ref} from "vue";
import AlbumRequester from "../requesters/AlbumRequester";

export default {
    setup(){
        const albums = ref(new Array<AlbumVM>());

        onMounted(async() => {
            albums.value = await AlbumRequester.getAllAlbums();
        });

        const getImgSrc = (pictureId: number) => {
            return `${import.meta.env.VITE_APP_URL_CREATIVIEW}/api/pictures/${pictureId}`
        };

        const albumStyle = (pictureId: number) => {
            return{
                'background-image': `url(${getImgSrc(pictureId)})`
            }
        };

        return{
            albums,
            getImgSrc,
            albumStyle
        }
    }
}
</script>

<style scoped>

.albums{
    display: flex;
    flex-direction: column;
}

.album{
    position: relative;
    display: flex;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 20px;
    cursor: pointer;
}

.albumName{
    position: relative;
    z-index: 1;
    padding-left: 10px;
    font-family: 'Anton', sans-serif;
    color: white;
    font-size: xx-large;
}

a{
    text-decoration: none;
}

.orangeBackground{
    position: absolute;
    width: 100%;
    background: linear-gradient(90deg, rgba(255,164,27,1) 0%, rgba(0,212,255,0) 100%);
    z-index: 0;
}

.albumSizing {
    height: 200px;
}

@media(min-width: 900px){
    .albumName{
        font-size: 3em;
        padding-left: 30px;
    }

    .albumSizing{
        height: 500px;
    }
}

</style>