const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const  card =document.querySelector(".card")
const modal=document.querySelector(".modal")
const  button1=document.querySelector(" .button1")

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active");
    })
}
 const mode=document.querySelector(".mode");
 const section=document.querySelectorAll(".section");
 const text=document.querySelectorAll(".text");


 mode.addEventListener("click", ()=>{
   section.forEach( (one)=>{
    one.classList.toggle("active")
   })
   text.forEach( (one)=>{
    one.classList.toggle("active")
   })
 })



