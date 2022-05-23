export default async function getAllMedicinesForUser(_id) {
    try {
        // const url = `http://localhost:3000/medicines/${_id}`;
        // const response = await fetch(url);
        // const data = await response.json();
        debugger
        const data = ["a", "b", "c", "d", "e"];
        console.log("return sucssesfully");
        console.log(data);
        return data;
    }
    catch (err) {
        throw new Error("status Code is:" + err);
    }
}