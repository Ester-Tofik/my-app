async function getMedicinesRepFromApi1() {
    try {
        const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=69d10416-680b-4bc9-900a-62dd9e82430c&limit=600";
        // const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=f40d2fa0-4082-43be-b029-4872d81c8251&limit=1000";
        const response = await fetch(url);
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data.result.records);
        return data.result.records;
    }
    catch (err) {
        throw new console.error(err);
    }
}
async function getMedicinesFromApi2() {

    try {
        const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=69d10416-680b-4bc9-900a-62dd9e82430c&limit=600";
        const response = await fetch(url);
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data.result.records);
        return data.result.records;
    }
    catch (err) {
        throw new console.error(err);
    }
}
export default async function getMedicinesRepFromApi() {
    const values = await Promise.all([
        getMedicinesRepFromApi1(),
        getMedicinesFromApi2()
    ])
    return [...values[0], ...values[1]]

}

async function saveMedicinesFach(_id, apiId, name, daysInWeek, numberForDay,times, ammountOfPills,SendAReminderForPacket, pillsInPacket,SendAReminder ) {
    let medicine = {
        apiId: apiId,
        name: name,
        daysInWeek: daysInWeek,
        numberForDay: numberForDay,
        times:times,
        ammountOfPills: ammountOfPills,
        SendAReminderForPacket: SendAReminderForPacket,
        pillsInPacket: pillsInPacket,
        SendAReminder: SendAReminder
    }
    try {
        const url = `http://localhost:3000/reminder/${_id}`;
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
