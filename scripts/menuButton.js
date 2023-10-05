// Script for Navigation Bar Operation Onclick
var selectMenu = document.getElementById("selectMenu");
var menuButtonsList = document.getElementById("menuButtonsList");
var options = document.getElementsByClassName("options");
var menuButtonIcon = document.getElementById("menuButton");
selectMenu.onclick = function (event) {
  event.stopPropagation();
  menuButtonIcon.style.transition = ".3s ease-in";
  menuButtonIcon.style.transform = "rotateZ(90deg)";
  menuButtonsList.classList.toggle("hide");
};

for (Option of options) {
  Option.onclick = function (event) {
    event.stopPropagation();
    menuButtonsList.classList.toggle("hide");
    menuButtonIcon.style.transform = "rotateZ(0deg)";
  };
}

// Add click event listener to the document
document.addEventListener("click", function (event) {
  if (
    !selectMenu.contains(event.target) &&
    !menuButtonsList.contains(event.target)
  ) {
    menuButtonsList.classList.add("hide");
    menuButtonIcon.style.transform = "rotateZ(0deg)";
  }
});
