// alert("Welcome to my website")
// document.getElementsByClassName("name")[1].style.cssText="background-color:blue ; font-size:20px ; color:white";
// document.getElementsByClassName("name")[1].innerHTML="Hello World";

document.getElementsByTagName("h1")[1].style.cssText="background-color: blue; color: white; font-size: 30px; text-align: center";
document.getElementsByTagName("h1")[1].innerHTML="Hello People";
var select = document.getElementsByClassName("name")
for ( var i = 0; i <= select.length; i++){
    select[i].innerHTML="Hello World";
    select[i].style.cssText="background-color: #696969 ; color: white";
}
