<script setup>
import {ref} from "vue";

let show = ref(false)
let inlineBlock = ref('inlineBlock')
</script>
<template>
  <slot>Default slot</slot>
  <button @click="show = !show">Click me</button>
<Transition>
  <p v-if="show" :class="[inlineBlock]">Hello</p>
</Transition>
  <slot name="footer">Footer slot</slot>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 3.0s ease;
}
.inlineBlock {
  display: inline-block;
}
</style>