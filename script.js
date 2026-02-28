function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

// GSAP animations
gsap.from(".reveal", {
  y:40,
  opacity:0,
  duration:1,
  stagger:0.2
});

gsap.from(".card", {
  scrollTrigger: ".card",
  y:50,
  opacity:0,
  duration:0.8,
  stagger:0.2
});