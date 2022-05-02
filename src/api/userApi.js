
export const logInByEmailAndPassword = (id, password) => {
    debugger;
    fetch(`http://localhost:3000/user?id=${id}&password=${password}`)
        .then(response => {
            if (response.status == 204) {
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