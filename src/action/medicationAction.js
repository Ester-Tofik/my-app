const MEDICINES = "MEDICINES";


export default function medicinesAction(response) {
    console.log(response)
    let usermedicines = {
        apiId: response.apiId,
        name: response.name,
        daysInWeek: response.daysInWeek,
        numberForDay: response.numberForDay,
        times:response.times,
        ammountOfPills: response.ammountOfPills,
        SendAReminderForPacket: response.SendAReminderForPacket,
        pillsInPacket: response.pillsInPacket,
        SendAReminder: response.SendAReminder
    }
    return {
        type: MEDICINES,
        response
    }
}