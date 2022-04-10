<template>
    <h1>Ajouter une facture</h1>
    <label>
        <span>Année</span>
        <select v-model="selectedYear">
            <option
                v-for="year in listYears"
                :key="year"
                :value="year"
            >{{ year }}</option>
        </select>
    </label>
    <label>
        <span>Date</span>
        <input type="date" v-model="selectedDate"/>
        {{ selectedDate }}
    </label>
    <label>
        <span>Date limite</span>
        <input type="date" v-model="limitDate"/>
    </label>
    <label>
        <select v-model="selectedUser">
            <option
                v-for="keyValue in listUsers"
                :key="keyValue.getKey()"
                :value="keyValue.getKey()"
            >{{ keyValue.getValue() }}</option>
        </select>
    </label>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import KeyValue from "../models/KeyValue";
import UsersRequester from "../requesters/UsersRequester";

const currentYear = new Date().getFullYear();
const selectedYear = ref(currentYear);
const selectedDate = ref(new Date().toISOString().split('T')[0]);
const limitDate = ref<Date>();
const selectedUser = ref('');

const listYears = new Array<number>();
for(let i = 1; i <= 2; ++i){
    listYears.push(currentYear - i);
}
for(let i = 1; i <= 2; ++i){
    listYears.push(currentYear + i);
}
listYears.push(currentYear);
listYears.sort((a, b) => {
    return a > b ? -1: 1;
});

const listUsers = ref(new Array<KeyValue<string, string>>());

onMounted(async() => {
    listUsers.value = await UsersRequester.requestAllUsers();
    selectedUser.value = listUsers.value[0].getKey();
});

</script>

<style scoped>

</style>