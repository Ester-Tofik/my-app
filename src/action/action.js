const LOG_IN = 'LOG_IN';

export default function  loginInAction (response) {
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


