<template>
    <div id="google-signin-btn"></div>
</template>

<script setup lang="ts">
import Login from "../../utils/Login";
import {onMounted} from "vue";

const onSignIn = async (googleUser: any) => {
    await new Login(googleUser).login();
};

const render = () => {
    const signin = localStorage.getItem('signinLoaded');
    if (signin === 'true') {
        // @ts-ignore
        // eslint-disable-next-line
        gapi.signin2.render('google-signin-btn', {
            onsuccess: onSignIn,
            longtitle: true
        });
    } else {
        setTimeout(render, 100);
    }
};

onMounted(() => {
    render();
});


</script>

<style scoped>

</style>