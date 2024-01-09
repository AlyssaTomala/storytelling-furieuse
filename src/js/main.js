import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//horizontal scroll

gsap.to(".slider-track", {
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: false,
  },
  x: "-75%",
  ease: "sine.inOut",
});

//main

gsap.from(".principal-texte", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".principal-texte",
    start: "top 80%",
    end: "120px center",
    scrub: true,

    markers: false,
  },
});

gsap.to(".principal-img-ysa-1", {
  x: "150%",
  opacity: 1,
  scrollTrigger: {
    trigger: ".principal-imgs",
    start: "top 80%",
    end: "200px center",
    scrub: true,
    onLeave: () => {
      gsap.to(".principal-img-ysa-1", { x: initialPosition, opacity: 1 });
    },
  },
});

gsap.to(".principal-img-ysa-2", {
  x: "-150%",
  opacity: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-2",
    start: "top 80%",
    end: "200px center",
    scrub: true,
    markers: false,
  },
});

gsap.to(".principal-img-ysa-3", {
  x: "150%",
  opacity: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-3",
    start: "-150% 20%",
    end: "-80% 25%",
    scrub: true,
  },
});

gsap.to(".principal-img-texte-1 ", {
  x: "-110px",
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-1",
    start: "50% 80%",
    end: "60% center",
    scrub: true,
    onLeave: () => {
      gsap.to(".principal-img-ysa-1", { x: initialPosition, opacity: 1 });
    },
    markers: false,
  },
});

gsap.to(".principal-img-texte-2 ", {
  x: "170px",
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-2",
    start: "50% 80%",
    end: "60% center",
    scrub: true,
    onLeave: () => {
      gsap.to(".principal-img-ysa-2", { x: initialPosition, opacity: 1 });
    },
    markers: false,
  },
});

gsap.to(".principal-img-bonus-2 ", {
  x: "-10px",
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-2",
    start: "50% 80%",
    end: "60% center",
    scrub: true,
    onLeave: () => {
      gsap.to(".principal-img-ysa-2", { x: initialPosition, opacity: 1 });
    },
    markers: false,
  },
});

gsap.to(".principal-img-texte-3 ", {
  x: "-110px",
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".principal-img-ysa-3",
    start: "20% bottom",
    end: "70% bottom",
    scrub: true,
    onLeaveBack: () => {
      gsap.to(".principal-img-ysa-3", { x: initialPosition, opacity: 1 });
    },
    markers: false,
  },
});

gsap.to(".principal-img-ysa-3", {
  scale: 1.2,
  scrollTrigger: {
    pin: ".principal-img-ysa-3",
    trigger: ".principal-img-ysa-3",
    start: "bottom bottom",
    end: "90% 52%",
  },
});

gsap.from(".principal-img-texte-3", {
  opacity: 0,
  y: "90px",
  scrollTrigger: {
    trigger: ".principal-img-ysa-3",
    start: "bottom bottom",
    end: "120% center",
    scrub: true,

    markers: false,
  },
});

gsap.to(".principal", {
  backgroundColor: "#1D1D1D",
  scrollTrigger: {
    trigger: ".principal-img-ysa-3",
    start: "bottom bottom",
    end: "center 30%",
    scrub: true,
    markers: false,
  },
});

gsap.to(".transition-texte-box", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".principal-bottom-box",
    start: "top bottom",
    end: "bottom bottom",
    scrub: true,
    markers: false,
  },
});

gsap.from(".screen-title-1", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".screen-title-1",
    start: "top bottom",
    end: "200px center",
    scrub: true,

    markers: false,
  },
});

//header bloqué

document.addEventListener("DOMContentLoaded", function () {
  var sectionCachable = document.getElementById("hiddenSection");
  var welcomeBtn = document.getElementById("welcomeBtn");

  document.body.style.overflow = "hidden";

  welcomeBtn.addEventListener("click", function () {
    gsap.to(sectionCachable, {
      opacity: 1,
      duration: 1,
      onComplete: activerDefilement,
    });
  });

  function activerDefilement() {
    document.body.style.overflow = "auto";
  }
});
