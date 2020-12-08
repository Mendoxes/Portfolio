'use strict';
let fP = document.querySelector(".first__paragraph");
let myName = document.querySelector(".myName");
let i ;
const newOrder = ["a" , "b", "c" , "d", "e", "f", "g" , "h"];
let zxz ;
setTimeout(function () {document.querySelector(".section__1").classList.add("bgSize");},200);

setTimeout(function () {document.querySelector(".navbar").classList.remove("opacity");},100);
setTimeout(function () {document.querySelector(".jumbotron").classList.remove("opacity");},200);
setTimeout(function () {document.querySelector(".display-4").classList.remove("opacity");},600);

setTimeout(function () {document.querySelector(".myName").classList.remove("opacity");},1300);
setTimeout(function () {document.querySelector(".first__paragraph").classList.remove("opacity");},
1700);


window.addEventListener("scroll",mainfunk1);

function mainfunk1(){
for ( i = 0; i < 7; i++){


    // setTimeout(function () {document.querySelector(".section__1").classList.add("bgSize2");},200);

    // console.log(i);
    // console.log(newOrder[i]);

   
        
        let hImg = document.querySelector(".html__img-"+newOrder[i]).getBoundingClientRect().top;
        if (hImg < 860){

           let il = i+1;

            let wid = (80 -i*10) + "%";
    console.log(wid);
    document.querySelector(".html__img-"+newOrder[i]).innerHTML = wid;
        document.querySelector(".html__img-"+newOrder[i]).style.width = wid;
        document.querySelector(".progress_"+i).style.backgroundColor = "#637382";
        document.querySelector(".progress_"+il).style.backgroundColor = "#637382";
        // console.log(hImg);
  
    }
    
    else {     document.querySelector(".html__img-"+newOrder[i]).style.width = "0%";


    // document.querySelectorAll(".progress").style.backgroundColor = "initial";
}
    




    
    }}




    window.addEventListener("scroll", scrollfunk); 

    function scrollfunk() 
    
    {

        let hImg = document.querySelector(".html__img").getBoundingClientRect().top;
        if (hImg < 860){
    
        document.querySelector(".html-bar").style.width = "80%";
        console.log(hImg);
    }
    
    else {     document.querySelector(".html-bar").style.width = "0%";}
    
    }




window.addEventListener("scroll", scrollfunk); 

function scrollfunk() 

{
    
    let hImg = document.querySelector(".html__img").getBoundingClientRect().top;
    if (hImg < 860){

    document.querySelector(".html-bar").style.width = "80%";
    // console.log(hImg);
}

else {     document.querySelector(".html-bar").style.width = "0%";}

}









myfunk(); 

function myfunk(){
    setTimeout(function () {document.querySelector(".anima").classList.add("opacity");},11000);
setTimeout(function () {document.querySelector(".display-4").innerHTML="How is your day today?";},12500);
setTimeout(function () {fP.innerHTML=": ) ";},12500);
setTimeout(function () {myName.innerHTML="I hope you are having lots of fun during your visit";},12500);
setTimeout(function() {document.querySelector(".btn-change").classList.remove("btn-outline-dark");},12500);
setTimeout(function() {document.querySelector(".btn-change").classList.add("btn-outline-light");},12500);
setTimeout(function () {document.querySelector(".anima").classList.remove("opacity");},12500);

setTimeout(function () {document.querySelector(".anima").classList.add("opacity");},35600);
setTimeout(function () {document.querySelector(".display-4").innerHTML="Hello World";},37000);
setTimeout(function () {fP.innerHTML="  I am an aspiring junior front end developer";},37000);
setTimeout(function () {myName.innerHTML="My name is Sebastian Lewy";},37000);

setTimeout(function() {document.querySelector(".btn-change").classList.add("btn-outline-dark");},37000);
setTimeout(function() {document.querySelector(".btn-change").classList.remove("btn-outline-light");},37000);
setTimeout(function () {document.querySelector(".anima").classList.remove("opacity");},37000);

setTimeout(function () {myfunk();},60000);

}
;

document.querySelector(".btn-change").addEventListener("click" , function() { document.querySelector(".html-bar").style.width = "50%"})
document.querySelector(".btn-change").addEventListener("click" , function() { document.querySelector(".html__img-a").style.width = "30%"})
document.querySelector(".btn-change").addEventListener("click" , function() { document.querySelector(".html__img-b").style.width = "80%"})
document.querySelector(".btn-change").addEventListener("click" , function() { document.querySelector(".html__img-c").style.width = "70%"})
document.querySelector(".btn-change").addEventListener("click" , function() { document.querySelector(".html__img-d").style.width = "10%"})





    $(".pop").popover();







   window.addEventListener("scroll", mainScrollEvent);

   function mainScrollEvent(){

    let xxz = (document.body.getBoundingClientRect().bottom)/9; 
   zxz = ((document.body.getBoundingClientRect().top) * (-1))/ 3 ;
   console.log(zxz);
   console.log("xxz" + xxz);
//    console.log("bottom" + xxz);
    if (zxz > 100) {document.querySelector(".section__1").classList.add("bgSize2")};
//  if (xxz > 100) {document.querySelector(".section__1").style.backgroundSize = xxz + "%";}


 if (xxz > 290){ document.querySelector("#codingS").style.color = "#26125f"}
 else { document.querySelector("#codingS").style.color = "#c27778"}

   }