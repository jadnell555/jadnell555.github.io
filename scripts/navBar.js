// Script for Navigation Bar Operation Onclick
var selectMenu = document.getElementById("selectMenu");
var menuButtonsList = document.getElementById("menuButtonsList");
var options = document.getElementsByClassName("options");

selectMenu.onclick = function (event) {
  event.stopPropagation();
  menuButtonsList.classList.toggle("hide");
};

for (Option of options) {
  Option.onclick = function (event) {
    event.stopPropagation();
    menuButtonsList.classList.toggle("hide");
  };
}

// Add click event listener to the document
document.addEventListener("click", function (event) {
  if (
    !selectMenu.contains(event.target) &&
    !menuButtonsList.contains(event.target)
  ) {
    menuButtonsList.classList.add("hide");
  }
});
