// Jadnell H. Reyes Perez
// March 8th, 2025
// Version: 1.5
// Script that handles the load and display of the projects with theme awareness.

// Fetch the projects data from JSON file
async function fetchProjects() {
  try {
    // Adjust path based on current page
    let jsonPath = "";
    if (window.location.pathname.includes("/pages/")) {
      jsonPath = "../../data/projects.json"; // When in the pages directory
    } else {
      jsonPath = "../data/projects.json"; // When in the root directory
    }

    const response = await fetch(jsonPath);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Check if the data has the expected structure
    if (
      data &&
      data.table &&
      data.table.projects &&
      Array.isArray(data.table.projects.data)
    ) {
      return data.table.projects.data;
    } else if (data && Array.isArray(data)) {
      return data;
    } else {
      console.error("Invalid project data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching project data:", error);
    return [];
  }
}

// Fetch project technology relationships from projectsTech.json
async function fetchProjectTech() {
  try {
    // Adjust path based on current page
    let jsonPath = "";
    if (window.location.pathname.includes("/pages/")) {
      jsonPath = "../../data/projectsTech.json"; // When in the pages directory
    } else {
      jsonPath = "../data/projectsTech.json"; // When in the root directory
    }

    const response = await fetch(jsonPath);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Check if the data has the expected structure
    if (data && data.project_tech && Array.isArray(data.project_tech.data)) {
      return data.project_tech.data;
    } else {
      console.error("Invalid project tech data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching project tech data:", error);
    return [];
  }
}

// Fetch technology details from techStack.json
async function fetchTechStack() {
  try {
    // Adjust path based on current page
    let jsonPath = "";
    if (window.location.pathname.includes("/pages/")) {
      jsonPath = "../../data/techStack.json"; // When in the pages directory
    } else {
      jsonPath = "../data/techStack.json"; // When in the root directory
    }

    const response = await fetch(jsonPath);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Check if the data has the expected structure
    if (
      data &&
      data.table &&
      data.table.techstack &&
      Array.isArray(data.table.techstack.data)
    ) {
      return data.table.techstack.data;
    } else {
      console.error("Invalid tech stack data format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching tech stack data:", error);
    return [];
  }
}

// Create a button for each technology with theme support
function createToolButton(tool) {
  // Get current theme from localStorage
  const currentTheme = localStorage.getItem("theme") || "light";

  const button = document.createElement("button");
  button.className = "secondaryButtons";
  button.title = `What is ${tool.tech_name}?`;
  button.onclick = () => (window.location.href = tool.tech_source_url);

  // Add a data attribute to store the tool data for later theme updates
  button.dataset.toolName = tool.tech_name;

  // Create icon
  const icon = document.createElement("img");
  icon.src = tool.tech_icon;
  if (window.location.pathname.includes("/pages/")) {
    // Adjust icon path if in pages directory
    icon.src = "../../" + tool.tech_icon.replace(/^\//, "");
  }
  icon.className = "light-mode-tech-icon";
  icon.title = `${tool.tech_name} Logo`;
  icon.width = 25;
  icon.height = 25;
  icon.alt = `${tool.tech_name} Logo`;
  icon.style.display = currentTheme === "dark" ? "none" : "block";

  // Create dark mode icon
  const iconDarkMode = document.createElement("img");
  iconDarkMode.src = tool.tech_icon_dark;
  if (window.location.pathname.includes("/pages/")) {
    // Adjust icon path if in pages directory
    iconDarkMode.src = "../../" + tool.tech_icon_dark.replace(/^\//, "");
  }
  iconDarkMode.className = "dark-mode-tech-icon";
  iconDarkMode.title = `${tool.tech_name} Logo`;
  iconDarkMode.width = 25;
  iconDarkMode.height = 25;
  iconDarkMode.alt = `${tool.tech_name} Logo`;
  iconDarkMode.style.display = currentTheme === "dark" ? "block" : "none";

  // Create text node
  const text = document.createElement("div");
  const content = document.createTextNode(tool.tech_name);
  text.appendChild(content);
  text.className = "secondaryButtonText";

  // Create info icon
  const infoIcon = document.createElement("img");
  infoIcon.className = "info-icon light-mode-icon";
  infoIcon.src = window.location.pathname.includes("/pages/")
    ? "../../assets/images/icons/info.svg"
    : "assets/images/icons/info.svg";
  infoIcon.title = "More Info";
  infoIcon.width = 25;
  infoIcon.height = 25;
  infoIcon.alt = "More Info Button";
  infoIcon.style.display = currentTheme === "dark" ? "none" : "block";

  // Create dark mode info icon
  const infoIconDarkMode = document.createElement("img");
  infoIconDarkMode.className = "info-icon dark-mode-icon";
  infoIconDarkMode.src = window.location.pathname.includes("/pages/")
    ? "../../assets/images/icons/infoDarkMode.svg"
    : "assets/images/icons/infoDarkMode.svg";
  infoIconDarkMode.title = "More Info";
  infoIconDarkMode.width = 25;
  infoIconDarkMode.height = 25;
  infoIconDarkMode.alt = "More Info Button";
  infoIconDarkMode.style.display = currentTheme === "dark" ? "block" : "none";

  // Append all elements to button
  button.appendChild(icon);
  button.appendChild(iconDarkMode);
  button.appendChild(text);
  button.appendChild(infoIcon);
  button.appendChild(infoIconDarkMode);

  return button;
}

// Function to update the theme of existing buttons
function updateProjectTechButtonsForTheme(theme) {
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

  // Also update slideshow navigation buttons
  updateSlideshowNavigationTheme(theme);
}

// Function to update slideshow navigation buttons for theme
function updateSlideshowNavigationTheme(theme) {
  // Update previous button icons
  const prevButtons = document.querySelectorAll(".prev");
  prevButtons.forEach((button) => {
    const lightModeIcon = button.querySelector(".nav-light-mode-icon");
    const darkModeIcon = button.querySelector(".nav-dark-mode-icon");

    if (lightModeIcon && darkModeIcon) {
      lightModeIcon.style.display = theme === "dark" ? "none" : "block";
      darkModeIcon.style.display = theme === "dark" ? "block" : "none";
    }
  });

  // Update next button icons
  const nextButtons = document.querySelectorAll(".next");
  nextButtons.forEach((button) => {
    const lightModeIcon = button.querySelector(".nav-light-mode-icon");
    const darkModeIcon = button.querySelector(".nav-dark-mode-icon");

    if (lightModeIcon && darkModeIcon) {
      lightModeIcon.style.display = theme === "dark" ? "none" : "block";
      darkModeIcon.style.display = theme === "dark" ? "block" : "none";
    }
  });
}

// Populate the projects overview section on the main page
function populateProjectsOverview(projects) {
  // Check if projects is defined and is an array
  if (!projects || !Array.isArray(projects)) {
    console.error("Projects data is not an array:", projects);
    return;
  }

  const projectsContainer = document.getElementById("projectsContainer");
  if (!projectsContainer) {
    console.error("Projects container not found");
    return;
  }

  projectsContainer.innerHTML = ""; // Clear existing content

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "projectContainer";

    projectElement.innerHTML = `
        <div class="projectContainer1">
          <div class="pictureWrapper">
            <img
              class="projectPictures"
              src="${project.project_thumbnail || ""}"
              title="${project.project_name || "Project"}"
              alt="A picture of the ${
                project.project_name || "Project"
              } was supposed to appear here..."
            />
          </div>
        </div>
        <div class="projectContainer2">
          <div>
            <h2 class="projectTitle">${project.project_name || "Project"}:</h2>
          </div>
  
          <div class="smallBlock">
            <h5>Overview:</h5>
            ${project.project_overview || "No overview available."}
          </div>
          
          <div class="primaryButtons">
            <button 
              class="moreDetailsButton" 
              type="button" 
              onclick="loadProjectDetails(${project.project_id})">
              More Details
            </button>
          </div>
        </div>
      `;

    projectsContainer.appendChild(projectElement);
  });

  // Add the project anchor point after the first project
  if (projectsContainer.children.length > 0) {
    const anchorPoint = document.createElement("div");
    anchorPoint.id = "projectGoBack";
    projectsContainer.insertBefore(
      anchorPoint,
      projectsContainer.children.length > 1
        ? projectsContainer.children[1]
        : null
    );
  }
}

// Handle the "More Details" button click
function loadProjectDetails(projectId) {
  // Convert projectId to string before storing (sessionStorage only stores strings)
  sessionStorage.setItem("selectedProjectId", projectId.toString());

  // Navigate to the project detail page
  window.location.href = "../pages/projects/projectDetailsTemplate.html";
}

// Initialize the main page
async function initMainPage() {
  try {
    const projects = await fetchProjects();
    populateProjectsOverview(projects);
  } catch (error) {
    console.error("Error initializing main page:", error);
  }
}

// Load and display the tech stack for a specific project
async function loadProjectTechStack(projectId) {
  try {
    const projectTechRelations = await fetchProjectTech();
    const techStack = await fetchTechStack();

    // Filter the tech IDs for this project
    const projectTechIds = projectTechRelations
      .filter((relation) => relation.project_id === projectId)
      .map((relation) => relation.tech_id);

    // Get full details for each tech ID
    const projectTechnologies = techStack.filter((tech) =>
      projectTechIds.includes(tech.tech_id)
    );

    // Find the tech stack container
    const techStackContainer = document.getElementById("techStackContainer");
    if (!techStackContainer) {
      console.error("Tech stack container not found");
      return;
    }

    techStackContainer.innerHTML = ""; // Clear existing content

    projectTechnologies.forEach((tech) => {
      const button = createToolButton(tech);
      techStackContainer.appendChild(button);
    });
  } catch (error) {
    console.error("Error loading project tech stack:", error);
  }
}

// Populate the project details page using the template
async function loadProjectDetailsPage() {
  try {
    const projectId = sessionStorage.getItem("selectedProjectId");

    if (!projectId) {
      console.error("No project ID found in sessionStorage");
      // Redirect back to main page if no project was selected
      window.location.href = "../../index.html";
      return;
    }

    const projects = await fetchProjects();

    const project = projects.find((p) => {
      return p.project_id === parseInt(projectId);
    });

    if (!project) {
      console.error("Project not found");
      window.location.href = "../../index.html";
      return;
    }

    // Set page title
    document.title = `${project.project_name} - Jadnell Reyes' Portfolio`;

    // Set project heading
    const projectHeading = document.querySelector(".HEADINGS h1");
    if (projectHeading) {
      projectHeading.textContent = project.project_name;
    }

    // Set source code button and youtube button container
    const sourceVideo = document.querySelector(".sourceVideo");
    sourceVideo.innerHTML = "";

    // Set source code button if available
    if (project.project_source_code) {
      const sourceCodeButton = document.createElement("button");
      sourceCodeButton.title = "Source Code";
      sourceCodeButton.className = "sourceCodeButton";
      sourceCodeButton.onclick = function () {
        window.location.href = project.project_source_code;
      };
      sourceCodeButton.innerHTML = `
          <img
            src="../../assets/images/techStack/githubInverse.svg"
            width="50px"
            height="50px"
            alt="GitHub Logo"
          />
          Source Code
        `;

      sourceVideo.appendChild(sourceCodeButton);
    }

    // Set YouTube button if available
    if (project.project_video_url) {
      const youtubeButton = document.createElement("button");
      youtubeButton.title = "Project Video";
      youtubeButton.className = "youtubeButton";
      youtubeButton.onclick = function () {
        window.location.href = project.project_video_url;
      };
      youtubeButton.innerHTML = `
          <img
            src="../../assets/images/socialMedia/youtube.svg"
            width="45px"
            height="40px"
            alt="Youtube Logo"
          />
          Video
        `;

      sourceVideo.appendChild(youtubeButton);
    }

    // Set project description
    const projectDescription = document.querySelector(".projectDescription");
    if (projectDescription) {
      projectDescription.textContent = project.project_description;
    }

    // Set project type
    const projectTypes = document.querySelectorAll(".projectType");
    if (projectTypes.length > 0) {
      projectTypes.forEach((type) => {
        type.classList.remove("persActive");
        type.classList.remove("uniActive");
        type.classList.remove("profActive");
      });

      const projectType = project.project_type.toLowerCase();

      const activeType = document.getElementById(
        project.project_type ? projectType : ""
      );
      if (activeType && projectType == "university") {
        activeType.classList.add("uniActive");
      } else if (activeType && projectType == "personal") {
        activeType.classList.add("persActive");
      } else if (activeType && projectType == "professional") {
        activeType.classList.add("profActive");
      }
    }

    // Set project status
    const inProgress = document.getElementById("inProgress");
    const complete = document.getElementById("complete");

    if (inProgress && complete) {
      if (
        project.project_status &&
        project.project_status.toLowerCase() === "in progress"
      ) {
        inProgress.style.backgroundColor = "#fbcc18";
        inProgress.style.color = "#252525";
        complete.style.backgroundColor = "";
        complete.style.color = "";
        complete.style.boxShadow = "none";
      } else {
        complete.style.backgroundColor = "#7ec384";
        complete.style.color = "#252525";
        inProgress.style.backgroundColor = "";
        inProgress.style.color = "";
        inProgress.style.boxShadow = "none";
      }
    }

    // Load and display tech stack for this project
    await loadProjectTechStack(parseInt(projectId));

    // Create image slideshow if there are images
    if (project.project_images && Array.isArray(project.project_images)) {
      createImageSlideshow(project.project_images);
    }
  } catch (error) {
    console.error("Error loading project details page:", error);
  }
}

// Create the image slideshow with theme support
function createImageSlideshow(images) {
  if (!images || images.length === 0) return;

  const slideshowContainer = document.querySelector(".slideshow-container");
  if (!slideshowContainer) return;

  // Get current theme
  const currentTheme = localStorage.getItem("theme") || "light";

  // Clear existing content
  slideshowContainer.innerHTML = "";

  // Create Previous button with theme support
  const prevButton = document.createElement("button");
  prevButton.title = "Previous";
  prevButton.className = "prev";
  prevButton.onclick = function () {
    plusSlides(-1);
  };

  // Light mode prev icon
  const prevLightIcon = document.createElement("img");
  prevLightIcon.className = "nav-light-mode-icon";
  prevLightIcon.src = "../../assets/images/icons/prevImage.svg";
  prevLightIcon.width = 30;
  prevLightIcon.height = 30;
  prevLightIcon.alt = "Previous picture arrow button.";
  prevLightIcon.style.display = currentTheme === "dark" ? "none" : "block";

  // Dark mode prev icon
  const prevDarkIcon = document.createElement("img");
  prevDarkIcon.className = "nav-dark-mode-icon";
  prevDarkIcon.src = "../../assets/images/icons/prevImageDarkMode.svg";
  prevDarkIcon.width = 30;
  prevDarkIcon.height = 30;
  prevDarkIcon.alt = "Previous picture arrow button (dark mode).";
  prevDarkIcon.style.display = currentTheme === "dark" ? "block" : "none";

  prevButton.appendChild(prevLightIcon);
  prevButton.appendChild(prevDarkIcon);
  slideshowContainer.appendChild(prevButton);

  // Add slides
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.className = "mySlides fade";

    // Adjust image path based on current page location
    let imagePath = image;
    if (window.location.pathname.includes("/pages/")) {
      // If we're in the pages directory, we need to go up two levels
      // This assumes your images are relative to the root
      if (image.startsWith("assets/")) {
        imagePath = "../../" + image;
      }
    }

    slide.innerHTML = `
        <img
          class="projectImages"
          src="${imagePath}"
          alt="Image ${index + 1} of the project."
        />
      `;

    slideshowContainer.appendChild(slide);
  });

  // Create Next button with theme support
  const nextButton = document.createElement("button");
  nextButton.title = "Next";
  nextButton.className = "next";
  nextButton.onclick = function () {
    plusSlides(1);
  };

  // Light mode next icon
  const nextLightIcon = document.createElement("img");
  nextLightIcon.className = "nav-light-mode-icon";
  nextLightIcon.src = "../../assets/images/icons/nextImage.svg";
  nextLightIcon.width = 30;
  nextLightIcon.height = 30;
  nextLightIcon.alt = "Next picture arrow button.";
  nextLightIcon.style.display = currentTheme === "dark" ? "none" : "block";

  // Dark mode next icon
  const nextDarkIcon = document.createElement("img");
  nextDarkIcon.className = "nav-dark-mode-icon";
  nextDarkIcon.src = "../../assets/images/icons/nextImageDarkMode.svg";
  nextDarkIcon.width = 30;
  nextDarkIcon.height = 30;
  nextDarkIcon.alt = "Next picture arrow button (dark mode).";
  nextDarkIcon.style.display = currentTheme === "dark" ? "block" : "none";

  nextButton.appendChild(nextLightIcon);
  nextButton.appendChild(nextDarkIcon);
  slideshowContainer.appendChild(nextButton);

  // Create dots for navigation
  const dotsContainer = document.getElementById("imageDots");
  if (dotsContainer) {
    dotsContainer.innerHTML = "";

    images.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = function () {
        currentSlide(index + 1);
      };
      dotsContainer.appendChild(dot);
    });
  }

  // Show the first slide
  showSlides(1);
}

// Initialize the page based on current URL
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;

  if (currentPage.includes("projectDetailsTemplate.html")) {
    loadProjectDetailsPage();
  } else {
    initMainPage();
  }

  // Create a function that can be called when theme changes
  window.updateProjectTechTheme = function (newTheme) {
    updateProjectTechButtonsForTheme(newTheme);
  };

  // Listen for theme change events
  window.addEventListener("themeChanged", function (event) {
    const newTheme = event.detail.theme;
    updateProjectTechButtonsForTheme(newTheme);
  });
});

// Check for console errors and log them
window.addEventListener("error", function (event) {
  console.error("Script error detected:", event.error);
});
