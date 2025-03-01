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

    console.log("Fetching projects from:", jsonPath);
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
  console.log("Loading details for project ID:", projectId);

  // Convert projectId to string before storing (sessionStorage only stores strings)
  sessionStorage.setItem("selectedProjectId", projectId.toString());

  // Log what was stored
  console.log(
    "Stored in sessionStorage:",
    sessionStorage.getItem("selectedProjectId")
  );

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

// Populate the project details page using the template
async function loadProjectDetailsPage() {
  try {
    const projectId = sessionStorage.getItem("selectedProjectId");
    console.log("Retrieved from sessionStorage:", projectId);

    if (!projectId) {
      console.error("No project ID found in sessionStorage");
      // Redirect back to main page if no project was selected
      window.location.href = "../../index.html";
      return;
    }

    const projects = await fetchProjects();
    console.log("All projects:", projects);
    console.log("Looking for project with ID:", parseInt(projectId));

    const project = projects.find((p) => {
      console.log("Comparing with project:", p.project_id, typeof p.project_id);
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
    const sourceCodeButton = document.querySelector(".sourceCodeButton");
    if (sourceCodeButton && project.project_source_code) {
      sourceCodeButton.onclick = function () {
        window.location.href = project.project_source_code;
      };
    } else if (sourceCodeButton) {
      sourceCodeButton.style.display = "none";
    }

    // Set YouTube button
    const youtubeButton = document.querySelector(".youtubeButton");
    if (youtubeButton && project.project_video_url) {
      youtubeButton.onclick = function () {
        window.location.href = project.project_video_url;
      };
    } else if (youtubeButton) {
      youtubeButton.style.display = "none";
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
