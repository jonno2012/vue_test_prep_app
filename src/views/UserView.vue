<script setup>
import {ref} from "vue";
import {daysStore} from "@/stores/daysStore";
import {userStore} from "@/stores/userStore";
import Userform from "@/components/Userform.vue";
import QualsForm from "@/components/QualsForm.vue";
import {useRoute} from 'vue-router'
import Day from "@/components/Day.vue";
import {getStatus, getDisabled} from "@/composables/status";
const route = useRoute();
const userId = route.params.id
let storedDays = daysStore();
let user = userStore().getUser(userId)

// let equipmentList = ref([
//   {name: 'Crampons', key: 'cmp'},
//   {name: 'Goggles', key: 'gg'}
// ])

function updateDutyDay(day) {
  storedDays.updateDutyDay(day, userId)
}

</script>

<template>
  <div class="block">
    <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    <div v-if="user.specialRequirements.length">
      {{ user.specialRequirements }}
      <br>
    </div>
    <div v-if="user.qualificationLevel.length">
      {{ user.qualificationLevel }}
      <br>
    </div>
    <div v-if="storedDays.days.length" class="block">
      <Day
          v-for="day in storedDays.days"
          :key="day.id"
          :day="day"
          :status="getStatus(day.dutyDayUserId, userId)"
          :disabled="getDisabled(day.dutyDayUserId, userId).value"
          @selectDay="updateDutyDay"
      />
    </div>
    <Userform
        :days="storedDays.days"
        :modelValue="user.specialRequirements"
        @update:modelValue="newValue => user.specialRequirements = newValue"
    >Tester
    <template #subHeading>A Sub heading</template>
    </Userform>
    <br>
    <QualsForm
      :modelValue="user.qualificationLevel"
      @updateQuals:modelValue="newValue => user.qualificationLevel = newValue" />
    <br>
  </div>


</template>