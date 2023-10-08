/*
~ Jadnell H. Reyes Pérez
~ 9/19/2023

~ Description:
  
  Script that handles the Tech Stack Buttons behavior. Each button expands 
  and collapses its container when pressed or when pressing anything besides it.
*/

// Array of each Tech Stack Button
const buttons = [
  "HTMLButton",
  "CSSButton",
  "JSButton",
  "PythonButton",
  "CPPButton",
  "DartButton",
  "SQLButton",
  "MATLABButton",
  "VSCODEButton",
  "AndroidStudioButton",
  "VSButton",
  "VirtualBoxButton",
  "RaspberryPiButton",
  "ArduinoButton",
  "GitHubButton",
  "JupyterButton",
  "FlutterButton",
  "DjangoButton",
];
// Array of each Tech Stack container
const containers = [
  "HTMLContainer",
  "CSSContainer",
  "JSContainer",
  "PythonContainer",
  "CPPContainer",
  "DartContainer",
  "SQLContainer",
  "MATLABContainer",
  "VSCODEContainer",
  "AndroidStudioContainer",
  "VSContainer",
  "VirtualBoxContainer",
  "RaspberryPiContainer",
  "ArduinoContainer",
  "GitHubContainer",
  "JupyterContainer",
  "FlutterContainer",
  "DjangoContainer",
];
// Array of each tech stack arrow
const arrows = [
  "HTMLArrow",
  "CSSArrow",
  "JSArrow",
  "PythonArrow",
  "CPPArrow",
  "DartArrow",
  "SQLArrow",
  "MATLABArrow",
  "VSCODEArrow",
  "AndroidStudioArrow",
  "VSArrow",
  "VirtualBoxArrow",
  "RaspberryPiArrow",
  "ArduinoArrow",
  "GitHubArrow",
  "JupyterArrow",
  "FlutterArrow",
  "DjangoArrow",
];
// Specific Sizes array for each description in em (Optimized for mobile view)
const sizes = [
  11, 10, 13, 14, 10, 14, 16, 11, 16, 12, 15, 10, 14, 14, 10, 17, 11, 16,
];
// Specific Sizes array for each description in em (Optimized for desktop view)
const sizesDesktop = [
  11, 10, 15, 15, 9, 15, 18, 12, 18, 12, 16, 9, 16, 16, 10, 18, 10, 17,
];

// Function that handles the expanding capability
function expandableButton(techButton, container, arrow, expandedHeight) {
  var button = document.getElementById(techButton); // Tech Stack Button variable
  var techStackContainer = document.getElementById(container); // Tech Stack Container variable
  var expandArrow = document.getElementById(arrow); // Tech Stak Arrow variable
  var flag = false; // (True = Container Expanded/False = Container Collapsed)
  var index = buttons.indexOf(techButton); // Get the index of the current button

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!flag) {
      techStackContainer.style.height = expandedHeight + "em"; // Expand Tech Stack Container
      expandArrow.style.transform = "rotateX(180deg)"; // Change arrow direction
      flag = true; // Indicate container has been expanded
    } // end if
    else {
      techStackContainer.style.height = "3em"; // Collapse Tech Stack Container
      expandArrow.style.transform = "rotateX(0deg)"; // Change arrow direction
      flag = false; // Indicate container has been collapsed
    } // end else

    // Hide other descriptions except the clicked one
    containers.forEach(function (containerName, i) {
      if (i !== index) {
        document.getElementById(containerName).style.height = "3em"; // Collapse Tech Stack Container
        document.getElementById(arrows[i]).style.transform = "rotateX(0deg)"; // Change arrow direction
      } // end if
    });
  });

  // Event Listener for checking if anything besides itself has been pressed
  document.addEventListener(
    "click",
    function (event) {
      if (
        flag &&
        !button.contains(event.target) &&
        !techStackContainer.contains(event.target) &&
        !expandArrow.contains(event.target)
      ) {
        techStackContainer.style.height = "3em"; // Collapse Tech Stack Container
        expandArrow.style.transform = "rotateX(0deg)"; // Change arrow direction
        flag = false; // Indicate container has been collapsed
      } // end if
    } // end function(event)
  ); // end Event Listener
} // end expandableButton

let media = window.matchMedia("(min-width: 900px)"); // Establishing a media query for devices bigger than 900px
function screenSize() {
  // If screen is wider than 900px some containers will have a smaller size.
  if (media.matches) {
    for (i = 0; i < buttons.length; i++) {
      expandableButton(buttons[i], containers[i], arrows[i], sizesDesktop[i]); //sizesDesktop array contains smaller sizes for most of the containers
    } // end for
  } // end if
  else {
    for (i = 0; i < buttons.length; i++) {
      expandableButton(buttons[i], containers[i], arrows[i], sizes[i]); //sizes array contains bigger sizes for most of the containers
    } // end for
  } // end else
} // end screenSize

media.addEventListener("change", screenSize); // event listener to check if the size has been changed
screenSize();
