<script setup>
import {ref, onMounted} from "vue";
defineProps(['modelValue'])
defineEmits(['updateUserCount:modelValue'])

let inputFocus = ref(null)

onMounted(() => {
  inputFocus.value.focus()
})

// onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <input
      ref="inputFocus"
      type="text"
      :value="modelValue"
      @input="$emit('updateUserCount:modelValue', $event.target.value)"
  >
</template>

<style scoped>

</style>