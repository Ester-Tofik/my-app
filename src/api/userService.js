export const logInByEmailAndPassword = async (id, password) => {
    try {
        debugger
        const url = `http://localhost:3000/user/${id}/${password}`;
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

export const signUpApi = async (id, password, firstName, lastName, phoneNumber, birthDate, email) => {
    let user = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        password: password,
        phoneNumber: phoneNumber,
        email: email,
        birthDate: birthDate
    }
    try {
        const url = `http://localhost:3000/user`;
        const response =await fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data);
        return data;
    }

    catch(err) {
        throw new Error("status Code is:" + err);
    }
}



    export const updateUserDetails = async (id, password, firstName, lastName, phoneNumber, birthDate, email) => {
        const changedUser = {
            firstName: firstName,
            lastName: lastName,
            id: id,
            password: password,
            phoneNumber: phoneNumber,
            birthDate: birthDate,
            email: email
        }
        try {
            debugger
            const _id = `627a3dd78c48dc9a4377a1ef`;
            const url = `http://localhost:3000/user/${_id}`;
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(changedUser)
            });
            const updateUser = response.json();
            console.log(updateUser);
        }
        catch (err) {
            throw new Error("status Code is:" + err);
        }
        // fetch("../api/User/" + JSON.parse(sessionStorage.getItem('currentUser'))._id, {
        //        method: "PUT",
        //        headers: {
        //        'Content-Type': 'application/json'
        //    },
        // body: JSON.stringify(changedUser)
        // }).then((response) => {
        //        if (response.ok) {
        //             sessionStorage.setItem('currentUser', JSON.stringify(changedUser))
        //             alert("your new details is:" + JSON.stringify(changedUser))
        //         }
        //        else { throw new Error("your details isn't update") }
        //     })
    }








