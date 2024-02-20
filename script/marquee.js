let currentScroll = 0;
let isScrollongDown = false;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee__part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
}).totalProgress(0.5);
gsap.set('.marquee__inner', { xPercent: -50 });

window.addEventListener("scroll",function () {
    if(window.scrollY > currentScroll) {
        isScrollongDown = true;
    }else {
        isScrollongDown = false;
    }
    gsap.to(tween, {
        timeScale:isScrollongDown ? 1 : -1, 
    });
    arrows.forEach((arrow) => {
        if(isScrollongDown) {
            arrow.classList.remove("active");
        }else {
            arrow.classList.add("active");
        }
    });
    currentScroll = window.scrollY;
});