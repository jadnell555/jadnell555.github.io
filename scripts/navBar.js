// Script for Navigation Bar Operation Onclick
var selectMenu = document.getElementById("selectMenu");
var menuButtonsList = document.getElementById("menuButtonsList");

selectMenu.onclick = function () {
  menuButtonsList.classList.toggle("hide");
}; // end function

for (Option of options) {
  Option.onclick = function () {
    menuButtonsList.classList.toggle("hide");
  }; // end function
} // end for