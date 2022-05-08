
export const logInByEmailAndPassword = (id, password) => {
    const url=`http://localhost:3000/user/${id}/${password}`
    fetch(url)
        .then(response => {
            if (response.text = 'ok') {
                console.log("return sucssesfully");
            }
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("status Code is:" + response.status);
            }
        })
        .then(data => {
            console.log(data);
        })
}

export const signUpApi = (id, password, firstName, lastName, phoneNumber, birthDate, email) => {
    let user= {
        firstName : firstName,
        lastName : lastName,
        id : id,
        password:password,
        phoneNumber:phoneNumber,
        email:email,
        birthDate:birthDate
    }
    const url=`http://localhost:3000/user`;
    debugger
    fetch(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then(response => {
            if (response.text = 'ok') {
                console.log("return sucssesfully");
            }
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("status Code is:" + response.status);
            }
        })
        .then(data => {
            console.log(data);
        })
}