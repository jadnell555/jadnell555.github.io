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

/*
var button = document.getElementById(HTMLButton);
var techStackContainer = document.getElementById(HTMLContainer);
var flag = false;

button.addEventListener("click", function (techStackContainer) {
  if (flag == false) {
    techStackContainer.style.height("11em");
    flag = true;
  } else {
    techStackContainer.style.height("3em");
    flag = false;
  }
});
*/
