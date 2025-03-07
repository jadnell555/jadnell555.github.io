/*
~ Jadnell H. Reyes Pérez
~ 2/22/2025

~ Description: Script to load tech stack buttons with theme awareness
*/
document.addEventListener("DOMContentLoaded", function () {
  let savedTheme = localStorage.getItem("theme") || "light";

  initializeTechStackUI(savedTheme);

  // Create a function that can be called when theme changes
  window.updateTechStackTheme = function (newTheme) {
    updateTechButtonsForTheme(newTheme);
  };

  // Listen for theme change events
  window.addEventListener("themeChanged", function (event) {
    const newTheme = event.detail.theme;
    updateTechButtonsForTheme(newTheme);
  });
});

// Store the loaded data globally to avoid fetching it again
let techStackUIData = null;

async function initializeTechStackUI(savedTheme) {
  try {
    // Only fetch the data if we haven't already
    if (!techStackUIData) {
      const response = await fetch("data/techStack.json");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }

      techStackUIData = await response.json();
    }

    if (
      !techStackUIData ||
      !techStackUIData.table ||
      !techStackUIData.table.techstack ||
      !techStackUIData.table.techstack.data
    ) {
      console.error("Invalid data structure in techStack.json");
      return;
    }

    // Get unique tech types from the data
    const techTypes = [
      ...new Set(
        techStackUIData.table.techstack.data.map((item) => item.tech_type)
      ),
    ];

    // Loop through each tech type
    let foundAnyContainer = false;

    techTypes.forEach((techType) => {
      // Convert tech type to a valid ID (replace spaces with hyphens and lowercase)
      const containerId = techType.toLowerCase().replace(/\s+/g, "-");

      const container = document.querySelector(`#${containerId}`);
      if (!container) {
        console.warn(`Container #${containerId} not found in the DOM`);
        return;
      }

      foundAnyContainer = true;

      // Clear existing buttons to avoid duplicates if this function is called multiple times
      container.innerHTML = "";

      // Filter tools for this category
      const categoryTools = techStackUIData.table.techstack.data.filter(
        (tool) => tool.tech_type === techType
      );

      // Create and populate buttons for each tool
      categoryTools.forEach((tool) => {
        const button = createTechStackButton(tool, savedTheme);
        container.appendChild(button);
      });
    });

    if (!foundAnyContainer) {
      console.warn(
        "No tech stack containers found on this page. Available IDs:",
        Array.from(document.querySelectorAll("[id]")).map((el) => el.id)
      );
    }
  } catch (error) {
    console.error("Error initializing tech stack UI:", error);
    console.error("Error details:", error.message);
    console.error("Error stack:", error.stack);
  }
}

function createTechStackButton(tool, theme) {
  const button = document.createElement("button");
  button.className = "secondaryButtons";
  button.title = `What is ${tool.tech_name}?`;
  button.onclick = () => (window.location.href = tool.tech_source_url);

  // Add a data attribute to store the tool data for later theme updates
  button.dataset.toolName = tool.tech_name;

  // Create icon
  const icon = document.createElement("img");
  icon.className = "light-mode-tech-icon";
  icon.src = tool.tech_icon;
  icon.title = `${tool.tech_name} Logo`;
  icon.width = 25;
  icon.height = 25;
  icon.alt = `${tool.tech_name} Logo`;
  icon.style.display = theme === "dark" ? "none" : "block";

  const iconDarkMode = document.createElement("img");
  iconDarkMode.className = "dark-mode-tech-icon";
  iconDarkMode.src = tool.tech_icon_dark;
  iconDarkMode.title = `${tool.tech_name} Logo`;
  iconDarkMode.width = 25;
  iconDarkMode.height = 25;
  iconDarkMode.alt = `${tool.tech_name} Logo`;
  iconDarkMode.style.display = theme === "dark" ? "block" : "none";

  // Create text node
  const text = document.createElement("div");
  const content = document.createTextNode(tool.tech_name);
  text.appendChild(content);
  text.className = "secondaryButtonText";

  // Create info icon - both light and dark mode versions
  const infoIcon = document.createElement("img");
  infoIcon.className = "info-icon light-mode-icon";
  infoIcon.src = "assets/images/icons/info.svg";
  infoIcon.title = "More Info";
  infoIcon.width = 25;
  infoIcon.height = 25;
  infoIcon.alt = "More Info Button";
  infoIcon.style.display = theme === "dark" ? "none" : "block";

  const infoIconDarkMode = document.createElement("img");
  infoIconDarkMode.className = "info-icon dark-mode-icon";
  infoIconDarkMode.src = "assets/images/icons/infoDarkMode.svg";
  infoIconDarkMode.title = "More Info";
  infoIconDarkMode.width = 25;
  infoIconDarkMode.height = 25;
  infoIconDarkMode.alt = "More Info Button";
  infoIconDarkMode.style.display = theme === "dark" ? "block" : "none";

  // Append all elements to button
  button.appendChild(icon);
  button.appendChild(iconDarkMode);
  button.appendChild(text);
  button.appendChild(infoIcon);
  button.appendChild(infoIconDarkMode);

  return button;
}

// Function to update the theme of existing buttons
function updateTechButtonsForTheme(theme) {
  const buttons = document.querySelectorAll(".secondaryButtons");

  buttons.forEach((button) => {
    const lightModeIcon = button.querySelector(".light-mode-icon");
    const darkModeIcon = button.querySelector(".dark-mode-icon");
    const lightModeTechIcon = button.querySelector(".light-mode-tech-icon");
    const darkModeTechIcon = button.querySelector(".dark-mode-tech-icon");

    if (lightModeIcon && darkModeIcon) {
      lightModeIcon.style.display = theme === "dark" ? "none" : "block";
      darkModeIcon.style.display = theme === "dark" ? "block" : "none";
    } else {
      console.warn("Button missing light/dark icons:", button.dataset.toolName);
    }

    if (lightModeTechIcon && darkModeTechIcon) {
      lightModeTechIcon.style.display = theme === "dark" ? "none" : "block";
      darkModeTechIcon.style.display = theme === "dark" ? "block" : "none";
    } else {
      console.warn("Button missing light/dark icons:", button.dataset.toolName);
    }
  });
}
