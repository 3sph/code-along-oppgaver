// Model
const app = document.getElementById('app');
let census = [];
let inputInfo = {
    name: '',
    age: ''
}

// View
updateHtml();

function updateHtml() {
    let html = /*HTML*/ `
    <button onclick="visUnder18()">Over 18</button>
    <button onclick="visOver18()">Under 18</button>
    <input id="navn" onchange="addName(this.value)" type="text" placeholder="Name">
    <input id="alder" onchange="addAge(this.value)" type="number" placeholder="Age">
    <button onclick="submit()">Submit</button>
    <div id="registered"></div>
    <div id="results"></div>
    `;
    app.innerHTML = html;
}

// Controller
function addName(name) {
    inputInfo.name = name;
}

function addAge(age) {
    inputInfo.age = age;
}

function submit() {
    census.push(inputInfo);
    inputInfo = { name: '', age: '' };
    console.log(census)
    document.getElementById("navn").value = "";
    document.getElementById("alder").value = "";
    displayRegistered();
}

function visUnder18() {
    const under18 = [];
    for (let i = 0; i < census.length; i++) {
        if (census[i].age < 18) {
            under18.push(census[i].name + ' - ' + census[i].age);
        }
    }
    displayResults(under18);
}

function visOver18() {
    const over18 = [];
    for (let i = 0; i < census.length; i++) {
        if (census[i].age >= 18) {
            over18.push(census[i].name + ' - ' + census[i].age);
        }
    }
    displayResults(over18);
}

function displayRegistered() {
    let registeredHtml = '<h3>Registered People:</h3>';
    for (let i = 0; i < census.length; i++) {
        registeredHtml += `${census[i].name} - ${census[i].age}<br>`;
    }
    document.getElementById('registered').innerHTML = registeredHtml;
}

function displayResults(results) {
    let resultsHtml = '<h3>Results:</h3>';
    if (results.length === 0) {
        resultsHtml += 'No results found';
    } else {
        for (let i = 0; i < results.length; i++) {
            resultsHtml += `${results[i]}<br>`;
        }
    }
    document.getElementById('results').innerHTML = resultsHtml;
}
/*
Gjør det mulig å registrere seg med fornavn og alder, og lagre dette hensiktsmessig. 
Det skal lagres flere personobjekter.
Lag to knapper - en det står “under 18” på og en det står “over 18” på. Når du trykker på 
“under 18” knappen skal de registrerte personene som er under 18 vises på skjermen, og tilsvarende med den andre knappen.
: check [y]

Ting som du kan øve litt på ;) 
- Lister av objekter 
- Loope (for loop) igjennom listen med objekter og bruke if per element
- Vise frem det som dukker opp
check [y]
*/