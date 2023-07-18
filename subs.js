const hamburg = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar ul");

hamburg.addEventListener("click", ()=>{
    hamburg.classList.toggle("on");
    navbar.classList.toggle("on");
})

// main function
// complete all by value of 1 so can submit
let x = 0, y = 0, a=0, b=0

//validate name
const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;

const tagName = document.querySelector("#name");

tagName.addEventListener("input", ()=>{
    if(!tagName.value || tagName.value.length == 0 || tagName.value.trim().length == 0 || specialChar.test(tagName.value)){
        document.getElementById("WarnName").style.display="block";
        x=0;
    }else{
        document.getElementById("WarnName").style.display="none";
        x=1;
        console.log(x);
    }
}
)

//validate email
const tagEmail = document.querySelector("#Email");

function emailVal(emVal){
    var emVal = document.getElementById("Email").value;
    // regular expression
    var validate = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.(com)$/
    if(validate.test(emVal)){
        return true
    }
    return false
}

tagEmail.addEventListener("input", ()=>{
    if(!emailVal()){
        document.getElementById("warnEmail").style.display="block";
        y=0;
    }else{
        document.getElementById("warnEmail").style.display="none";
        y=1;
    }
}
)

//validate phone number

const tagPN = document.querySelector("#Phone");

tagPN.addEventListener("input", ()=>{
    var PNval = tagPN.value;
    var regular = /^([\+]\d+)$/;
    if(regular.test(PNval) && PNval.length <=14){
        document.getElementById("warnPN").style.display="none";
        a=1;
    }else{
        document.getElementById("warnPN").style.display="block";
        a=0;
    }
}
)

const tagCheck = document.querySelector("#Check");

tagCheck.addEventListener("click", ()=>{
    if(tagCheck.checked){
        document.getElementById("warnCheck").style.display="none";
        b=1;
    }else{
        document.getElementById("warnCheck").style.display="block";
        b=0;
    }
}
)

function mainFN(){
    if(x==0){
        alert("Please input your name");
        return;
    }else if(y==0){
        alert("Please input your email");
        return;
    }else if(a==0){
        alert("Please input your phone number");
        return;
    }else if(b==0){
        alert("Please check our T&C");
        return;
    }else{
        alert('Thank you for your subscription! We will send you latest news and information about M & T.');
    }
}

