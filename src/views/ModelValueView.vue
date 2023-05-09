<script setup>
import ModelValueForm from "@/components/ModelValueForm.vue";
import {isAPrimeNumber} from "@/composables/PrimeNumberComposable"
import {computed, onBeforeMount, onMounted, provide, ref} from "vue";

let number = ref(null)
let showMessage = ref(false)

let primeNumberMessage = computed(() => {
  return isAPrimeNumber(number.value) ? 'Is a prime number' : 'Is not a prime number'
})

let inFocus = ref(false)
provide('inFocus', inFocus)

setTimeout(() => {
  showMessage = true
}, 1)

</script>
<template>
  <h2>Model Value</h2>
  <p>{{ number }}</p>
  <Transition>
    <p v-if="inFocus">{{ primeNumberMessage }}</p>
  </Transition>
<ModelValueForm
    :modelValue="number"
    @updateNumber:modelValue="newValue => number = newValue"
/>
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