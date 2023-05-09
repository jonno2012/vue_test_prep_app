<script setup>
import {ref} from "vue";

let show = ref(false)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
  color: red;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.0s ease;
}


</style>