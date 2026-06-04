// ==========================
// DURGADEVI INFRA & INTERIORS
// COMPLETE SCRIPT.JS
// ==========================

// ==========================
// HEADER BACKGROUND CHANGE
// ==========================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 100) {

            header.style.background = "#02152d";

        } else {

            header.style.background = "rgba(0,0,0,0.6)";

        }

    }

});

// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements =
document.querySelectorAll(".service-card, .project-card");

hiddenElements.forEach((el) => observer.observe(el));

// ==========================
// SERVICE CARD ANIMATION
// ==========================

const cards = document.querySelectorAll('.service-card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if (position < screen - 100) {

            card.classList.add('show');

        }

    });

});

// ==========================
// ANIMATED COUNTERS
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText =
            `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// ==========================
// DURGADEVI INFRA & INTERIORS
// LOGIN & REGISTER SCRIPT
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    // REGISTER PAGE

    const registerForm =
    document.getElementById("registerForm");

    if(registerForm){

        registerForm.addEventListener("submit", (e)=>{

            e.preventDefault();

            const name =
            document.getElementById("regName").value;

            const email =
            document.getElementById("regEmail").value;

            const password =
            document.getElementById("regPassword").value;

            localStorage.setItem("userName", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("Registration Successful");

            window.location.href = "login.html";

        });

    }

    // LOGIN PAGE

    const loginForm =
    document.getElementById("loginForm");

    if(loginForm){

        loginForm.addEventListener("submit", (e)=>{

            e.preventDefault();

            const email =
            document.getElementById("loginEmail").value;

            const password =
            document.getElementById("loginPassword").value;

            const savedEmail =
            localStorage.getItem("email");

            const savedPassword =
            localStorage.getItem("password");

            console.log("Entered Email:", email);
            console.log("Saved Email:", savedEmail);

            console.log("Entered Password:", password);
            console.log("Saved Password:", savedPassword);

            if(
                email === savedEmail &&
                password === savedPassword
            ){

                alert("Login Successful");

                window.location.href = "index.html";

            }else{

                alert("Invalid Email or Password");

            }

        });

    }

}); 

// ==========================
// LOGOUT FUNCTION
// ==========================

function logoutUser() {

    localStorage.removeItem("email");

    localStorage.removeItem("password");

    localStorage.removeItem("userName");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}

// PROJECT SLIDER

let currentSlide = 0;

function moveSlide(direction){

const slides =
document.querySelector('.slides');

if(!slides) return;

const totalSlides =
document.querySelectorAll('.slides img').length;

currentSlide += direction;

if(currentSlide < 0){
currentSlide = totalSlides - 1;
}

if(currentSlide >= totalSlides){
currentSlide = 0;
}

slides.style.transform =
`translateX(-${currentSlide * 100}%)`;

}

// AUTO SLIDE

setInterval(() => {

if(document.querySelector('.slides')){
moveSlide(1);
}

}, 4000);

// ==========================
// WELCOME MESSAGE
// ==========================

window.onload = function () {

    console.log(
        "Welcome to Durgadevi Infra & Interiors"
    );

};