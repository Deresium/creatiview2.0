<template>
    <div class="completeService devService">
        <div class="completeServiceTitle devServiceTitle">
            <h2>{{ $t('services.devService') }}</h2>
            <p>{{ $t('services.devServiceSubtitle') }}</p>
        </div>
        <div class="cards">
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/node.svg" alt="nodejs icon"/>
                </div>
                <h3>Back-End</h3>
                <div class="skills">
                    <p>Node.js & Express framework</p>
                    <p>Java</p>
                    <p>RESTful API</p>
                </div>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/vue.svg" alt="vuejs icon"/>
                </div>
                <h3>Front-End</h3>
                <div class="skills">
                    <p>Vue 2 & 3</p>
                    <p>Typescript</p>
                    <p>HTML & CSS</p>
                </div>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/postgresql.svg" alt="postgres icon"/>
                </div>
                <h3>Database</h3>
                <div class="skills">
                    <p>SQL & NoSQL</p>
                    <p>ACID</p>
                    <p>Normalization</p>
                    <p>ORM (Sequelize - JPA - Mongoose)</p>
                </div>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/securityDev.svg" alt="security icon"/>
                </div>
                <h3>Security</h3>
                <div class="skills">
                    <p>SQL & NoSQL Injections</p>
                    <p>TLS protocol</p>
                    <p>JWT</p>
                    <p>XSS & CSRF Attacks</p>
                    <p>Google Sign In</p>
                    <p>Google Recaptcha</p>
                    <p>2FA Authentication</p>
                    <p>Random Salted Password</p>
                    <p>Browser Fingerprint</p>
                </div>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/coding.svg" alt="coding icon"/>
                </div>
                <h3>Coding & Analysis</h3>
                <div class="skills">
                    <p>OOP</p>
                    <p>Design Patterns</p>
                    <p>Unit Testing</p>
                    <p>Algorithms & Data Structures</p>
                    <p>Merise & UML</p>
                    <p>Git & GitHub</p>
                </div>
            </div>
            <div class="card">
                <div class="divImg">
                    <img src="../../assets/icons/adobeXD.svg" alt="adobe XD icon"/>
                </div>
                <h3>Design</h3>
                <div class="skills">
                    <p>Mockups</p>
                    <p>Adobe XD</p>
                    <p>Photoshop</p>
                </div>
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