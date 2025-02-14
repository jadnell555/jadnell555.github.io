var themeChangerButton = document.getElementById("themeChangerButton");
var themeLink = document.getElementById("theme");
var themeButtonIcon = document.getElementById("themeChangerButtonIcon");
var videoSource = document.getElementById("videoSource");
var resumeDownloadButton = document.getElementById("resumeDownload");

themeChangerButton.addEventListener("click", function () {
  if (themeLink.getAttribute("href") === "./Styles/lightDesign.css") {
    themeLink.setAttribute("href", "./Styles/darkDesign.css");
    videoSource.setAttribute("src", "/Videos/darkBackground.mp4");
    resumeDownloadButton.setAttribute(
      "src",
      "/Images/Icons/downloadArrowDarkMode.svg"
    );
    themeButtonIcon.setAttribute("src", "/Images/Icons/sun.svg");
  } else {
    themeLink.setAttribute("href", "./Styles/lightDesign.css");
    videoSource.setAttribute("src", "/Videos/background.mp4");
    resumeDownloadButton.setAttribute("src", "/Images/Icons/downloadArrow.svg");
    themeButtonIcon.setAttribute("src", "/Images/Icons/moon.svg");
  }
});
