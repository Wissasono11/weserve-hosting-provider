// Hamburger menu functionality
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const closeSidebar = document.getElementById("close-sidebar");

// Open sidebar
hamburgerBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("translate-x-full");
  sidebarOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// Close sidebar when clicking close button
closeSidebar.addEventListener("click", () => {
  mobileSidebar.classList.add("translate-x-full");
  sidebarOverlay.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Close sidebar when clicking overlay
sidebarOverlay.addEventListener("click", () => {
  mobileSidebar.classList.add("translate-x-full");
  sidebarOverlay.classList.add("hidden");
  document.body.style.overflow = "auto";
});

// Close sidebar when window is resized to large screen
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileSidebar.classList.add("translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});

// Close sidebar when clicking on navigation links
const sidebarLinks = document.querySelectorAll("#mobile-sidebar a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileSidebar.classList.add("translate-x-full");
    sidebarOverlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  });
});
