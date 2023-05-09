<script setup>
import {inject} from "vue";
import UserListUser from "@/components/UserListUser.vue";

defineProps({
  users: Array
})

let counter = inject('counter')

</script>

<template>
  <div v-if="users.length">
    {{ counter }}
    <button @click="counter++">Click</button>
    <ul>
      <UserListUser v-for="user in users" :user="user" :key="user.id">
        <template #header>The header</template>
      </UserListUser>
    </ul>
  </div>
</template>

<style scoped>

</style>