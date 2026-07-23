// ================= Typing Effect =================

const typingElement = document.getElementById("typing");

if (typingElement) {
    const text = "Abu Naser Sajib";
    let i = 0;

    function typing() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 90);
        }
    }

    typing();
}



// ================= Navbar Scroll =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (header) {

        if (window.scrollY > 50) {
            header.style.background = "#050b15";
        } else {
            header.style.background = "rgba(8,18,35,.92)";
        }

    }

});




// ================= LIGHTBOX =================

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close");

    if (!lightbox || !lightboxImg || !caption || !closeBtn) {
        console.log("Lightbox elements not found.");
        return;
    }

    galleryImages.forEach(function (img) {

        img.addEventListener("click", function () {

            lightbox.classList.add("active");

            lightboxImg.src = this.src;

            const text = this.parentElement.querySelector("p");

            caption.textContent = text ? text.innerText : "";

        });

    });

    closeBtn.addEventListener("click", function () {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", function (e) {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

    });

});




/* ===================================================== */
/* SCROLL PROGRESS BAR */
/* ===================================================== */

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const docHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(scrollTop/docHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});



/*====================================================
Animated Counter
====================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = parseInt(counter.dataset.target);

let count = 0;

const speed = Math.max(1, Math.ceil(target / 60));

function updateCounter(){

count += speed;

if(count < target){

counter.innerHTML = count + "+";

requestAnimationFrame(updateCounter);

}else{

counter.innerHTML = target + "+";

}

}

updateCounter();

counterObserver.unobserve(counter);

}

});

},{threshold:0.4});

counters.forEach(counter=>{

counterObserver.observe(counter);

});



window.addEventListener("load",()=>{


const loader=document.querySelector(".preloader");


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);


});