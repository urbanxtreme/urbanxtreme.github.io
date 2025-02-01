// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Remove loading screen after all content is loaded
  window.addEventListener("load", () => {
    const loadingScreen = document.querySelector(".loading-screen");
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500);
    }, 1000);
  });

  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1,
    lerp: 0.05,
  });

  // Refresh Locomotive Scroll after all images are loaded
  window.addEventListener("load", () => {
    scroll.update();
  });

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Theme Toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.setAttribute(
      "data-theme",
      body.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
    themeToggle.querySelector("i").classList.toggle("fa-sun");
    themeToggle.querySelector("i").classList.toggle("fa-moon");
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
    });
  });

  // Scroll Progress Bar
  window.addEventListener("scroll", () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-progress-bar").style.width = scrolled + "%";
  });

  // Back to Top Button
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Animate skill progress bars when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target;
          const progress = progressBar.getAttribute("data-progress");
          progressBar.style.transform = `scaleX(${progress / 100})`;
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".progress-bar").forEach((bar) => {
    observer.observe(bar);
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        scroll.scrollTo(target);
      }
    });
  });

  // Form Validation and Submission
  // const contactForm = document.getElementById("contactForm");

  // contactForm.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   // // Basic form validation
  //   // const name = contactForm.querySelector('input[type="text"]').value;
  //   // const email = contactForm.querySelector('input[type="email"]').value;
  //   // const message = contactForm.querySelector("textarea").value;

  //   // if (!name || !email || !message) {
  //   //   alert("Please fill in all fields");
  //   //   return;
  //   // }

  //   // // Email validation
  //   // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   // if (!emailRegex.test(email)) {
  //   //   alert("Please enter a valid email address");
  //   //   return;
  //   // }

  //   // // Here you would typically send the form data to your server
  //   // // For now, we'll just show a success message
  //   // alert("Message sent successfully!");
  //   // contactForm.reset();
  // });

  // Newsletter Form Submission
  const newsletterForm = document.querySelector(".newsletter-form");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });

  // GSAP Animations
  gsap.from(".hero-text h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5,
  });

  gsap.from(".hero-text p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power4.out",
    delay: 0.8,
  });

  gsap.from(".cta-buttons", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power4.out",
    delay: 1.1,
  });
});
