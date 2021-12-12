TOKEN=window.location.search;
fetch('http://localhost:8000/user/get_journal'+TOKEN,{
        method: 'GET',
        // body: JSON.stringify({token:TOKEN}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
    // do stuff with responseJSON here...
        console.log(responseJSON);
        createElements(responseJSON);
        // window.location="/home.html?token="+TOKEN;
    });
function createElements(data){
    var main=document.getElementById("main_div");
    main.innerHTML="";
    for (let [key, value] of Object.entries(data)) {
        var para = document.createElement("P");               // Create a <p>   element
        // para.style.border="1px solid black";
        para.style.margin="15px";
        para.style.fontFamily="Gloria Hallelujah";
        para.innerText = key.split(' ')[0]+' - '+value.data;               // Insert text
        main.appendChild(para);  
    }
}
function save(){
    var main=document.getElementById("data");
    var data={};
    for (let [key, value] of Object.entries(main.children)) {
        data[key]=value.innerText;
    }
    console.log(data);
    fetch('http://localhost:8000/user/add_to_journal'+TOKEN+'&data='+main.value,{
        method: 'POST',
        // body: JSON.stringify({token:TOKEN,data:data}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
        // do stuff with responseJSON here...
        console.log(responseJSON);
        document.getElementById('id01').style.display='none'
        main.value="";
        fetch('http://localhost:8000/user/get_journal'+TOKEN,{
        method: 'GET',
        // body: JSON.stringify({token:TOKEN}),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then((response) => response.json())
    .then((responseJSON) => {
    // do stuff with responseJSON here...
        console.log(responseJSON);
        createElements(responseJSON);
        // window.location="/home.html?token="+TOKEN;
    });
        // window.location="/home.html?token="+TOKE N;
    });
}