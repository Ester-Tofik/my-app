
export default async function saveReminderManageMentFetch(_id, userWantReminders, automaticOscillation, snooze,
    sound, PreTaskReminder, props) {
        debugger
    let reminder = {
        userWantReminders: userWantReminders.checkedB,
        automaticOscillation: automaticOscillation,
        snooze: snooze,
        sound: sound,
        PreTaskReminder: PreTaskReminder
    }
        try {
            //const _id = `627aa35eb7ccf573d3151620`;
            const url = `http://localhost:3000/reminder/${_id}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reminder)
            });
            const updateUser = response.json();
            console.log(updateUser);
            return updateUser;
        }
        catch (err) {
            throw new Error("status Code is:" + err);
        }
    }

