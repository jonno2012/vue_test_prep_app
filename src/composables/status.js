import {ref} from "vue";

export function getStatus(dutyDayUserId, userId) {
    let status = ref('');

    switch (dutyDayUserId) {
        case userId:
            status.value = 'active'
            break
        case null:
            status.value = 'available'
            break
        default:
            status.value = 'unavailable'
    }

    return status
}

export function getDisabled(dutyDayUserId, userId) {
    let disabled = ref(false)

    switch (dutyDayUserId) {
        case userId:
            disabled.value = false
            break
        case null:
            disabled.value = false
            break
        default:
            disabled.value = true
    }

    return disabled
}