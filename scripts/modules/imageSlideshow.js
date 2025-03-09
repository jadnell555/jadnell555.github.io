// Jadnell H. Reyes Perez
// March 8th, 2025
// Version: 1.5
// Script that handles the projects image slideshow

// Initialize the slide index to start at the first slide
let slideIndex = 1;

// Change the current slide by n amount
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Jump to a specific slide n
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Display the slide at the given index, handling boundary conditions
function showSlides(n) {
  let i;
  // Get all slide elements
  const slides = document.getElementsByClassName("mySlides");
  // Get all navigation dot elements
  const dots = document.getElementsByClassName("dot");

  // Safety check: if no slides are found, exit early
  if (!slides.length) return;

  // Handle wraparound: if index exceeds total slides, wrap to first slide
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Handle wraparound: if index is less than 1, wrap to last slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides by setting display to "none"
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all navigation dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide by setting its display to "block"
  slides[slideIndex - 1].style.display = "block";

  // Mark the corresponding navigation dot as active, if dots exist
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}
