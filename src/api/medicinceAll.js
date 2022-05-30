// export default async function getAllMedicinesForUser(_id) {
//     try {
//         debugger;
//         const url = `http://localhost:3000/medicines/${_id}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         // const data = ["a", "b", "c", "d", "e"];
//         console.log("return sucssesfully");
//         console.log(data);
//         return data;
//     }
//     catch (err) {
//         throw new Error("status Code is:" + err);
//     }
// }

export const getAllMedicinesForUser = async (_id) => {
    try {
        debugger;
        const url = `http://localhost:3000/medicines/${_id}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error("status Code is:" + err);
    }
}

export const saveMedicinesFach = async (_id, apiId, name, daysInWeek, numberForDay,timesChanges, ammountOfPills,SendAReminderForPacket, pillsInPacket,SendAReminder ) => {
    debugger    
    let medicine = {
        apiId: apiId,
        name: name,
        daysInWeek: daysInWeek,
        numberForDay: numberForDay,
        times:timesChanges,
        ammountOfPills: ammountOfPills,
        SendAReminderForPacket: SendAReminderForPacket,
        pillsInPacket: pillsInPacket,
        SendAReminder: SendAReminder
    }
    try {
        const url = `http://localhost:3000/medicines/${_id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        const updateMedicinesUser = response.json();
        console.log(updateMedicinesUser);
        return updateMedicinesUser;
    }
    catch (err) {
        throw new Error("status Code is:" + err);
    }
}


// export async function saveMedicinesFach(_id, apiId, name, daysInWeek, numberForDay,times, ammountOfPills,SendAReminderForPacket, pillsInPacket,SendAReminder ) {
//     debugger    
//     let medicine = {
//         apiId: apiId,
//         name: name,
//         daysInWeek: daysInWeek,
//         numberForDay: numberForDay,
//         times:times,
//         ammountOfPills: ammountOfPills,
//         SendAReminderForPacket: SendAReminderForPacket,
//         pillsInPacket: pillsInPacket,
//         SendAReminder: SendAReminder
//     }
//     try {
//         const url = `http://localhost:3000/reminder/${_id}`;
//         const response = await fetch(url, {
//             method: "PUT",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(medicine)
//         });
//         const updateMedicinesUser = response.json();
//         console.log(updateMedicinesUser);
//         return updateMedicinesUser;
//     }
//     catch (err) {
//         throw new Error("status Code is:" + err);
//     }
// }