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
