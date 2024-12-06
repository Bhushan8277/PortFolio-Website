
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


navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      navLinks.forEach(l => l.classList.remove("active-link"));
      link.classList.add("active-link");
    }
    if (window.innerWidth < 768) {
      navbar.classList.remove("active");
    }
  });
});

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


navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "#ff6347";
    link.style.transform = "scale(1.1)";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
    link.style.transform = "scale(1)";
  });
});
