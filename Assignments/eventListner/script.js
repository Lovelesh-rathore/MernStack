function on(){
    const bulb = document.getElementById("bulb");
    bulb.style.backgroundColor="yellow";
}

function off(){
    const bulb = document.getElementById("bulb");
    bulb.style.backgroundColor="white";
}

function blue(){
    const bulb = document.getElementById("bulb");
    bulb.style.backgroundColor="blue";
}

function green(){
    const bulb = document.getElementById("bulb");
    bulb.style.backgroundColor="green";
}


const bulb = document.querySelector("#bulb");
const onOff = document.querySelector("#onOff");

onOff.addEventListener("click",()=>{
    bulb.classList.toggle("glow");
})






