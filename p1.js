var o1=document.getElementById("o1");
var o2=document.getElementById("o2");
var o3=document.getElementById("o3");
var pregunta=document.getElementById("pregunta");
var q=1;
quest2="Quant temps li dediques a les activitats que t’agraden?";
o21="poc";
o22="suficient";
o23="molt";
quest3="Creus que assoleixes els objectius que et proposes en el dia a dia?";
o31="no me'n proposo";
o32="no els assoleixo";
o33="si, faig tot el possible";
const emo_div = document.querySelector("#emotion");
CY.loader()
   .licenseKey("fec60966d902b0c9cd847621a4cc199a0ecad62b98e9")
   .addModule(CY.modules().FACE_AGE.name)
   .addModule(CY.modules().FACE_GENDER.name)
   .addModule(CY.modules().FACE_EMOTION.name)
   .addModule(CY.modules().FACE_WISH.name)
   .load()
   .then(({ start, stop }) => start());
window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
    emo_div.innerHTML = 'Emotion: ' + evt.detail.output.dominantEmotion;
});
console.log(CY.modules());
o1.onclick=function(){
    changeQuestion();
}
o2.onclick=function(){
    changeQuestion();
}
o3.onclick=function(){
    changeQuestion();
}
function changeQuestion(){
    if (q==1){
        pregunta.innerHTML=quest2;
        o1.innerHTML=o21;
        o2.innerHTML=o22;
        o3.innerHTML=o23;
    }else if (q==2){
        pregunta.innerHTML=quest3;
        o1.innerHTML=o31;
        o2.innerHTML=o32;
        o3.innerHTML=o33;
    }
    else{
        window.location="/quepotsfer.html"+window.location.search;;
    }
    q++;
}