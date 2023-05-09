<script setup>
import UserCountForm from "@/components/UserCountForm.vue";
import {userStore} from "@/stores/userStore";
import {ref, watch} from "vue";

let searchText = ref('')
let foundUsers = ref([])
let storedUsers = userStore()

watch(searchText, (newText, oldText) => {
  foundUsers = storedUsers.users.filter((user) => {
    if (newText === '') return true
    return (user.first_name.includes(newText) || user.last_name.includes(newText))
  })
})
</script>

<template>
<UserCountForm :modelValue="searchText" @updateUserCount:modelValue="newValue => searchText = newValue"/>
  <br>
  <ul v-if="foundUsers.length">
    <li v-for="user in foundUsers" :key="user.id">{{ user.first_name }} {{ user.last_name }}: {{ user.dayCount }}</li>
  </ul>
</template>

<style scoped>

</style>