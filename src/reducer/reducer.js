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
    },
    medicines: [{
        apiId: "",
        name: "",
        ammount: 0,
        numberForDay: 0,
        numberOf: 0,
        startTakingDate: new Date(),
        SendAReminder: false
    }],

    reminderManagement: {
        userWantReminders: true,
        automaticOscillation: false,
        snooze: 0,
        sound: 0,
        PreTaskReminder: 0
    }
}
console.log(initialState, "initialState1");

const userReducer = (state = initialState, action) => {
    console.log(action, "action");
    switch (action.type) {
        case "LOG_IN":
            return { ...state, user: action.user };
        case "REMINDER_MANAGEMENT":
            return { ...state, reminderManagement: action.reminderManagement };
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

export default userReducer;