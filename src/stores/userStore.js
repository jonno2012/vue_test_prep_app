import {defineStore} from "pinia";
import {daysStore} from "@/stores/daysStore";
export let userStore = defineStore('userStore', {
    state: () => ({
        users: []
    }),

    actions: {
        async fill() {
            fetch('https://reqres.in/api/users?page=2')
                .then(response => response.json())
                .then(users => {
                    this.$state.users = users.data.map((item) => {
                        item['duty_days'] = [];
                        item['status'] = 'available'
                        item['specialRequirements'] = ''
                        item['qualificationLevel'] = ''
                        item['dayCount'] = 0
                        return item;
                    });
                })
        },
        getUser(userId) {
            return this.$state.users.filter((user) => {
                return user.id === parseInt(userId)
            })[0]
        }
    }
})