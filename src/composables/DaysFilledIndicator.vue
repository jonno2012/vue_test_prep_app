<script setup>
import {daysStore} from "@/stores/daysStore";
import {computed, ref} from "vue";

let storedDays = daysStore();

let daysRemainingText = computed(() => {
  return storedDays.daysFilled ? 'Slots Filled!' : 'Slots Remaining'
})

let weight = ref('normal')
let disabled = ref('disabled')

let classObj = computed(() => {
  return { spotsFilled: storedDays.daysFilled, weight, disabled }
})

function toggleWeight() {
  weight.value = weight.value === 'bold' ? 'normal' : 'bold'
}

</script>

<template>
<span
    v-motion-fade
    class="spotsRemaining clicker"
    :class="[classObj, weight]"
    @click="toggleWeight"
>
  {{ daysRemainingText }}
</span>
</template>

<style scoped>
  .spotsRemaining {
    color: red;
  }
  .spotsFilled {
    color: green;
  }
  .bold {
    font-weight: bold;
  }
  .normal {
    font-weight: normal;
  }
  .clicker {
    display: inline-block;
    height: 25px;
  }
</style>