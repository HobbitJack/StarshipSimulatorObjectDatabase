import Gitrows from "./gitrows";

const gitrows = new Gitrows({ "strict": true })

var formData = new FormData(document.querySelector("DBSetup"));

var fileid = FormData.get("algtable") + FormData.get("objtype")

let data = gitrows.get("@github/hobbitjack/StarshipSimulatorObjectDatabase/" + fileid + ".csv")

let table = document.querySelector("gentable")
let thead = table.createTHead();
let row = thead.insertRow();

for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
    }
}

for (let key of Object.keys(data[0])) {
    let th = document.createElement("th");
    th.appendChild(document.createTextNode(key));
    row.appendChild(th);
}