
export const deleteOneMedicineDromDB = async (userId, medicineId) => {
    try {
        debugger
        const url = `http://localhost:3000/medicines/${userId}/${medicineId}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(medicineId)
        });
        const updateMedicinesUser = await response.json();
        console.log(updateMedicinesUser);
        return updateMedicinesUser;
    }
    catch (err) {
        throw new Error("status Code is:" + err);
    }
}

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

export const apdateMedicineDetils = async ( _id,_idm ,apiId, name, daysInWeek, numberForDay,timesChanges, ammountOfPills,SendAReminderForPacket, pillsInPacket,SendAReminder)=> {
    debugger    
    let medicine = {
        _id: _id,
        _idm: _idm,
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
 