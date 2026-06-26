/* ==========================================================
   PORTFOLIO V3 ANIMATIONS
========================================================== */

/* ==========================================
   REVEAL ON SCROLL
========================================== */

const revealElements = document.querySelectorAll(

    ".section-heading,.featured-project,.about-container,.stack-category,.project,.timeline-item,.contact-container"

);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(el=>{

    el.classList.add("reveal");

    observer.observe(el);

});


/* ==========================================
   STAGGER PROJECTS
========================================== */

document.querySelectorAll(".project").forEach((card,index)=>{

    card.style.transitionDelay=`${index*120}ms`;

});


document.querySelectorAll(".stack-category").forEach((card,index)=>{

    card.style.transitionDelay=`${index*120}ms`;

});


/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const heroImage=document.querySelector(".hero-image");

if(heroImage){

heroImage.addEventListener("mousemove",(e)=>{

    const rect=heroImage.getBoundingClientRect();

    const x=e.clientX-rect.left;

    const y=e.clientY-rect.top;

    const rotateY=(x-rect.width/2)/25;

    const rotateX=-(y-rect.height/2)/25;

    heroImage.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-5px)`;

});

heroImage.addEventListener("mouseleave",()=>{

    heroImage.style.transform=

`perspective(900px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)`;

});

}


/* ==========================================
   FADE NAVBAR
========================================== */

let previousScroll=window.scrollY;

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

const current=window.scrollY;

if(current>previousScroll && current>120){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

previousScroll=current;

});


/* ==========================================
   BUTTON RIPPLE
========================================== */

document.querySelectorAll(".btn-primary,.btn-secondary")

.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("page-loaded");

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"%cDesigned & Developed by Parth",

"color:#d0ae6c;font-size:18px;font-weight:bold;"

);

console.log(

"%cThanks for inspecting the code :)",

"color:white;font-size:13px;"

);