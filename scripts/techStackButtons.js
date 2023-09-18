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

function expandableButton(techButton, container, arrow) {
  var button = document.getElementById(techButton);
  var techStackContainer = document.getElementById(container);
  var expandArrow = document.getElementById(arrow);
  var flag = false;

  button.addEventListener("click", function () {
    if (flag == false) {
      techStackContainer.classList.add("expandedTechStackContainer");
      expandArrow.style.transform = "rotateX(180deg)";
      flag = true;
    } else {
      techStackContainer.classList.remove("expandedTechStackContainer");
      expandArrow.style.transform = "rotateX(0deg)";
      flag = false;
    }
  });
}

expandableButton("HTMLButton", "HTMLContainer", "HTMLArrow");
expandableButton("CSSButton", "CSSContainer", "CSSArrow");
expandableButton("JSButton", "JSContainer", "JSArrow");
expandableButton("PythonButton", "PythonContainer", "PythonArrow");
expandableButton("CPPButton", "CPPContainer", "CPPArrow");
expandableButton("DartButton", "DartContainer", "DartArrow");
expandableButton("SQLButton", "SQLContainer", "SQLArrow");
expandableButton("MATLABButton", "MATLABContainer", "MATLABArrow");

expandableButton("VSCODEButton", "VSCODEContainer", "VSCODEArrow");
expandableButton(
  "AndroidStudioButton",
  "AndroidStudioContainer",
  "AndroidStudioArrow"
);
expandableButton("VSButton", "VSContainer", "VSArrow");
expandableButton("VirtualBoxButton", "VirtualBoxContainer", "VirtualBoxArrow");
expandableButton(
  "RaspberryPiButton",
  "RaspberryPiContainer",
  "RaspberryPiArrow"
);
expandableButton("ArduinoButton", "ArduinoContainer", "ArduinoArrow");
expandableButton("GitHubButton", "GitHubContainer", "GitHubArrow");
expandableButton("JupyterButton", "JupyterContainer", "JupyterArrow");
expandableButton("FlutterButton", "FlutterContainer", "FlutterArrow");
expandableButton("DjangoButton", "DjangoContainer", "DjangoArrow");
