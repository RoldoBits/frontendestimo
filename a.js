var urlOne = 'http://localhost:8000/'

//Connect to an api and get the data
function getData() {
    const response = await fetch(urlOne)
    const data = await response.json()
}
// Fetches the data from the api and returns it
function getData() {
    fetch(urlOne)
        .then(response => response.json())
        .then(data => console.log(data))
}

function request(){
    fetch(urlOne).then(function(response) {
        console.log(response);
        alert(response);
        });
}

// Create all petitions to the api Api.py
function createPetition(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

// Petition for get("/") to the api Api.py
function get() {
    return createPetition(urlOne, data)
}

// Petition for post("/user/register") to the api Api.py
function register(user) {
    return createPetition(urlOne + 'user/register', user)
}

// Petition for post("/user/login") to the api Api.py
function login(username, password) {
    return createPetition(urlOne + 'user/login', {username: username, password: password})
}

// Petition for post("/user/send_message") to the api Api.py
function send_message(user_email, message, token) {
    return createPetition(urlOne + 'user/send_message', {user_email: user_email, message: message, token: token})
}

// Petition for get("/user/get_messages") to the api Api.py
function get_messages(user_email, token) {
    return createPetition(urlOne + 'user/get_messages', {user_email: user_email, token: token})
}

// Petition for get("/user/add_to_journal") to the api Api.py
function add_to_journal(user_email, journal_data, token) {
    return createPetition(urlOne + 'user/add_to_journal', {user_email: user_email, journal_data: journal_data, token: token})
}

// Petition for get("/user/get_journal") to the api Api.py
function get_journal(user_email, token) {
    return createPetition(urlOne + 'user/get_journal', {user_email: user_email, token: token})
}

// Petition for get("/user/destroy_token") to the api Api.py
function destroy_token(token) {
    return createPetition(urlOne + 'user/destroy_token', {token: token})
}

// Petition for websocket("/emotion") to the api Api.py
function websocket(websocket, token) {
    return createPetition(urlOne + 'emotion', {websocket: websocket, token: token})
}