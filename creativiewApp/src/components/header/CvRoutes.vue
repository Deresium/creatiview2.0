<template>
    <div class="routes">
        <RouterLink @click="localModelValue=false" :to="{name:'home'}">{{ $t('home') }}</RouterLink>
        <RouterLink @click="localModelValue=false" :to="{name:'aboutMe'}">{{ $t('aboutMe') }}</RouterLink>
        <RouterLink @click="localModelValue=false" :to="{name:'projects'}">{{ $t('projects') }}</RouterLink>
        <RouterLink @click="localModelValue=false" :to="{name:'contact'}">{{ $t('contact') }}</RouterLink>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            required: false,
        }
    },
    setup(props, {emit}) {
        const localModelValue = computed({
            get: () => props.modelValue,
            set: (value: any) => {
                emit('update:modelValue', value);
            }
        });

        return {
            localModelValue
        }
    }
})
</script>

<style scoped>

.routes{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.routes > a {
    text-decoration: none;
    font-weight: 300;
    font-size: xx-large;
    color: #005082;
    margin-top: 20px;
    margin-bottom: 20px;
}

@media(min-width: 900px){
    .routes{
        flex-direction: row;
        justify-content: space-between;
    }

    .routes > a {
        font-size: large;

    }

    .routes > a:not(:last-child){
        margin: 0 50px 0 0;
    }
}

</style>