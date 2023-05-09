<script setup>
import {inject} from "vue";

defineProps({
  status: Object,
  day: Object,
  disabled: Boolean
})

let counter = inject('counter')
</script>

<template>
  {{ counter }}
  <br>
  <button
      :disabled="disabled"
      class="day"
      :class="status.value"
      @click="$emit('selectDay', day)"
  >
    {{ day.date }}
  </button>
</template>

<style scoped>

.day {
  display: inline-block;
  margin: 5px 5px 5px 0;
}

.active {
  color: green;
}

.unavailable {
  color: red;
}
</style>