<template>
    <h1>Ajouter une facture</h1>
    <div class="saleOrPurchase">
        <span>Achat ou vente</span>
        <label>
            <input type="radio" name="saleOrPurchase" v-model="saleOrPurchase" value="PURCHASE">
            <span>Achat</span>
        </label>
        <label>
            <input type="radio" name="saleOrPurchase" v-model="saleOrPurchase" value="SALE"/>
            <span>Vente</span>
        </label>
    </div>
    <label>
        <span>Année</span>
        <select v-model="selectedYear">
            <option
                v-for="year in listYears"
                :key="year"
                :value="year"
            >{{ year }}
            </option>
        </select>
    </label>
    <label>
        <span>Date</span>
        <input type="date" v-model="selectedDate"/>
    </label>
    <label>
        <span>Date limite</span>
        <input type="date" v-model="limitDate"/>
    </label>
    <label>
        <span>Utilisateur</span>
        <select v-model="selectedUser">
            <option
                v-for="keyValue in listUsers"
                :key="keyValue.getKey()"
                :value="keyValue.getKey()"
            >{{ keyValue.getValue() }}
            </option>
        </select>
    </label>
    <label>
        <span>Compte utilisateur</span>
        <select v-model="selectedUserAccount">
            <option
                v-for="keyValue in listUserAccounts"
                :key="keyValue.getKey()"
                :value="keyValue.getKey()"
            >{{ keyValue.getValue() }}
            </option>
        </select>
    </label>
    <label>
        <span>Client ou fournisseur</span>
        <select v-model="selectedCustomerProvider">
            <option value="">Sélectionner une valeur</option>
            <option
                v-for="keyValue in listCustomerOrProvider"
                :key="keyValue.getKey()"
                :value="keyValue.getKey()"
            >{{ keyValue.getValue() }}
            </option>
        </select>
    </label>
    <label>
        <span>Compte client ou fournisseur</span>
        <select v-model="selectedCustomerProviderAccount">
            <option value="">Sélectionner une valeur</option>
            <option
                v-for="keyValue in listCustomerProviderAccounts"
                :key="keyValue.getKey()"
                :value="keyValue.getKey()"
            >{{ keyValue.getValue() }}
            </option>
        </select>
    </label>
</template>

<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import KeyValue from "../models/KeyValue";
import UsersRequester from "../requesters/UsersRequester";
import AccountRequester from "../requesters/AccountRequester";
import CustomerProviderRequester from "../requesters/CustomerProviderRequester";

const currentYear = new Date().getFullYear();
const selectedYear = ref(currentYear);
const selectedDate = ref(new Date().toISOString().split('T')[0]);
const limitDate = ref<Date>();
const selectedUser = ref('');
const selectedUserAccount = ref('');
const selectedCustomerProvider = ref('');
const selectedCustomerProviderAccount = ref('');
const saleOrPurchase = ref('PURCHASE');

const listYears = new Array<number>();
for (let i = 1; i <= 2; ++i) {
    listYears.push(currentYear - i);
}
for (let i = 1; i <= 2; ++i) {
    listYears.push(currentYear + i);
}
listYears.push(currentYear);
listYears.sort((a, b) => {
    return a > b ? -1 : 1;
});

const listUsers = ref(new Array<KeyValue<string, string>>());
const listUserAccounts = ref(new Array<KeyValue<string, string>>());
const listCustomerOrProvider = ref(new Array<KeyValue<string, string>>());
const listCustomerProviderAccounts = ref(new Array<KeyValue<string, string>>());

watch(selectedUser, async () => {
    listUserAccounts.value = [];
    listUserAccounts.value = await AccountRequester.requestUserAccounts(parseInt(selectedUser.value));
    selectedUserAccount.value = listUserAccounts.value[0].getKey();
});

watch(saleOrPurchase, async() => {
    const isCustomer = saleOrPurchase.value === 'SALE';
    listCustomerOrProvider.value = [];
    listCustomerOrProvider.value = await CustomerProviderRequester.requestCustomerOrProviders(isCustomer);
    selectedCustomerProvider.value = '';
},{immediate: true});

watch(selectedCustomerProvider, async() => {
    if (selectedCustomerProvider.value) {
        listCustomerProviderAccounts.value = await AccountRequester.requestCustomerProviderAccounts(parseInt(selectedCustomerProvider.value));
    } else {
        listCustomerProviderAccounts.value = [];
    }
    selectedCustomerProviderAccount.value = '';
});

onMounted(async () => {
    listUsers.value = await UsersRequester.requestAllUsers();
    selectedUser.value = listUsers.value[0].getKey();
});

</script>

<style scoped>
label {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
}

label span {
    display: block;
}

.saleOrPurchase label{
    display: flex;
}
</style>