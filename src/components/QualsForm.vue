<script setup>
defineProps(['modelValue'])
defineEmits(['updateQuals:modelValue'])
</script>

<template>
  <label>Qualification Level</label>
  <br>
  <input type="text" :value="modelValue" @input="$emit('updateQuals:modelValue', $event.target.value)">
</template>

<style scoped>

</style>