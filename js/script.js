document.addEventListener("DOMContentLoaded", () => {
  if (typeof businessConfig === "undefined") {
    console.error("Website configuration was not loaded. Check js/config.js.");
    return;
  }

  const config = businessConfig;
  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element && typeof value === "string") element.textContent = value;
  };

  document.title = config.pageTitle || config.companyName;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && config.metaDescription) metaDescription.content = config.metaDescription;

  const ogTitle = document.getElementById("og-title");
  const ogDescription = document.getElementById("og-description");
  const ogImage = document.getElementById("og-image");
  const favicon = document.getElementById("favicon");
  if (ogTitle) ogTitle.content = config.ogTitle || config.pageTitle || config.companyName;
  if (ogDescription) ogDescription.content = config.ogDescription || config.metaDescription || "";
  if (ogImage) ogImage.content = config.ogImage || config.heroImage || "";
  if (favicon && config.favicon) favicon.href = config.favicon;

  setText("company-name", config.companyName);
  setText("footer-company", config.companyName);
  setText("footer-copyright-name", config.companyName);
  setText("hero-label", config.heroLabel);
  setText("hero-title", config.heroTitle);
  setText("hero-description", config.heroDescription);
  setText("hero-button", config.heroButtonText);
  setText("about-title", config.aboutTitle);
  setText("about-description", config.aboutDescription);
  setText("contact-title", config.contactTitle);
  setText("contact-description", config.contactDescription);
  setText("contact-address", config.address);
  setText("footer-text", config.footerText);
  setText("footer-year", String(new Date().getFullYear()));

  const heroImage = document.querySelector(".hero-image");
  if (heroImage && config.heroImage) {
    heroImage.style.backgroundImage = `url("${config.heroImage}")`;
  }

  const phone = document.getElementById("contact-phone");
  if (phone) phone.textContent = config.phone ? `Phone: ${config.phone}` : "Phone number to be added";
  const email = document.getElementById("contact-email");
  if (email) email.textContent = config.email ? `Email: ${config.email}` : "Email address to be added";
  const contactButton = document.getElementById("contact-button");
  if (contactButton) {
    if (config.email) {
      contactButton.href = `mailto:${config.email}`;
      contactButton.hidden = false;
    } else {
      contactButton.hidden = true;
    }
  }

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }
});
// Make phone number clickable
const phoneElement = document.getElementById("contact-phone");

if (phoneElement) {
  phoneElement.innerHTML =
    '<a href="tel:+9779855059017">+977 985-5059017</a>';
}

// Make email address clickable
const emailElement = document.getElementById("contact-email");

if (emailElement) {
  emailElement.innerHTML =
    '<a href="mailto:bsrgstrust@gmail.com">bsrgstrust@gmail.com</a>';
}

// Update contact button
const contactButton = document.getElementById("contact-button");

if (contactButton) {
  contactButton.href = "mailto:bsrgstrust@gmail.com";
}
