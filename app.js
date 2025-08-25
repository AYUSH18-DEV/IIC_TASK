let toggle=document.querySelector(".dark");
let mode=false;
toggle.addEventListener("click",()=>{
    if(mode){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    mode=!mode;
})