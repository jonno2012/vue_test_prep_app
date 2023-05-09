<script setup>
import UserList from "@/components/UserList.vue";
import {userStore} from "@/stores/userStore";
import {daysStore} from "@/stores/daysStore";
import Day from "@/components/Day.vue";
import {onBeforeMount, onMounted, onUnmounted, provide, ref} from "vue";

let storedDays = daysStore();
let userState = userStore();
let showUsersView = ref(false)

let counter = ref(1)
provide('counter', counter)

onBeforeMount(() => {
  showUsersView.value = false
})
onMounted(() => {
  showUsersView.value = true
})

// setTimeout(() => {
//   showUsersView.value = true
// }, 3000)

function getStatus(dutyDayUserId) {
  let status = ref('')

  if (dutyDayUserId !== null) {
    status.value = 'unavailable'
  }
  return status
}

</script>

<template>
  <div class="block">
    <UserList :users="userState.users"/>
  </div>

  <div class="block">
<!--    <div v-if="storedDays.days.length" class="block">-->
      <Transition
          enter-from-class="transition opacity-0 scale-400"
          enter-to-class="transition opacity-100 scale-100"
          enter-active-class="transition duration-400"
          leave-active-class="transition duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-125"
      >
        <div v-show="showUsersView === true">
          <Day
              v-for="day in storedDays.days"
              :key="day.id"
              :status="getStatus(day.dutyDayUserId)"
              :disabled="true"
              :day="day"
          />
        </div>
      </Transition>
<!--    </div>-->
  </div>
</template>