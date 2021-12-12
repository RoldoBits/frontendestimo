TOKEN=window.location.search;
fetch('http://105c-193-144-12-226.ngrok.io/user/get_messages'+TOKEN,{
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
        para.id=key;
        ids.push(key);
        para.value = value.data;               // Insert text
        main.appendChild(para);  
    }
}
var ids = [];
function add(){
    var main=document.getElementById("main_div");
    
}
function saveAll(){
    for(var i=0;i<ids.length;i++){
        var id=ids[i];
        save(id);
    }
}
function save(id){
    fetch('http://105c-193-144-12-226.ngrok.io/user/edit_message'+TOKEN+'&id='+id+'&message='+document.getElementById(id).value,{
        method: 'POST',
        // body: JSON.stringify({token:TOKEN,data:document.getElementById(id).value,id:id}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
        console.log(responseJSON);
        // createElements(responseJSON);
    });
}