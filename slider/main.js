const text = document.getElementsByTagName("h1")[0];
const cities = ["London", "Paris", "Prague", "Rome"];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let thisSlide = 0;
let maxSlide = slides.length - 1;

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
});

next.addEventListener("click", function () {
  if (thisSlide !== maxSlide) {
    thisSlide++;
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - thisSlide)}%)`;
    });
    text.innerHTML = cities[thisSlide];
  } else {
    next.setAttribute("disabled", "true");
    next.style.opacity = 0.5;
  }
  prev.removeAttribute("disabled");
  prev.style.opacity = 1;
});

prev.addEventListener("click", function () {
  if (thisSlide !== 0) {
    thisSlide--;
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - thisSlide)}%)`;
    });
    text.innerHTML = cities[thisSlide];
  } else {
    prev.setAttribute("disabled", "true");
    prev.style.opacity = 0.5;
  }

  next.removeAttribute("disabled");
  next.style.opacity = 1;
});
