// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav .nav-list");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("mobile");
});

// Toggle answer visibility when a question is clicked
const items = document.querySelectorAll(".qa-item");

items.forEach((item) => {
  const question = item.querySelector(".qa-question");
  question.addEventListener("click", (e) => {
    e.preventDefault();
    item.classList.toggle("active");
  });
});

// Toggle dark mode and save preference in localStorage
const btn = document.getElementById("darkToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  btn.classList.add("active");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btn.classList.toggle("active");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Animate sections when they come into view using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((sec) => observer.observe(sec));
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 5;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Preloader hide after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 500);
});
