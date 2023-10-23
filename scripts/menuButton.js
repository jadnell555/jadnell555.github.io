// Script for Navigation Bar Operation Onclick
var selectMenu = document.getElementById("selectMenu");
var menuButtonsList = document.getElementById("menuButtonsList");
var options = document.getElementsByClassName("options");
var menuButtonIcon = document.getElementById("menuButton");
var flag = false;

selectMenu.onclick = function (event) {
  if (flag == false) {
    event.stopPropagation();
    flag = true;
    menuButtonIcon.style.transition = "0.3s ease-in";
    menuButtonIcon.style.transform = "rotateZ(90deg)";
    menuButtonsList.classList.toggle("hide");
  } else {
    event.stopPropagation();
    flag = false;
    menuButtonIcon.style.transition = "0.3s ease-in";
    menuButtonIcon.style.transform = "rotateZ(0deg)";
    menuButtonsList.classList.toggle("hide");
  }
};

for (Option of options) {
  Option.onclick = function (event) {
    if (flag == true) {
      event.stopPropagation();
      menuButtonsList.classList.toggle("hide");
      menuButtonIcon.style.transform = "rotateZ(0deg)";
      flag = false;
    } else {
      event.stopPropagation();
      menuButtonsList.classList.toggle("hide");
      menuButtonIcon.style.transform = "rotateZ(90deg)";
      flag = true;
    } // end else
  };
}

// Add click event listener to the document
document.addEventListener("click", function (event) {
  if (
    flag == true &&
    !selectMenu.contains(event.target) &&
    !menuButtonsList.contains(event.target)
  ) {
    menuButtonsList.classList.add("hide");
    menuButtonIcon.style.transform = "rotateZ(0deg)";
    flag = false;
  } else if (
    flag == false &&
    selectMenu.contains(event.target) &&
    menuButtonsList.contains(event.target)
  ) {
    menuButtonsList.classList.toggle("hide");
    menuButtonIcon.style.transform = "rotateZ(90deg)";
    flag = true;
  }
});
