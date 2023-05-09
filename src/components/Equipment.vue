<script setup>
defineProps(['modelValue'])
defineEmits(['updateUserEquipment:modelValue'])
</script>

<template>
<div v-if="modelValue.length">
  <form @submit.prevent>
    <div
        v-for="item in modelValue"
        :key="item.key"
        class="form-group">
      <label>{{ item.name }}</label>
      <input type="checkbox" :value="item.key" v-model="modelValue">
    </div>
  </form>
</div>
</template>

<style scoped>

</style>