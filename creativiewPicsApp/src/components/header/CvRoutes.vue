<template>
    <div class="routes">
        <RouterLink @click="localModelValue=false" :to="{name:'home'}">{{ $t('nav.home') }}</RouterLink>
        <RouterLink @click="localModelValue=false" :to="{name:'pictures'}">{{ $t('nav.pictures') }}</RouterLink>
        <RouterLink @click="localModelValue=false" :to="{name:'contact'}">{{ $t('nav.contact') }}</RouterLink>
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

</style>