const REMINDER_MANAGEMENT = 'REMINDER_MANAGEMENT';

export default function reminderAction  (response) {
    
    let reminderManagement = {
        userWantReminders: response.reminderManagement.userWantReminders,
        automaticOscillation: response.reminderManagement.automaticOscillation,
        snooze: response.reminderManagement.snooze,
        sound: response.reminderManagement.sound,
        PreTaskReminder: response.reminderManagement.PreTaskReminder
    }

    return {
        type: REMINDER_MANAGEMENT,
        reminderManagement
    }
}
