// Select all the sections you want to animate
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
    threshold: 0.1, // Adjust the threshold as needed
  }
);

// Attach the observer to each section
sections.forEach((section) => {
  observer.observe(section);
});
