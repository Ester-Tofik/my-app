// import { combineReducers } from "redux";

const initialState = {
    user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        birthDate: "",
        medicines: "",
        reminderManagement: "",
        _id: ""
    }

}
console.log(initialState, "initialState1");

const userReducer = (state = initialState, action) => {
    console.log(action, "action");
    switch (action.type) {
        case "LOG_IN":
            return { ...state, user: action.user };
        // case "saveid":
        //     return { ...state, id: action.payload };
        // case "save_firstName":
        //     return { ...state, firstName: action.payload };
        // case "save_lastName":
        //     return { ...state, lastName: action.payload };
        // case "save_email":
        //     return { ...state, email: action.payload };
        // case "save_password":
        //     return { ...state, password: action.payload };
        // case "save_phoneNumber":
        //     return { ...state, phoneNumber: action.payload };
        // case "save_birthDate":
        //     return { ...state, birthDate: action.payload };
        // case "save_medicines":
        //     return { ...state, medicines: action.payload };
        // case "save_id":
        //     return { ...state, _id: action.payload };
        // case "save_reminderManagement":
        //     return { ...state, reminderManagement: action.payload };
        default:
            return state;
    }
}
console.log(initialState, "initialState2");

// export default combineReducers({ user: userReducer });
export default userReducer;