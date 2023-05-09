<script setup>
import {inject} from "vue";

defineProps(['modelValue'])
defineEmits(['updateNumber:modelValue'])

let inFocus = inject('inFocus')

</script>
<template>
  <input
      type="number"
      :value="modelValue"
      @input="$emit('updateNumber:modelValue', $event.target.value)"
      @focus="inFocus = true"
      @blur="inFocus = false"
  >
</template>

<style scoped>

</style>