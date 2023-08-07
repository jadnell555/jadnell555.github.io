// HTML TECH STACK BUTTON
var HTMLButton = document.getElementById("HTMLButton");
var HTMLInfo = document.getElementById("HTMLInfo");
var backdrop = document.getElementById("backdrop");

HTMLButton.onclick = function () {
  HTMLInfo.classList.toggle("hide");
  backdrop.classList.toggle("visible");
};

document.addEventListener("click", function (event) {
  if (!HTMLInfo.contains(event.target) && !HTMLButton.contains(event.target)) {
    HTMLInfo.classList.add("hide");
    backdrop.classList.remove("visible");
  }
});

// CSS TECH STACK BUTTON
var CSSButton = document.getElementById("CSSButton");
var CSSInfo = document.getElementById("CSSInfo");

CSSButton.onclick = function () {
  CSSInfo.classList.toggle("hide");
};

// JavaScript TECH STACK BUTTON
var JSButton = document.getElementById("JSButton");
var JSInfo = document.getElementById("JSInfo");

JSButton.onclick = function () {
  JSInfo.classList.toggle("hide");
};

// Python TECH STACK BUTTON
var PythonButton = document.getElementById("PythonButton");
var PythonInfo = document.getElementById("PythonInfo");

PythonButton.onclick = function () {
  PythonInfo.classList.toggle("hide");
};

// C++ TECH STACK BUTTON
var CPPButton = document.getElementById("CPPButton");
var CPPInfo = document.getElementById("CPPInfo");

CPPButton.onclick = function () {
  CPPInfo.classList.toggle("hide");
};

// Dart TECH STACK BUTTON
var DartButton = document.getElementById("DartButton");
var DartInfo = document.getElementById("DartInfo");

DartButton.onclick = function () {
  DartInfo.classList.toggle("hide");
};

// SQL TECH STACK BUTTON
var SQLButton = document.getElementById("SQLButton");
var SQLInfo = document.getElementById("SQLInfo");

SQLButton.onclick = function () {
  SQLInfo.classList.toggle("hide");
};

// Software:

// Visual Studio Code TECH STACK BUTTON
var VSCODEButton = document.getElementById("VSCODEButton");
var VSCODEInfo = document.getElementById("VSCODEInfo");

VSCODEButton.onclick = function () {
  VSCODEInfo.classList.toggle("hide");
};

// Android Studio TECH STACK BUTTON
var AndroidStudioButton = document.getElementById("AndroidStudioButton");
var AndroidStudioInfo = document.getElementById("AndroidStudioInfo");

AndroidStudioButton.onclick = function () {
  AndroidStudioInfo.classList.toggle("hide");
};

// Visual Studio TECH STACK BUTTON
var VSButton = document.getElementById("VSButton");
var VSInfo = document.getElementById("VSInfo");

VSButton.onclick = function () {
  VSInfo.classList.toggle("hide");
};

// VirtualBox TECH STACK BUTTON
var VirtualBoxButton = document.getElementById("VirtualBoxButton");
var VirtualBoxInfo = document.getElementById("VirtualBoxInfo");

VirtualBoxButton.onclick = function () {
  VirtualBoxInfo.classList.toggle("hide");
};

// Raspberry Pi TECH STACK BUTTON
var RaspberryPiButton = document.getElementById("RaspberryPiButton");
var RaspberryPiInfo = document.getElementById("RaspberryPiInfo");

RaspberryPiButton.onclick = function () {
  RaspberryPiInfo.classList.toggle("hide");
};

// MATLAB TECH STACK BUTTON
var MATLABButton = document.getElementById("MATLABButton");
var MATLABInfo = document.getElementById("MATLABInfo");

MATLABButton.onclick = function () {
  MATLABInfo.classList.toggle("hide");
};

// GitHub TECH STACK BUTTON
var GitHubButton = document.getElementById("GitHubButton");
var GitHubInfo = document.getElementById("GitHubInfo");

GitHubButton.onclick = function () {
  GitHubInfo.classList.toggle("hide");
};

// Jupyter Notebooks TECH STACK BUTTON
var JupyterButton = document.getElementById("JupyterButton");
var JupyterInfo = document.getElementById("JupyterInfo");

JupyterButton.onclick = function () {
  JupyterInfo.classList.toggle("hide");
};

// Flutter TECH STACK BUTTON
var FlutterButton = document.getElementById("FlutterButton");
var FlutterInfo = document.getElementById("FlutterInfo");

FlutterButton.onclick = function () {
  FlutterInfo.classList.toggle("hide");
};

// Django TECH STACK BUTTON
var DjangoButton = document.getElementById("DjangoButton");
var DjangoInfo = document.getElementById("DjangoInfo");

DjangoButton.onclick = function () {
  DjangoInfo.classList.toggle("hide");
};
