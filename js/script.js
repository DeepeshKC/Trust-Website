/* ===== SITE CONFIGURATION ===== */
const businessConfig = {
  companyName: "Baa Aama Ghar",
  pageTitle: "Baa Aama Ghar | BSRGS Trust – Bharatpur, Chitwan",
  metaDescription: "Discover Baa Aama Ghar in Bharatpur, Chitwan. Affordable accommodation, elderly day care, companionship and spiritual well-being, operated by BSRGS Trust.",
  ogTitle: "Baa Aama Ghar | BSRGS Trust – Bharatpur, Chitwan",
  ogDescription: "A peaceful stay and a feeling of home in Bharatpur, Chitwan. Accommodation, elderly day care and spiritual well-being.",
  ogImage: "https://trust-website.deepeshkc.workers.dev/images/baa-aama-ghar-social.png",
  favicon: "/images/favicon.svg",
  heroLabel: "BAA AAMA GHAR · BHARATPUR, CHITWAN",
  heroTitle: "A Peaceful Stay. A Feeling of Home.",
  heroDescription: "A welcoming space for comfortable accommodation, meaningful companionship, and spiritual well-being in the heart of Bharatpur.",
  heroButtonText: "Enquire About a Stay",
  heroImage: "/images/3.jpeg",
  aboutTitle: "A Place of Comfort, Connection, and Belonging",
  aboutDescription: "Located in Bharatpur, Chitwan, Baa Aama Ghar (बा आमा घर) is a welcoming space dedicated to comfort, companionship, and spiritual well-being.",
  contactTitle: "We'd Be Happy to Welcome You",
  contactDescription: "Planning a visit or looking for a peaceful place to stay in Bharatpur? Whether you're enquiring about accommodation, elderly day care, or visiting Baa Aama Ghar, we're here to help.",
  address: "Nagarban Marga, Bharatpur Metropolitan City–3, Chitwan, Nepal",
  phone: "+97756512513", // Accommodation landline
  generalPhone: "+97756512513", // General enquiries landline
  whatsappNumber: "+9779855059017", // WhatsApp enquiries
  email: "bsrgstrust@gmail.com",
  footerText: "Buddhi Man Smriti Ramhari Gangadevi Shrestha Paropakar Trust",
  socialMedia: { facebook: "", instagram: "", youtube: "" }
};


/* ===== MAIN INTERACTIONS ===== */
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

  const email = document.getElementById("contact-email");
  if (email && config.email) {
    email.textContent = config.email;
    email.href = `mailto:${config.email}`;
  }
  const contactButton = document.getElementById("contact-button");
  if (contactButton) {
    if (config.email) {
      const subject = "Accommodation Enquiry – Baa Aama Ghar";
      const body = "Hello Baa Aama Ghar,\\n\\nI would like to enquire about accommodation.\\n\\nCheck-in date: \\nCheck-out date: \\nNumber of guests: \\nPreferred room type (if any): \\n\\nPlease share room availability and rates.\\n\\nThank you.";
      contactButton.href = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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


/* ===== VISUAL ENHANCEMENTS ===== */
/* BSRG visual enhancement: preserves existing IDs and config behavior. */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImage = hero?.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.backgroundImage = "url('/images/3.jpeg')";
    heroImage.setAttribute('aria-label', 'Baa Aama Ghar building and courtyard in Bharatpur');
  }
  const about = document.querySelector('.intro-grid');
  if (about && !document.querySelector('.chairperson-feature')) {
    const figure = document.createElement('figure');
    figure.className = 'chairperson-feature';
    figure.innerHTML = '<img src="/images/1.jpeg" alt="Ramhari Shrestha standing in the Trust courtyard" loading="lazy"><figcaption><strong>Ramhari Shrestha</strong><span>Chairperson</span></figcaption>';
    about.insertAdjacentElement('afterend', figure);
  }
});


/* ===== CONTACT & WHATSAPP ===== */
// Contact and WhatsApp links use the numbers configured above.
document.addEventListener("DOMContentLoaded", () => {
  if (typeof businessConfig === "undefined") return;
  const config = businessConfig;
  const digits = (value) => String(value || "").replace(/\D/g, "");
  const valid = (value) => /^\+?[1-9]\d{7,14}$/.test(String(value || "").replace(/[\s()-]/g, ""));
  const phone = (id, number) => {
    const el = document.getElementById(id);
    if (!el || !valid(number)) return;
    const a = document.createElement("a");
    a.href = "tel:+" + digits(number);
    a.textContent = number;
    el.replaceWith(a);
    a.id = id;
  };
  phone("contact-phone", config.phone);
  phone("general-phone", config.generalPhone);
  if (!valid(config.whatsappNumber)) return;
  const message = "Hello Baa Aama Ghar, I would like to enquire about accommodation.\nCheck-in date: \nCheck-out date: \nNumber of guests: \nPlease share availability and rates. Thank you.";
  const url = "https://wa.me/" + digits(config.whatsappNumber) + "?text=" + encodeURIComponent(message);
  const action = document.getElementById("whatsapp-action");
  if (action) {
    action.href = url;
    action.setAttribute("aria-label", "Enquire on WhatsApp");
    const label = action.querySelector("span");
    if (label) label.textContent = "Enquire on WhatsApp";
  }
  const floating = document.getElementById("floating-whatsapp");
  if (floating) {
    floating.href = url;
    floating.setAttribute("aria-label", "Enquire on WhatsApp");
    floating.title = "Enquire on WhatsApp";
  }
});
