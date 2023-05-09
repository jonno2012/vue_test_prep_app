<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {userStore} from "@/stores/userStore"
import {daysStore} from "@/stores/daysStore"
import DaysFilledIndicator from "@/composables/DaysFilledIndicator.vue"
import UserDayCount from "@/components/UserDayCount.vue"
import {watch} from "vue";
let storedDays = daysStore()
let storedUsers = userStore()

storedUsers.fill()
storedDays.fill()

watch(storedDays, (newDays, oldDays) => {
  storedUsers.users.map((user) => {
    user.dayCount = storedDays.days.filter((day) => {
      return parseInt(day.dutyDayUserId) === parseInt(user.id)
    }).length
  })
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <UserDayCount/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
        <RouterLink to="/vueuse">Vue Use</RouterLink>
        <RouterLink to="/transitions">Transitions</RouterLink>
        <RouterLink to="/model-value">Model Value</RouterLink>
        <RouterLink to="/lifecycles">Lifecycle hooks</RouterLink>
      </nav>
    </div>
  </header>
  <DaysFilledIndicator/>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
