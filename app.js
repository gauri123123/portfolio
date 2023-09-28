var hamberger= document.querySelector(".hamb");
var navlist=document.querySelector(".nav-list");
var links= document.querySelector(".nav-list li");

hamburger.addEventListener("click",function(){
    this.classList.toggel("click");
    navlist.classList.toggel("open");
})