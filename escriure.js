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
        para.id=key;
        ids.push(key);
        para.value = value.data;               // Insert text
        main.appendChild(para);  
    }
}
var ids = [];
function add(){
    var main=document.getElementById("main_div");
    var para = document.createElement("input");               // Create a <p>   element
    para.style.border="1px solid black";
    para.style.margin="15px";
    para.style.width="80%";
    para.style.fontFamily="Gloria Hallelujah";
    para.style.background= "transparent";
    para.id="adding";             // Insert text
    main.appendChild(para);
}
function saveAll(){
    add_api("adding");
    for(var i=0;i<ids.length;i++){
        var id=ids[i];
        save(id);
    }
}
function save(id){
    fetch('http://localhost:8000/user/edit_message'+TOKEN+'&id='+id+'&message='+document.getElementById(id).value,{
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
function add_api(id){
    fetch('http://localhost:8000/user/add_message'+TOKEN+'&message='+document.getElementById(id).value,{
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