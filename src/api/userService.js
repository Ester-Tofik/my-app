export const logInByEmailAndPassword = async (id, password) => {
    try {
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
        const response = await fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(user)
        });
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data);
        return data;
    }

    catch (err) {
        throw new Error("status Code is:" + err);
    }
}


export const updateUserDetails = async (id, password, firstName, lastName, phoneNumber, birthDate, email, _id) => {
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
        return updateUser;
    }

    catch (err) {
        throw new Error("status Code is:" + err);
    }

}
