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

expandableButton("HTMLButton", "HTMLContainer", "HTMLArrow", 11);
expandableButton("CSSButton", "CSSContainer", "CSSArrow", 10);
expandableButton("JSButton", "JSContainer", "JSArrow", 13);
expandableButton("PythonButton", "PythonContainer", "PythonArrow", 13);
expandableButton("CPPButton", "CPPContainer", "CPPArrow", 9);
expandableButton("DartButton", "DartContainer", "DartArrow", 14);
expandableButton("SQLButton", "SQLContainer", "SQLArrow", 15);
expandableButton("MATLABButton", "MATLABContainer", "MATLABArrow", 12);
expandableButton("VSCODEButton", "VSCODEContainer", "VSCODEArrow", 15);
expandableButton(
  "AndroidStudioButton",
  "AndroidStudioContainer",
  "AndroidStudioArrow",
  12
);
expandableButton("VSButton", "VSContainer", "VSArrow", 13);
expandableButton(
  "VirtualBoxButton",
  "VirtualBoxContainer",
  "VirtualBoxArrow",
  10
);
expandableButton(
  "RaspberryPiButton",
  "RaspberryPiContainer",
  "RaspberryPiArrow",
  14
);
expandableButton("ArduinoButton", "ArduinoContainer", "ArduinoArrow", 14);
expandableButton("GitHubButton", "GitHubContainer", "GitHubArrow", 11);
expandableButton("JupyterButton", "JupyterContainer", "JupyterArrow", 15);
expandableButton("FlutterButton", "FlutterContainer", "FlutterArrow", 11);
expandableButton("DjangoButton", "DjangoContainer", "DjangoArrow", 15);
