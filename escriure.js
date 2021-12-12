TOKEN=window.location.search;
fetch('http://localhost:8000/user/get_messages'+TOKEN,{
        method: 'GET',
        // body: JSON.stringify({token:TOKEN}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
        console.log(responseJSON);
        createElements(responseJSON);
    });
function createElements(data){
    var main=document.getElementById("main_div");
    
    for (let [key, value] of Object.entries(data)) {
        var para = document.createElement("input");               // Create a <p>   element
        para.style.border="1px solid black";
        para.style.margin="15px";
        para.style.width="80%";
        para.style.background= "transparent";
        para.value = value.data;               // Insert text
        main.appendChild(para);  
    }
}
