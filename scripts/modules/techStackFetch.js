/*
~ Jadnell H. Reyes Pérez
~ 2/22/2025

~ Description:
*/
document.addEventListener("DOMContentLoaded", function () {
  loadTechStack();
});

async function loadTechStack() {
  try {
    const response = await fetch("data/techStack.json");
    const data = await response.json();

    // Get unique tech types from the data
    const techTypes = [
      ...new Set(data.table.techstack.data.map((item) => item.tech_type)),
    ];

    // Loop through each tech type
    techTypes.forEach((techType) => {
      // Convert tech type to a valid ID (replace spaces with hyphens and lowercase)
      const containerId = techType.toLowerCase().replace(/\s+/g, "-");

      const container = document.querySelector(`#${containerId}`);
      if (!container) {
        console.warn(`Container #${containerId} not found in the DOM`);
        return;
      }

      // Filter tools for this category
      const categoryTools = data.table.techstack.data.filter(
        (tool) => tool.tech_type === techType
      );

      // Create and populate buttons for each tool
      categoryTools.forEach((tool) => {
        const button = createToolButton(tool);
        container.appendChild(button);
      });
    });
  } catch (error) {
    console.error("Error loading tech stack:", error);
    console.error("Error details:", error.message);
  }
}

function createToolButton(tool) {
  const button = document.createElement("button");
  button.className = "secondaryButtons";
  button.title = `What is ${tool.tech_name}?`;
  button.onclick = () => (window.location.href = tool.tech_source_url);

  // Create icon
  const icon = document.createElement("img");
  icon.src = tool.tech_icon;
  icon.title = `${tool.tech_name} Logo`;
  icon.width = 25;
  icon.height = 25;
  icon.alt = `${tool.tech_name} Logo`;

  // Create text node
  const text = document.createElement("div");
  const content = document.createTextNode(tool.tech_name);
  text.appendChild(content);
  text.className = "secondaryButtonText";

  // Create info icon
  const infoIcon = document.createElement("img");
  infoIcon.src = "assets/images/icons/info.svg";
  infoIcon.title = tool.tech_description;
  infoIcon.width = 25;
  infoIcon.height = 25;
  infoIcon.alt = "More Info Button";

  // Append all elements to button
  button.appendChild(icon);
  button.appendChild(text);
  button.appendChild(infoIcon);

  return button;
}
