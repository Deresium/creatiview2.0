<template>
    <svg :class="cssClasses" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 802 290">
        <g id="Group_8" transform="translate(-88 -232)">
            <path id="Intersection_3" d="M119.111,0a119.111,119.111,0,1,0,0,238.222Z" transform="translate(88 232)"
                  fill="#ffa41b"/>
            <text id="reati" transform="translate(220 470)" fill="#005082" font-size="159">
                <tspan x="0" y="0">reati</tspan>
            </text>
            <text id="iew" transform="translate(663 470)" fill="#005082" font-size="159">
                <tspan x="0" y="0">iew</tspan>
            </text>
            <path id="Path_8" d="M144,134.025H259.225L144,253.136Z" transform="translate(388.556 217.086)" fill="#ffa41b"/>
        </g>
    </svg>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
    props: {
        size: {
            default: 'small'
        }
    },
    setup(props){
        const cssClasses = computed(() => {
            return{
                'small': props.size === 'small',
                'large': props.size !== 'small'
            }
        });

        return {
            cssClasses
        }
    }
})
</script>

<style scoped>
.small{
    width: 150px;
}

.large{
    width: 300px;
}

@media(min-width: 900px) {
    .large{
        width: 700px;
    }
}

tspan{
    font-family: 'Anton', sans-serif;
}
</style>