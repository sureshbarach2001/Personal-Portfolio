let arr=["hi","bye","what","olay"];
let v1=document.getElementById("pointer");
window.addEventListener(`mousemove`, function(e){
    let potX=e.pageX;
    let potY=e.pageY;
    v1.style.top=`${potY-18.5}px`;
    v1.style.left=`${potX-18.5}px`;
});

function show(tt){
    let v1=document.getElementById("text-2");
    let v2=v1.childNodes[0]; 
    v2.nodeValue=tt; 

}

function show1(){
    let v1=document.getElementById("text-2");
    let v2=v1.childNodes[0]; 
    v2.nodeValue=``; 
    
}
