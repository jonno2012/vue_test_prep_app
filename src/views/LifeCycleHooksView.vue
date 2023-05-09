<script setup>
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from "vue";

let inputFocus = ref(null)

// Creating:
// * beforeCreate > before all data properties, computed properties, methods and watchers have not been created yet
// * created > the above have been created. The created method is the best place to make any api calls


// Mounting:

onBeforeMount(() => {
  console.log(inputFocus)
})

onMounted(() => { // when dom elements have been created. use case: applying focus to a page element on page load
  inputFocus.value.focus()
  console.log(inputFocus)
})

// Updating:
// beforeUpdate - when data, computed values etc have been changed but before the changes have been patched to the DOM
// it can be used to access the DOM before an update or to remove event listeners on DOM elements after an update
// updated() - when the DOM has been updated following changes

// Unmounting:
// beforeUnmount/unmounted()
// We can perform clean ups like invalidating timers on set interval, cancelling network requests, cancelling subscriptions etc

// miscellaneous
// activated, deactivated, errorCaptured, renderTracked, renderTriggered

let show = ref(true)

let pulse = setInterval(() => {
  show.value = !show.value
}, 1000)

onBeforeUnmount(() => {
  clearInterval(pulse)
})

</script>

<template>
  <input
      ref="inputFocus"
      type="text"
      value=""
      placeholder="I am in focus"
  >
  <br>
  <transition>
    <p class="pulse" v-if="show">I am pulsing</p>
  </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.pulse {height: 0px;}
</style>