const hamburg = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar ul");
hamburg.addEventListener("click", ()=>{
    hamburg.classList.toggle("on");
    navbar.classList.toggle("on");
})