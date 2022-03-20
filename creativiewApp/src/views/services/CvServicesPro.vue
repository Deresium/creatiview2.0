<template>
    <div class="completeService webService">
        <div class="completeServiceTitle webServiceTitle">
            <h2>{{ $t('services.websiteService') }}</h2>
            <p>{{ $t('services.websiteServiceSubtitle') }}</p>
        </div>
        <div class="cards">
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/company.svg" alt="company logo"/>
                </div>
                <h3>{{ $t('services.presentationTitle') }}</h3>
                <p>{{ $t('services.presentationText') }}</p>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/contact.svg" alt="contact icon"/>
                </div>
                <h3>{{ $t('services.contactTitle') }}</h3>
                <p>{{ $t('services.contactText') }}</p>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/lock.svg" alt="lock icon"/>
                </div>
                <h3>{{ $t('services.securityTitle') }}</h3>
                <p>{{ $t('services.securityText') }}</p>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/responsive.svg" alt="responsive icon"/>
                </div>
                <h3>{{ $t('services.responsiveTitle') }}</h3>
                <p>{{ $t('services.responsiveText') }}</p>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/payment.svg" alt="payment icon"/>
                </div>
                <h3>{{ $t('services.paymentTitle') }}</h3>
                <p>{{ $t('services.paymentText') }}</p>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/email.svg" alt="email icon"/>
                </div>
                <h3>{{ $t('services.emailingTitle') }}</h3>
                <p>{{ $t('services.emailingText') }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
})
</script>

<style scoped>

.completeServiceTitle {
    border-left: 2px solid #ffa41b;
    padding-left: 5px;
    margin-top: 40px;
}

.completeServiceTitle h2 {
    margin-bottom: 10px;
    font-weight: bold;
}

.completeServiceTitle p {
    font-style: italic;
    margin-top: 5px;
}

.card .divImg {
    border: solid 1px #ffa41b;
    border-radius: 50%;
    padding: 20px;
}

.card img {
    width: 75px;
    height: 75px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 50px;
    margin-top: 30px;
}

.card h3 {
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
}

.card p {
    text-align: center;
}

.skills p {
    margin-top: 2px;
    margin-bottom: 10px;
}

@media (min-width: 900px) {
    .cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .card{
        width: 40%;
    }
}

</style>