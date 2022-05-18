const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';

export default function signInAction(response){
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

// export default function signUpAction(response){
//     let user = {
//         firstName: response.firstName,
//         lastName: response.lastName,
//         id: response.id,
//         email: response.email,
//         password: response.password,
//         phoneNumber: response.phoneNumber,
//         birthDate: response.birthDate,
//         _id: response._id
//     }

//     return {
//         type: SIGN_UP,
//         user
//     }
// }