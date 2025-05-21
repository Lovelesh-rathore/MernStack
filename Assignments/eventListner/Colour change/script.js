const cgnHeading = document.querySelector("#cgn-heading");
const cgnBackground = document.querySelector("#cgn-background");
const cgnPara = document.querySelector("#cgn-para");

const boxBg = document.querySelector(".box-container");
const heading = document.querySelector(".heading");
const para = document.querySelector(".para");

const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const color3 = document.querySelector("#color3");

cgnHeading.addEventListener("change", cgnHeadingClr);
cgnBackground.addEventListener("change", cgnBackgroundClr);
cgnPara.addEventListener("change", cgnParaClr);

function cgnHeadingClr(){
    heading.style.color = cgnHeading.value;
}

function cgnBackgroundClr(){
    boxBg.style.backgroundColor = cgnBackground.value;
}

function cgnParaClr(){
    para.style.color = cgnPara.value;
}

color1.addEventListener("mouseover" , cgnClr1);
color1.addEventListener("mouseleave" , noclr);

color2.addEventListener("mouseover" , cgnClr2);
color2.addEventListener("mouseleave" , noclr);

color3.addEventListener("mouseover" , cgnClr3);
color3.addEventListener("mouseleave" , noclr);


function cgnClr1(){
    boxBg.style.backgroundColor= "antiquewhite";
}

function cgnClr2(){
    boxBg.style.backgroundColor= "aliceblue";
}

function cgnClr3(){
    boxBg.style.backgroundColor= "beige";
}

function noclr(){
    boxBg.style.backgroundColor= "white";
}