import {defineStore} from "pinia";

export let daysStore = defineStore('dayStore', {
    state: () => ({
        days: []
    }),

    actions: {
        fill() {
            let endOfMonth = new Date(2023, 5, 30);
            let index = 0;
            for (let d = new Date(2023, 5, 1); d <= endOfMonth; d.setDate(d.getDate() + 1)) {
                let date = new Date(d)
                if ([3, 0, 6].indexOf(date.getDay()) !== -1) {
                    this.$state.days.push({
                        id: index++,
                        date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
                        dutyDayUserId: null
                    });
                }
            }
        },
        updateDutyDay(day, userId) {
            day.dutyDayUserId = (day.dutyDayUserId === userId)
                ? null
                : userId
        },
        userDays(userId) {
            return this.days.filter((day) => {
                return day.dutyDayUserId === userId
            }).length
        }
    },
    getters: {
        daysFilled() {
            return this.days.length === this.days.filter((day) => {
                return day.dutyDayUserId !== null
            }).length
        }
    }
})