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

expandableButton("HTMLButton", "HTMLContainer", "HTMLArrow", 11.5);
expandableButton("CSSButton", "CSSContainer", "CSSArrow", 10.5);
expandableButton("JSButton", "JSContainer", "JSArrow", 13.5);
expandableButton("PythonButton", "PythonContainer", "PythonArrow", 13.5);
expandableButton("CPPButton", "CPPContainer", "CPPArrow", 9.5);
expandableButton("DartButton", "DartContainer", "DartArrow", 14.5);
expandableButton("SQLButton", "SQLContainer", "SQLArrow", 15.5);
expandableButton("MATLABButton", "MATLABContainer", "MATLABArrow", 12.5);
expandableButton("VSCODEButton", "VSCODEContainer", "VSCODEArrow", 15.5);
expandableButton(
  "AndroidStudioButton",
  "AndroidStudioContainer",
  "AndroidStudioArrow",
  12.5
);
expandableButton("VSButton", "VSContainer", "VSArrow", 13);
expandableButton(
  "VirtualBoxButton",
  "VirtualBoxContainer",
  "VirtualBoxArrow",
  10.5
);
expandableButton(
  "RaspberryPiButton",
  "RaspberryPiContainer",
  "RaspberryPiArrow",
  14.5
);
expandableButton("ArduinoButton", "ArduinoContainer", "ArduinoArrow", 14.5);
expandableButton("GitHubButton", "GitHubContainer", "GitHubArrow", 11.5);
expandableButton("JupyterButton", "JupyterContainer", "JupyterArrow", 15.5);
expandableButton("FlutterButton", "FlutterContainer", "FlutterArrow", 11.5);
expandableButton("DjangoButton", "DjangoContainer", "DjangoArrow", 15.5);
