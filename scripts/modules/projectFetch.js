// projectFetch.js - Main script to load and display project data
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

// Create a button for each technology (reused from techStackFetch.js)
function createToolButton(tool) {
  const button = document.createElement("button");
  button.className = "secondaryButtons";
  button.title = `What is ${tool.tech_name}?`;
  button.onclick = () => (window.location.href = tool.tech_source_url);

  // Create icon
  const icon = document.createElement("img");
  icon.src = tool.tech_icon;
  if (window.location.pathname.includes("/pages/")) {
    // Adjust icon path if in pages directory
    icon.src = "../../" + tool.tech_icon.replace(/^\//, "");
  }
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
  infoIcon.src = window.location.pathname.includes("/pages/")
    ? "../../assets/images/icons/info.svg"
    : "assets/images/icons/info.svg";
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

    // Set source code button
    const sourceVideo = document.querySelector(".sourceVideo");
    sourceVideo.innerHTML = "";
    //const sourceCodeButton = document.querySelector(".sourceCodeButton");
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

    // Set YouTube button
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
        type.classList.remove("uniActive");
      });

      const activeType = document.getElementById(
        project.project_type ? project.project_type.toLowerCase() : ""
      );
      if (activeType) {
        activeType.classList.add("uniActive");
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
        inProgress.style.backgroundColor = "#7ec384";
        inProgress.style.color = "#252525";
        complete.style.backgroundColor = "";
        complete.style.color = "";
      } else {
        complete.style.backgroundColor = "#7ec384";
        complete.style.color = "#252525";
        inProgress.style.backgroundColor = "";
        inProgress.style.color = "";
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

// Create the image slideshow
function createImageSlideshow(images) {
  if (!images || images.length === 0) return;

  const slideshowContainer = document.querySelector(".slideshow-container");
  if (!slideshowContainer) return;

  // Clear existing content
  slideshowContainer.innerHTML = "";

  const prevButton = document.createElement("button");
  prevButton.title = "Previous";
  prevButton.className = "prev";
  prevButton.onclick = function () {
    plusSlides(-1);
  };
  prevButton.innerHTML = `
      <img
        src="../../assets/images/icons/prevImage.svg"
        width="30px"
        height="30px"
        alt="Previous picture arrow button."
      />
    `;

  slideshowContainer.appendChild(prevButton);

  // Add slides
  images.forEach((image, index) => {
    const slide = document.createElement("div");
    slide.className = "mySlides1 fade";

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

  // Add navigation buttons

  const nextButton = document.createElement("button");
  nextButton.title = "Next";
  nextButton.className = "next";
  nextButton.onclick = function () {
    plusSlides(1);
  };
  nextButton.innerHTML = `
      <img
        src="../../assets/images/icons/nextImage.svg"
        width="30px"
        height="30px"
        alt="Next picture arrow button."
      />
    `;

  slideshowContainer.appendChild(nextButton);

  // Create dots for navigation
  const dotsContainer = document.getElementById("imageDots1");
  if (dotsContainer) {
    dotsContainer.innerHTML = "";

    images.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.className = "dot1";
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
});

// Check for console errors and log them
window.addEventListener("error", function (event) {
  console.error("Script error detected:", event.error);
});
