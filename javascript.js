// Toggle mobile menu with animation
const menuIcon = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar ul li a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  // Add a slight fade-in animation when menu opens
  if (navbar.classList.contains("active")) {
    navbar.style.animation = "fadeIn 0.5s ease-in-out";
  } else {
    navbar.style.animation = "fadeOut 0.5s ease-in-out";
  }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });

      // Highlight the selected section in the navigation
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    }

    // Close menu after clicking a link (for mobile view)
    if (window.innerWidth < 768) {
      navbar.classList.remove("active");
    }
  });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.style.animation = "fadeIn 0.5s ease-in-out";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Decorative hover effects for nav links
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#ff6347"; // Change color on hover
    link.style.transform = "scale(1.1)"; // Enlarge slightly
  });

  link.addEventListener("mouseout", () => {
    link.style.color = ""; // Reset color
    link.style.transform = "scale(1)"; // Reset scale
  });
});
