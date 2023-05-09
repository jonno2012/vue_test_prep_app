<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="block">
    <form @submit.prevent>
      <div class="formGroup">
        <label><slot>Special Requirements</slot></label>
        <br>
        <slot name="subHeading"></slot>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      </div>
    </form>
  </div>
</template>

<style scoped>
.checkbox {
  margin-left: 5px;
}
</style>