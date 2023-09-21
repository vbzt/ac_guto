const header = document.querySelector(".header");
let lastScroll = 0;
window.addEventListener("scroll", function() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastScroll) {
      // Scroll para baixo
      header.style.transform = "translateY(-100%)";
  } else {
      // Scroll para cima
      header.style.transform = "translateY(0%)";
  }

    lastScroll = currentScroll;
});

