const LOG_IN = 'LOG_IN';

export default function signInAction(response){
    let user = {
        firstName: response.firstName,
        lastName: response.lastName,
        id: response.id,
        email: response.email,
        password: response.password,
        phoneNumber: response.phoneNumber,
        birthDate: response.birthDate,
        medicines: response.medicines,
        reminderManagement: response.reminderManagement,
        _id: response._id
    }

    return {
        type: LOG_IN,
        user
    }
}

// export default function signUpAction(response){
//     let user = {
//         firstName: response.firstName,
//         lastName: response.lastName,
//         id: response.id,
//         email: response.email,
//         password: response.password,
//         phoneNumber: response.phoneNumber,
//         birthDate: response.birthDate,
//         medicines: response.medicines,
//         reminderManagement: response.reminderManagement,
//         _id: response._id
//     }

//     return {
//         type: LOG_IN,
//         user
//     }
// }