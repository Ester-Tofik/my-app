import { combineReducers } from "redux";

const initialState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    birthDate: "",
    medicines: "",
    _id: ""
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "saveid":
            return { ...state, id: action.payload };
        case "saveFirstName":
            return { ...state, firstName: action.payload };
        case "saveLastName":
            return { ...state, lastName: action.payload };
        case "saveEmail":
            return { ...state, email: action.payload };
        case "savePassword":
            return { ...state, password: action.payload };
        case "savePhoneNumber":
            return { ...state, phoneNumber: action.payload };
        case "saveBirthDate":
            return { ...state, birthDate: action.payload };
        case "saveMedicines":
            return { ...state, medicines: action.payload };
        case "save_id":
            return { ...state, _id: action.payload };
        default:
            return state;
    }
}

export default combineReducers({user : userReducer});

