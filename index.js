function go() {
    TOKEN=""
    var d_email = document.getElementById("email").value;
    var d_password = document.getElementById("password").value;
    var data = {
        email: d_email,
        password: d_password
    };
    fetch('http://localhost:8000/user/login',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
    // do stuff with responseJSON here...
        TOKEN=responseJSON;
        if(TOKEN==false){
            console.log("error");
            return;
        }
        console.log(responseJSON);
        window.location="/home.html?token="+TOKEN;
    });
}