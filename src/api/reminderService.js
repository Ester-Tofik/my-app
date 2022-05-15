
export async function saveReminderManageMentFetch(_id, userWantReminders, automaticOscillation, snooze,
    sound, PreTaskReminder, props) {
        debugger
    let reminder = {
        userWantReminders: userWantReminders,
        automaticOscillation: automaticOscillation,
        snooze: snooze,
        sound: sound,
        PreTaskReminder: PreTaskReminder
    }
        try {
            // const _id = `627a3dd78c48dc9a4377a1ef`;
            const url = `http://localhost:3000/reminder/${props.user._id}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reminder)
            });
            const updateUser = response.json();
            console.log(updateUser);
        }
        catch (err) {
            throw new Error("status Code is:" + err);
        }
    }

