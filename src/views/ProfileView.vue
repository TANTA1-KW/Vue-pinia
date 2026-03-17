<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../stores/counter'
const router = useRouter()
const counterStore = useCounterStore()

const isupdate = ref(true) 
const firstname = ref('')
const lastname = ref('')

const gobackhome = () => {
    router.push({ name: 'home' })
}

onMounted(() => {
    firstname.value = counterStore.firstname
    lastname.value = counterStore.lastname
})

watch([firstname, lastname], (data) => {
    if (data[0] !== counterStore.firstname || data[1] !== counterStore.lastname) {
        isupdate.value = false
    }
})


const updateProfile = () => {
    console.log('Profile updated:', firstname.value, lastname.value)
    const formdata = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    counterStore.changeName(formdata)

    isupdate.value = true
}

</script>

<template>
    <div>
        name: {{ counterStore.firstname }} {{ counterStore.lastname }}
    </div>
    <div v-if="isupdate" style="color: aqua;">Up to date</div>
    <div>
        Profile Vue
        <div>
            Firstname <input type="text" v-model="firstname">
        </div>
        <div>
            Lastname <input type="text" v-model="lastname">
        </div>
        <div>
            <button @click="updateProfile()">update</button>
        </div>
    </div>
    <!-- <RouterLink to="{name: 'home'}"> -->
        <button @click="gobackhome()">Back to Home</button>
</template>

<style></style>