const LOG_IN = 'LOG_IN';
const REMINDER_MANAGEMENT ='REMINDER_MANAGEMENT';



export function loginInAction(response){
    let user = {
        firstName: response.firstName,
        lastName: response.lastName,
        id: response.id,
        email: response.email,
        password: response.password,
        phoneNumber: response.phoneNumber,
        birthDate: response.birthDate,
        _id: response._id
    }

    return {
        type: LOG_IN,
        user
    }
}

export default function reminderAction(response){
    let reminderManagement = {
        reminderManagement:response.reminderManagement
    }

    return {
        type: REMINDER_MANAGEMENT,
        reminderManagement
    }
}