// Jadnell H. Reyes Perez
// March 8th, 2025
// Version: 1.5
// Script that handles the animation of the sections on scroll.

// Select all the sections to be animated
const sections = document.querySelectorAll(".animatedSection");

// Create an Intersection Observer instance
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("leftSlide"); // Add class when section is in view
      }
    });
  },
  {
    threshold: 0.05,
  }
);

// Attach the observer to each section
sections.forEach((section) => {
  observer.observe(section);
});
