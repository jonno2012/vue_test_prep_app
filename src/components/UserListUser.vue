<script setup>
import {RouterLink} from "vue-router";

defineProps({
  user: Object
})

</script>

<template>
<!--  <slot name="header"></slot>-->
  <li>
    <RouterLink :to="{ name: 'user', params: { id: user.id }}">{{ user.first_name }} {{ user.last_name }}</RouterLink>
    <ul v-if="user.duty_days.length">
      <li
          v-for="dutyDay in user.duty_days"
          :key="dutyDay.date">{{ dutyDay.date }}</li>
    </ul>
  </li>
</template>