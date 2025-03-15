// Jadnell H. Reyes Pérez
// March 8th, 2025
// Version: 1.5
// Script that adds fullscreen image viewing capabilities with blur effect to project images

// Create fullscreen container and add to DOM only once
function createFullscreenViewer() {
  // Check if viewer already exists
  if (document.querySelector(".fullscreen-image-viewer")) {
    return;
  }

  // Create container with blur background
  const viewerContainer = document.createElement("div");
  viewerContainer.className = "fullscreen-image-viewer";
  viewerContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(8px);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1001;
      cursor: pointer;
    `;

  // Create image element
  const fullImage = document.createElement("img");
  fullImage.className = "fullscreen-image";
  fullImage.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
      transform: scale(0.95);
      transition: transform 0.3s ease-in;
    `;

  // Add close button
  const closeButton = document.createElement("button");
  closeButton.className = "fullscreen-close";
  closeButton.title = "Close Fullscreen View";
  closeButton.style.cssText = `
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1001;
    `;

  // Create close icon
  const closeIcon = document.createElement("img");
  closeIcon.src = window.location.pathname.includes("/pages/")
    ? "../../assets/images/icons/close.svg"
    : "assets/images/icons/close.svg";
  closeIcon.width = 40;
  closeIcon.height = 40;
  closeIcon.alt = "Close fullscreen view";
  closeIcon.style.display = "block";

  // Add event listeners
  viewerContainer.addEventListener("click", function (e) {
    if (e.target === viewerContainer) {
      closeFullscreenViewer();
    }
  });

  closeButton.addEventListener("click", closeFullscreenViewer);

  // Add ESC key handler
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && viewerContainer.style.display === "flex") {
      closeFullscreenViewer();
    }
  });

  // Append elements
  closeButton.appendChild(closeIcon);
  viewerContainer.appendChild(fullImage);
  viewerContainer.appendChild(closeButton);
  document.body.appendChild(viewerContainer);
}

// Open the fullscreen viewer with the clicked image
function openFullscreenViewer(imgSrc, imgAlt) {
  const viewerContainer = document.querySelector(".fullscreen-image-viewer");
  const fullImage = viewerContainer.querySelector(".fullscreen-image");

  // Set image source and alt text
  fullImage.src = imgSrc;
  fullImage.alt = imgAlt || "Fullscreen image";

  // Display the container
  viewerContainer.style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling

  // Animate image appearance
  setTimeout(() => {
    fullImage.style.transform = "scale(1)";
  }, 30);
}

// Close the fullscreen viewer
function closeFullscreenViewer() {
  const viewerContainer = document.querySelector(".fullscreen-image-viewer");
  const fullImage = viewerContainer.querySelector(".fullscreen-image");

  // Animate image disappearance
  fullImage.style.transform = "scale(0.85)";

  // Hide after animation completes
  setTimeout(() => {
    viewerContainer.style.display = "none";
    document.body.style.overflow = ""; // Re-enable scrolling
  }, 250);
}

// Make project images expandable
function makeImagesExpandable() {
  // Create the fullscreen viewer container
  createFullscreenViewer();

  // Find all project images and make them expandable
  const projectImages = document.querySelectorAll(".projectImages");

  projectImages.forEach((img) => {
    // Add expandable class and cursor style
    img.classList.add("expandable-img");
    img.style.cursor = "pointer";

    // Add click event listener
    img.addEventListener("click", function () {
      openFullscreenViewer(this.src, this.alt);
    });
  });
}

// Initialize when DOM is loaded or after slideshow is created
document.addEventListener("DOMContentLoaded", function () {
  // Create fullscreen viewer
  createFullscreenViewer();

  // Handle images that are already on the page
  makeImagesExpandable();

  // MutationObserver to detect when new images are added via slideshow
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // Check if any project images were added
        const newSlides = document.querySelectorAll(
          ".mySlides img.projectImages:not(.expandable-img)"
        );
        if (newSlides.length > 0) {
          makeImagesExpandable();
        }
      }
    });
  });

  // Observe slideshow container for changes
  const slideshowContainer = document.querySelector(".slideshow-container");
  if (slideshowContainer) {
    observer.observe(slideshowContainer, { childList: true, subtree: true });
  }
});
