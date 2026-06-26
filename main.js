/* ===========================================
   NAVBAR SCROLL
=========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ===========================================
   REVEAL ON SCROLL
=========================================== */

const reveals = document.querySelectorAll(
`
section,
.project,
.stack-category,
.about-info,
.timeline-item,
.featured-project
`
);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},

{

    threshold:.15

}

);

reveals.forEach(item=>{

    item.classList.add("reveal");

    revealObserver.observe(item);

});


/* ===========================================
   SMOOTH NAVIGATION
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(!target) return;

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===========================================
   ACTIVE NAV LINK
=========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-200;

        const height=section.offsetHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("current");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("current");

        }

    });

});


/* ===========================================
   IMAGE HOVER
=========================================== */

document.querySelectorAll(".project img,.featured-image img,.hero-image img")

.forEach(img=>{

    img.addEventListener("mousemove",(e)=>{

        const rect=img.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        img.style.transform=

`scale(1.06)
translate(
${(x-rect.width/2)/35}px,
${(y-rect.height/2)/35}px
)`;

    });

    img.addEventListener("mouseleave",()=>{

        img.style.transform="scale(1)";

    });

});


/* ===========================================
   PRELOADER REMOVE
=========================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* ===========================================
   YEAR
=========================================== */

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Parth. Designed & Developed by Me.`;

}