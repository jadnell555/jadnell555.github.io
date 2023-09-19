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
const sizes = [
  10, 9, 12, 13, 9, 13, 15, 10, 15, 11, 13, 9, 13, 13, 9, 15, 10, 14,
];
const sizesDesktop = [
  9, 9, 10, 10, 9, 10, 11, 9, 11, 9, 10, 9, 10, 10, 9, 11, 9, 11,
];

function expandableButton(techButton, container, arrow, expandedHeight) {
  var button = document.getElementById(techButton);
  var techStackContainer = document.getElementById(container);
  var expandArrow = document.getElementById(arrow);
  var flag = false;
  var index = buttons.indexOf(techButton); // Get the index of the current button

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!flag) {
      // Expand Tech Stack Container
      techStackContainer.style.height = expandedHeight + "em";
      expandArrow.style.transform = "rotateX(180deg)";
      flag = true;
    } else {
      // Collapse Tech Stack Container
      techStackContainer.style.height = "3em";
      expandArrow.style.transform = "rotateX(0deg)";
      flag = false;
    }

    // Hide other descriptions except the clicked one
    containers.forEach(function (containerName, i) {
      if (i !== index) {
        document.getElementById(containerName).style.height = "3em";
        document.getElementById(arrows[i]).style.transform = "rotateX(0deg)";
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (
      flag &&
      !button.contains(event.target) &&
      !techStackContainer.contains(event.target) &&
      !expandArrow.contains(event.target)
    ) {
      techStackContainer.style.height = "3em";
      expandArrow.style.transform = "rotateX(0deg)";
      flag = false;
    }
  });
}

let media = window.matchMedia("(min-width: 900px)");

function screenSize() {
  if (media.matches) {
    for (i = 0; i < buttons.length; i++) {
      expandableButton(buttons[i], containers[i], arrows[i], sizesDesktop[i]);
    }
  } else {
    for (i = 0; i < buttons.length; i++) {
      expandableButton(buttons[i], containers[i], arrows[i], sizes[i]);
    }
  }
}

media.addEventListener("change", screenSize);
screenSize();
