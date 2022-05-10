
export const saveFirstName = (firstName) => {
    return function (dispatch){
        dispatch({type:"saveFirstName", payload: firstName});
    }
}

export const saveid = (id) => {
    return function (dispatch){
        dispatch({type:"saveid", payload: id});
    }
}

export const saveLastName = (lastName) => {
    return function (dispatch){
        dispatch({type:"saveLastName", payload: lastName});
    }
}

export const saveEmail = (email) => {
    return function (dispatch){
        dispatch({type:"saveEmail", payload: email});
    }
}

export const savePassword = (password) => {
    return function (dispatch){
        dispatch({type:"savePassword", payload: password});
    }
}

export const savePhoneNumber = (phoneNumber) => {
    return function (dispatch){
        dispatch({type:"savePhoneNumber", payload: phoneNumber});
    }
}

export const saveBirthDate = (birthDate) => {
    return function (dispatch){
        dispatch({type:"saveBirthDate", payload: birthDate});
    }
}
export const saveMedicines = (medicines) => {
    return function (dispatch){
        dispatch({type:"saveMedicines", payload: medicines});
    }
}
export const save_id = (_id) => {
    return function (dispatch){
        dispatch({type:"save_id", payload: _id});
    }
}
