/*=====================================================
    IRONCORE FITNESS
    JAVASCRIPT PART 1
=====================================================*/


/*=====================================================
    MOBILE MENU
=====================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/*=====================================================
    CLOSE MENU AFTER CLICKING A LINK
=====================================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/*=====================================================
    STICKY NAVBAR
=====================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,5,5,.96)";
        navbar.style.padding = "16px 8%";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    }

    else {

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.padding = "22px 8%";
        navbar.style.boxShadow = "none";

    }

});


/*=====================================================
    ACTIVE NAVIGATION LINK
=====================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});/*=====================================================
    HERO BACKGROUND IMAGE SLIDER
=====================================================*/
const hero = document.querySelector(".hero");
const heroImages = [
    "images/hero1.jfif",
    "images/hero2.jfif",
    "images/hero3.jfif",
    "images/hero4.jfif"
];
let currentImage = 0;
function changeHeroImage() {

    currentImage++;

    if(currentImage >= heroImages.length){

        currentImage = 0;

    }

    hero.style.backgroundImage =

    `url(${heroImages[currentImage]})`;

}

setInterval(changeHeroImage,4000);


/*=====================================================
    SCROLL REVEAL ANIMATION
=====================================================*/

const revealElements = document.querySelectorAll(

".about, .programs, .gallery, .plans, .contact, .stat-box, .program-card, .plan-card"

);

const revealOnScroll = () => {

    const triggerPoint = window.innerHeight * 0.85;

    revealElements.forEach(element=>{

        const top = element.getBoundingClientRect().top;

        if(top < triggerPoint){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);/*=====================================================
    CONTACT FORM VALIDATION
=====================================================*/

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const phone = form.querySelector('input[type="tel"]');
    const message = form.querySelector("textarea");

    if(
        name.value.trim()==="" ||
        email.value.trim()==="" ||
        phone.value.trim()==="" ||
        message.value.trim()===""
    ){

        alert("Please fill in all the fields.");

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){

        alert("Please enter a valid email address.");

        return;

    }

    alert("🎉 Thank you for contacting IRONCORE FITNESS!");

    form.reset();

});


/*=====================================================
    ANIMATED STATS COUNTER
=====================================================*/

const counters=document.querySelectorAll(".stat-box h3");

let counterStarted=false;

function runCounter(){

    if(counterStarted) return;

    const about=document.querySelector(".about");

    const trigger=about.getBoundingClientRect().top;

    if(trigger<window.innerHeight-100){

        counterStarted=true;

        counters.forEach(counter=>{

            const text=counter.innerText;

            const target=parseInt(text.replace(/\D/g,""));

            const suffix=text.replace(/[0-9]/g,"");

            let count=0;

            const speed=Math.ceil(target/80);

            const update=()=>{

                count+=speed;

                if(count>=target){

                    counter.innerText=target+suffix;

                }

                else{

                    counter.innerText=count+suffix;

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll",runCounter);


/*=====================================================
    HERO BUTTONS
=====================================================*/

const joinBtn=document.querySelector(".hero-buttons button");

joinBtn.addEventListener("click",()=>{

    document.querySelector("#plans").scrollIntoView({

        behavior:"smooth"

    });

});

const exploreBtn=document.querySelector(".secondary-btn");

exploreBtn.addEventListener("click",()=>{

    document.querySelector("#programs").scrollIntoView({

        behavior:"smooth"

    });

});


/*=====================================================
    SCROLL TO TOP BUTTON
=====================================================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show-top");

    }

    else{

        topBtn.classList.remove("show-top");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=====================================================
    CONSOLE MESSAGE
=====================================================*/

console.log("%c🏋️ Welcome to IRONCORE FITNESS",
"color:#00ff88;font-size:18px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:14px;");