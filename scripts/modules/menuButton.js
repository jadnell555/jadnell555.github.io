// Jadnell H. Reyes Perez
// March 8th, 2025
// Version: 1.5
// Script that handles the menu button for smaller displays.
var hamburgerMenu = document.getElementById("menuButton");
var navBarItems = document.getElementById("navBarItems");
var navBarItem = document.getElementsByClassName("navBarItem");
var flag = false;
const breakpoint = 1024;

// Function that handles animation, transition and functionality
// when pressing menu button
hamburgerMenu.onclick = function (event) {
  if (window.innerWidth < breakpoint) {
    if (flag == false) {
      event.stopPropagation();
      flag = true;
      hamburgerMenu.style.transition = "0.3s ease-in";
      hamburgerMenu.style.transform = "rotateZ(90deg)";
      navBarItems.classList.toggle("hide");
    } else {
      event.stopPropagation();
      flag = false;
      hamburgerMenu.style.transition = "0.3s ease-in";
      hamburgerMenu.style.transform = "rotateZ(0deg)";
      navBarItems.classList.toggle("hide");
    }
  }
};

// Function that handles animation, transition and functionality
// when pressing the navigation bar items.
for (Option of navBarItem) {
  Option.onclick = function (event) {
    if (window.innerWidth < breakpoint) {
      if (flag == true) {
        event.stopPropagation();
        navBarItems.classList.toggle("hide");
        hamburgerMenu.style.transform = "rotateZ(0deg)";
        flag = false;
      } else {
        event.stopPropagation();
        navBarItems.classList.toggle("hide");
        hamburgerMenu.style.transform = "rotateZ(90deg)";
        flag = true;
      } // end else
    }
  };
}

// Add click event listener to the document
document.addEventListener("click", function (event) {
  if (window.innerWidth < breakpoint) {
    if (
      flag == true &&
      !hamburgerMenu.contains(event.target) &&
      !navBarItems.contains(event.target)
    ) {
      navBarItems.classList.add("hide");
      hamburgerMenu.style.transform = "rotateZ(0deg)";
      flag = false;
    } else if (
      flag == false &&
      hamburgerMenu.contains(event.target) &&
      navBarItems.contains(event.target)
    ) {
      navBarItems.classList.toggle("hide");
      hamburgerMenu.style.transform = "rotateZ(90deg)";
      flag = true;
    }
  }
});
