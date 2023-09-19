/*
function setupToggle(elementButton, elementInfo) {
  var button = document.getElementById(elementButton);
  var info = document.getElementById(elementInfo);
  var flag = false;

  button.onclick = function (event) {
    event.stopPropagation();
    info.classList.toggle("hide");
    flag = !flag;

    // Hide other info spans except the clicked one
    var allInfos = document.querySelectorAll(".info");
    allInfos.forEach(function (otherInfo) {
      if (otherInfo !== info) {
        otherInfo.classList.add("hide");
      }
    });
  };

  document.addEventListener("click", function (event) {
    if (
      flag &&
      !button.contains(event.target) &&
      !info.contains(event.target)
    ) {
      info.classList.add("hide");
      flag = false;
    }
  });
}

setupToggle("HTMLButton", "HTMLInfo");
setupToggle("CSSButton", "CSSInfo");
setupToggle("JSButton", "JSInfo");
setupToggle("PythonButton", "PythonInfo");
setupToggle("CPPButton", "CPPInfo");
setupToggle("DartButton", "DartInfo");
setupToggle("MATLABButton", "MATLABInfo");
setupToggle("SQLButton", "SQLInfo");
setupToggle("VSCODEButton", "VSCODEInfo");
setupToggle("AndroidStudioButton", "AndroidStudioInfo");
setupToggle("VSButton", "VSInfo");
setupToggle("VirtualBoxButton", "VirtualBoxInfo");
setupToggle("RaspberryPiButton", "RaspberryPiInfo");
setupToggle("ArduinoButton", "ArduinoInfo");
setupToggle("GitHubButton", "GitHubInfo");
setupToggle("JupyterButton", "JupyterInfo");
setupToggle("FlutterButton", "FlutterInfo");
setupToggle("DjangoButton", "DjangoInfo");
*/
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

  button.addEventListener("click", function () {
    if (flag == false) {
      techStackContainer.style.height = expandedHeight + "em";
      expandArrow.style.transform = "rotateX(180deg)";
      flag = true;
    } else {
      techStackContainer.style.height = "3em";
      expandArrow.style.transform = "rotateX(0deg)";
      flag = false;
    }
  });
}

let media = window.matchMedia("(min-width: 900px");

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

media.addEventListener("change", screenSize());
screenSize(media);

/*
expandableButton("HTMLButton", "HTMLContainer", "HTMLArrow", 10);
expandableButton("CSSButton", "CSSContainer", "CSSArrow", 9);
expandableButton("JSButton", "JSContainer", "JSArrow", 12);
expandableButton("PythonButton", "PythonContainer", "PythonArrow", 13);
expandableButton("CPPButton", "CPPContainer", "CPPArrow", 9);
expandableButton("DartButton", "DartContainer", "DartArrow", 13);
expandableButton("SQLButton", "SQLContainer", "SQLArrow", 15);
expandableButton("MATLABButton", "MATLABContainer", "MATLABArrow", 10);
expandableButton("VSCODEButton", "VSCODEContainer", "VSCODEArrow", 15);
expandableButton(
  "AndroidStudioButton",
  "AndroidStudioContainer",
  "AndroidStudioArrow",
  11
);
expandableButton("VSButton", "VSContainer", "VSArrow", 13);
expandableButton(
  "VirtualBoxButton",
  "VirtualBoxContainer",
  "VirtualBoxArrow",
  9
);
expandableButton(
  "RaspberryPiButton",
  "RaspberryPiContainer",
  "RaspberryPiArrow",
  13
);
expandableButton("ArduinoButton", "ArduinoContainer", "ArduinoArrow", 13);
expandableButton("GitHubButton", "GitHubContainer", "GitHubArrow", 9);
expandableButton("JupyterButton", "JupyterContainer", "JupyterArrow", 15);
expandableButton("FlutterButton", "FlutterContainer", "FlutterArrow", 10);
expandableButton("DjangoButton", "DjangoContainer", "DjangoArrow", 14);
*/
