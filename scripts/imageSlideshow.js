let slideIndex = [1, 1, 1, 1, 1];
let slideId = [
  "mySlides1 fade",
  "mySlides2 fade",
  "mySlides3 fade",
  "mySlides4 fade",
  "mySlides5 fade",
];
let dotId = ["dot1", "dot2", "dot3", "dot4", "dot5"];
for (i = 0; i < 5; i++) {
  showSlides(1, i);
}

// Next/previous controls
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName(dotId[no]);
  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}
