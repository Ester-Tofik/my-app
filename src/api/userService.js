
export const logInByEmailAndPassword = (id, password) => {
    debugger;
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
