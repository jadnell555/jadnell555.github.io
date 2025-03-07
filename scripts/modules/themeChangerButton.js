// Theme Switcher Script
document.addEventListener("DOMContentLoaded", () => {
  // Dark theme variables
  const darkTheme = {
    /* Primary Colors */
    "--color-primary-light": "#fd8c69",
    "--color-primary-dark": "#FD6A69",

    /* Neutral Colors */
    "--color-background-light": "#212121",
    "--color-background-medium": "#181818",
    "--color-background-dark": "#000000",

    /* Text Colors */
    "--color-text-light": "#111812",
    "--color-text-dark": "#f8f8ff",
    "--color-text-accent": "#FD6A69",

    /* Accent Colors */
    "--color-accent-yellow": "#fbcc18",
    "--color-accent-blue-light": "#7bd5f5",
    "--color-accent-blue-medium": "#79a9f5",
    "--color-accent-blue-dark": "#787ff6",

    /* Action Colors */
    "--color-action-youtube": "#b2071d",
    "--color-action-gray": "#e3e1e3",
  };

  // Light theme variables (default)
  const lightTheme = {
    /* Primary Colors */
    "--color-primary-light": "#1a7452",
    "--color-primary-dark": "#347b56",

    /* Neutral Colors */
    "--color-background-light": "#f8f8ff",
    "--color-background-medium": "#eeeef5",
    "--color-background-dark": "#111812",

    /* Text Colors */
    "--color-text-light": "#f8f8ff",
    "--color-text-dark": "#111812",
    "--color-text-accent": "#347b56",

    /* Accent Colors */
    "--color-accent-yellow": "#fbcc18",
    "--color-accent-blue-light": "#7bd5f5",
    "--color-accent-blue-medium": "#79a9f5",
    "--color-accent-blue-dark": "#787ff6",

    /* Action Colors */
    "--color-action-youtube": "#b2071d",
    "--color-action-gray": "#e3e1e3",
  };

  // Get the theme toggle button
  const themeButton = document.getElementById("themeButton");
  const themeImage = themeButton.querySelector("img");

  // Function to apply theme
  function applyTheme(themeObject) {
    Object.entries(themeObject).forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }

  // Function to set theme icon
  function setThemeIcon(isDarkMode) {
    if (window.location.pathname.includes("/pages/")) {
      const goBackButton = document.getElementById("goBackButton");
      const goBackImage = goBackButton.querySelector("img");
      if (isDarkMode) {
        themeImage.src = "../../assets/images/icons/sun.svg";
        themeImage.style.width = "40px"; // Larger size for sun
        themeImage.style.height = "40px";
        goBackImage.src = "../../assets/images/icons/goBackDarkMode.svg";
      } else {
        themeImage.src = "../../assets/images/icons/moon.svg";
        themeImage.style.width = "35px"; // Smaller size for moon
        themeImage.style.height = "35px";
        goBackImage.src = "../../assets/images/icons/goBack.svg";
      }
    } else {
      const menuButton = document.getElementById("menuButton");
      const menuImage = menuButton.querySelector("img");

      if (isDarkMode) {
        themeImage.src = "assets/images/icons/sun.svg";
        themeImage.style.width = "40px"; // Larger size for sun
        themeImage.style.height = "40px";
        menuImage.src = "assets/images/icons/hamburgerMenuDarkMode.svg";
      } else {
        themeImage.src = "assets/images/icons/moon.svg";
        themeImage.style.width = "35px"; // Smaller size for moon
        themeImage.style.height = "35px";
        menuImage.src = "assets/images/icons/hamburgerMenu.svg";
      }
    }
  }

  // Check saved theme preference
  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    // Default to light mode if no preference is saved
    const isDarkMode = savedTheme === "dark";

    // Apply saved theme
    if (isDarkMode) {
      applyTheme(darkTheme);
    } else {
      applyTheme(lightTheme);
    }

    // Set icon accordingly
    setThemeIcon(isDarkMode);

    // Return the current theme state
    return isDarkMode;
  }

  // Initialize theme state
  let isDarkMode = initializeTheme();

  // Theme toggle event listener
  themeButton.addEventListener("click", () => {
    // Toggle theme state
    isDarkMode = !isDarkMode;
    const currentTheme = isDarkMode ? "dark" : "light";

    window.dispatchEvent(
      new CustomEvent("themeChanged", {
        detail: { data: isDarkMode, theme: currentTheme },
      })
    );

    // Apply new theme
    applyTheme(isDarkMode ? darkTheme : lightTheme);

    // Update icon
    setThemeIcon(isDarkMode);

    // Save theme preference
    localStorage.setItem("theme", currentTheme);

    // Update alt text for accessibility
    themeImage.alt = isDarkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";

    // Update tech stack buttons if the function exists
    if (window.updateTechStackTheme) {
      window.updateTechStackTheme(currentTheme);
    }
  });
});
