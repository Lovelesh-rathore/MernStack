// function on(){
//     const bulb = document.getElementById("bulb");
//     bulb.style.backgroundColor="yellow";
// }

// function off(){
//     const bulb = document.getElementById("bulb");
//     bulb.style.backgroundColor="white";
// }

// function blue(){
//     const bulb = document.getElementById("bulb");
//     bulb.style.backgroundColor="blue";
// }

// function green(){
//     const bulb = document.getElementById("bulb");
//     bulb.style.backgroundColor="green";
// }

// function bulbOnOff(){
//     const bulb = document.getElementById("bulb");
//     bulb.classList.toggle("glow");
// }

const bulb = document.querySelector("#bulb");
const onOff = document.querySelector("#onOff");

onOff.addEventListener("click",()=>{
    bulb.classList.toggle("glow");
})



// const bulb = document.querySelector("#bulb");
// const yellow = document.querySelector("#yellow");

// bulb.addEventListener("click" , ()=>{

// });





