export default async function getMedicinesFromApi() {
    try {
        debugger
        const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=69d10416-680b-4bc9-900a-62dd9e82430c";
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
