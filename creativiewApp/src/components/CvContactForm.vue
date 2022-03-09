<template>
    <form @submit.prevent="sendFormContact" novalidate>
        <label>
            <span>{{ $t('contact.name') }}</span>
            <input v-model="name" type="text" name="name"/>
            <span v-if="errorName">{{ errorName }}</span>
        </label>
        <label>
            <span>{{ $t('contact.firstName') }}</span>
            <input v-model="firstName" type="text" name="firstName"/>
        </label>
        <label>
            <span>{{ $t('contact.email') }}</span>
            <input v-model="email" type="email" name="email"/>
            <span v-if="errorEmail">{{ errorEmail }}</span>
        </label>
        <label>
            <span>{{ $t('contact.message') }}</span>
            <textarea v-model="message" name="message"/>
            <span v-if="errorMessage">{{ errorMessage }}</span>
        </label>
        <button class="sendButton" type="submit">Envoyer</button>
    </form>
    <div class="confirmSend" v-if="confirmSend">
        <p>{{ $t('contact.confirmSend')}}</p>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import axiosCreatiview from "../axios/axiosCreatiview";
import validator from "validator";
import { useI18n } from "vue-i18n";

export default defineComponent({
    setup(){
        const { t } = useI18n();

        const name = ref('');
        const firstName = ref('');
        const email = ref('');
        const message = ref('');

        const errorName = ref('');
        const errorEmail = ref('');
        const errorMessage = ref('');

        const confirmSend = ref(false);

        const sendFormContact = async() =>{
            try {
                checkForm();
                if(errorName.value || errorEmail.value || errorMessage.value){
                    return;
                }

                await axiosCreatiview.post('/contact', {
                    name: name.value,
                    firstName: firstName.value,
                    email: email.value,
                    message: message.value
                });

                confirmSend.value = true;
                name.value = '';
                firstName.value = '';
                email.value = '';
                message.value = '';

                errorName.value = '';
                errorEmail.value = '';
                errorMessage.value = '';

            }catch(error){
                alert('Désolé, une erreur est survenue');
            }
        };

        const checkForm = () => {
            if(!name.value){
                errorName.value = t('contact.emptyField', {name: t('contact.name').toLowerCase()});
            }

            if(!email.value){
                errorEmail.value = t('contact.emptyField', {name: t('contact.email').toLowerCase()});
            } else if(!validator.isEmail(email.value)){
                errorEmail.value = t('contact.errorEmail');
            }

            if(!message.value){
                errorMessage.value = t('contact.emptyField', {name: t('contact.message').toLowerCase()});
            }
        };

        watch(name, () => {
            if(name.value) {
                errorName.value = '';
            }
        });

        watch(email, () => {
           if(email.value && validator.isEmail(email.value)) {
               errorEmail.value = '';
           }
        });

        watch(message, () => {
            if(message.value){
                errorMessage.value = '';
            }
        });


        return{
            sendFormContact,
            name,
            firstName,
            email,
            message,
            errorName,
            errorEmail,
            errorMessage,
            confirmSend
        }
    }
})
</script>

<style scoped>
label{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

textarea{
    min-height: 100px;
}

.sendButton{
    font-weight: 300;
    margin-top: 20px;
    background-color: #ffa41b;
    border: none;
    font-size: x-large;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}

input, textarea{
    border: solid 1px #005082;
    color: #005082;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 2px;
}
</style>