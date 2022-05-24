const MEDICINES = "MEDICINES";


export default function medicinesAction(response) {
    debugger
    console.log(response)
    let usermedicines = [{
        firstName: response.firstName,
        lastName: response.lastName,
        id: response.id,
        email: response.email,
        password: response.password,
        phoneNumber: response.phoneNumber,
        birthDate: response.birthDate,
        _id: response._id
    },
    {
        apiId: response.apiId,
        name: response.name,
        daysInWeek: response.daysInWeek,
        numberForDay: response.numberForDay,
        times:response.times,
        ammountOfPills: response.ammountOfPills,
        SendAReminderForPacket: response.SendAReminderForPacket,
        pillsInPacket: response.pillsInPacket,
        SendAReminder: response.SendAReminder
    }]
    return {
        type: MEDICINES,
        usermedicines
    }
}