/*
~ Jadnell H. Reyes Pérez
~ 2/22/2025

~ Description:
*/
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded, starting tech stack load");
  loadTechStack();
});

async function loadTechStack() {
  try {
    console.log("Attempting to fetch techStack.json");
    const response = await fetch("data/techStack.json");
    const data = await response.json();
    console.log("Loaded data:", data);

    // Get unique tech types from the data
    const techTypes = [
      ...new Set(data.table.techstack.data.map((item) => item.tech_type)),
    ];
    console.log("Found tech types:", techTypes);

    // Loop through each tech type
    techTypes.forEach((techType) => {
      // Convert tech type to a valid ID (replace spaces with hyphens and lowercase)
      const containerId = techType.toLowerCase().replace(/\s+/g, "-");
      console.log("Looking for container:", containerId);

      const container = document.querySelector(`#${containerId}`);
      if (!container) {
        console.warn(`Container #${containerId} not found in the DOM`);
        return;
      }

      // Filter tools for this category
      const categoryTools = data.table.techstack.data.filter(
        (tool) => tool.tech_type === techType
      );
      console.log(`Found ${categoryTools.length} tools for ${techType}`);

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
  console.log("Creating button for:", tool.tech_name);
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
  infoIcon.src = "assets/images/Icons/info.svg";
  infoIcon.title = tool.tech_description;
  infoIcon.width = 30;
  infoIcon.height = 30;
  infoIcon.alt = "More Info Button";

  // Append all elements to button
  button.appendChild(icon);
  button.appendChild(text);
  button.appendChild(infoIcon);

  return button;
}
