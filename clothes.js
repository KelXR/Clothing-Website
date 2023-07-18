const hamburg = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar ul");
hamburg.addEventListener("click", ()=>{
    hamburg.classList.toggle("on");
    navbar.classList.toggle("on");
})

const sideButton = document.querySelector(".sideButton");
const sideBar = document.querySelector(".sideBar");
sideButton.addEventListener("click", ()=>{
    sideButton.classList.toggle("on");
    sideBar.classList.toggle("on");
})