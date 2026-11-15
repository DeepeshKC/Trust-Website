/* ===== SITE CONFIGURATION ===== */
const businessConfig = {
  companyName: "Baa Aama Ghar",
  pageTitle: "Baa Aama Ghar | Accommodation & Elderly Day Care in Bharatpur",
  metaDescription: "Baa Aama Ghar in Bharatpur, Chitwan offers welcoming accommodation, elderly day care, companionship and spiritual activities. Contact us to enquire.",
  ogTitle: "Baa Aama Ghar | Accommodation & Elderly Day Care in Bharatpur",
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
  phone: "+97756512513", // Accommodation landline: local 056-512513
  generalPhone: "+97756512513", // General enquiries landline: local 056-512513
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
    if (element && typeof value === "string" && !element.querySelector("[data-translation-id]")) element.textContent = value;
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
    a.textContent = digits(number) === "97756512513" ? "056-512513" : number;
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


/* ===== BILINGUAL CONTENT (EN / नेपाली) ===== */
const siteTranslations = [
  {
    "en": "Skip to content",
    "ne": "मुख्य सामग्रीमा जानुहोस्"
  },
  {
    "en": "Home",
    "ne": "गृहपृष्ठ"
  },
  {
    "en": "About",
    "ne": "हाम्रो बारेमा"
  },
  {
    "en": "Accommodation",
    "ne": "आवास"
  },
  {
    "en": "Activities",
    "ne": "गतिविधिहरू"
  },
  {
    "en": "Contact",
    "ne": "सम्पर्क"
  },
  {
    "en": "BAA AAMA GHAR · BHARATPUR, CHITWAN",
    "ne": "बा आमा घर · भरतपुर, चितवन"
  },
  {
    "en": "A Peaceful Stay. A Feeling of Home.",
    "ne": "शान्त बसाइ, घरजस्तै आत्मीयता।"
  },
  {
    "en": "A welcoming space for comfortable accommodation, meaningful companionship, and spiritual well-being in the heart of Bharatpur.",
    "ne": "भरतपुरको मुटुमा आरामदायी आवास, आत्मीय साथ र आध्यात्मिक शान्तिको अनुभूति प्रदान गर्ने स्वागतपूर्ण थलो।"
  },
  {
    "en": "Enquire About a Stay",
    "ne": "बसाइबारे जानकारी लिनुहोस्"
  },
  {
    "en": "ABOUT BAA AAMA GHAR",
    "ne": "बा आमा घरको परिचय"
  },
  {
    "en": "A Place of Comfort, Connection, and Belonging",
    "ne": "आराम, आत्मीयता र अपनत्वको थलो"
  },
  {
    "en": "A quiet corner of Baa Aama Ghar",
    "ne": "बा आमा घरको एक शान्त कुनो"
  },
  {
    "en": "Located in Bharatpur, Chitwan, Baa Aama Ghar (बा आमा घर) is a welcoming space dedicated to comfort, companionship, and spiritual well-being.",
    "ne": "चितवनको भरतपुरमा अवस्थित बा आमा घर आराम, आत्मीय साथ र आध्यात्मिक कल्याणका लागि समर्पित स्वागतपूर्ण थलो हो।"
  },
  {
    "en": "More than a place to stay, Baa Aama Ghar brings together affordable visitor accommodation, elderly day care, and opportunities for spiritual reflection under one roof.",
    "ne": "बा आमा घर बस्ने ठाउँ मात्र होइन। यहाँ एउटै छानामुनि आगन्तुकका लागि सुलभ आवास, ज्येष्ठ नागरिकका लागि दिवा सेवा र आध्यात्मिक चिन्तनका अवसर उपलब्ध छन्।"
  },
  {
    "en": "With a peaceful, homelike atmosphere, it offers older adults a place to connect, participate in meaningful daily activities, and feel valued and supported. Visitors and pilgrims can also enjoy a comfortable stay in an environment shaped by care, respect, and a sense of belonging.",
    "ne": "शान्त र घरजस्तै आत्मीय वातावरणमा ज्येष्ठ नागरिकहरूले एकअर्कासँग भेटघाट गर्न, अर्थपूर्ण दैनिक गतिविधिमा सहभागी हुन र सम्मान तथा साथको अनुभूति गर्न सक्छन्। आगन्तुक तथा तीर्थयात्रीहरूले पनि स्नेह, सम्मान र अपनत्वले भरिएको वातावरणमा आरामदायी बसाइको अनुभव गर्न सक्छन्।"
  },
  {
    "en": "Baa Aama Ghar is operated by",
    "ne": "बा आमा घरको सञ्चालन"
  },
  {
    "en": ", a nonprofit organization committed to community well-being.",
    "ne": "ले गर्दछ। यो समुदायको हित र कल्याणमा समर्पित गैरनाफामूलक संस्था हो।"
  },
  {
    "en": "Nagarban Marga, Bharatpur Metropolitan City–3, Chitwan, Nepal",
    "ne": "नगरवन मार्ग, भरतपुर महानगरपालिका–३, चितवन, नेपाल"
  },
  {
    "en": "A welcoming place in Bharatpur, Chitwan",
    "ne": "भरतपुर, चितवनमा तपाईंलाई स्वागत गर्ने थलो"
  },
  {
    "en": "ACCOMMODATION",
    "ne": "आवास"
  },
  {
    "en": "A Peaceful Place to Rest and Feel at Home",
    "ne": "विश्राम गर्न र घरजस्तै आत्मीयता अनुभव गर्न सकिने शान्त ठाउँ"
  },
  {
    "en": "Discover a comfortable and welcoming stay at Baa Aama Ghar, located in Bharatpur, Chitwan.",
    "ne": "चितवनको भरतपुरमा रहेको बा आमा घरमा आरामदायी र आत्मीय बसाइको अनुभव गर्नुहोस्।"
  },
  {
    "en": "Whether you're visiting for a spiritual journey, spending time with family, or simply seeking a peaceful environment, our accommodation offers a homelike setting where you can relax and feel at ease.",
    "ne": "आध्यात्मिक यात्रामा आउनुभएको होस्, परिवारसँग समय बिताउन चाहनुभएको होस् वा शान्त वातावरण खोजिरहनुभएको होस्, हाम्रो आवासले तपाईंलाई ढुक्कसँग विश्राम गर्न सकिने घरजस्तै आत्मीय परिवेश प्रदान गर्दछ।"
  },
  {
    "en": "For room availability, rates, and reservations, please contact us directly. Our team will be happy to assist you.",
    "ne": "कोठाको उपलब्धता, शुल्क तथा आरक्षणसम्बन्धी जानकारीका लागि कृपया हामीलाई सीधै सम्पर्क गर्नुहोस्। तपाईंलाई सहयोग गर्न हामी सधैँ तत्पर छौँ।"
  },
  {
    "en": "Enquire About a Stay",
    "ne": "बसाइबारे जानकारी लिनुहोस्"
  },
  {
    "en": "Guest Guidelines",
    "ne": "अतिथिका लागि नियमहरू"
  },
  {
    "en": "To maintain the peaceful and spiritually welcoming atmosphere of Baa Aama Ghar, we kindly request that all guests respect the following guidelines:",
    "ne": "बा आमा घरको शान्त र आध्यात्मिक वातावरण कायम राख्न सबै अतिथिहरूलाई निम्न नियमहरूको पालना गरिदिन विनम्र अनुरोध गर्दछौँ:"
  },
  {
    "en": "Only vegetarian food is permitted on the premises.",
    "ne": "परिसरभित्र शाकाहारी भोजन मात्र अनुमति छ।"
  },
  {
    "en": "Alcohol is strictly prohibited on the premises.",
    "ne": "परिसरभित्र मदिरा सेवन तथा ल्याउन पूर्ण रूपमा निषेध गरिएको छ।"
  },
  {
    "en": "Thank you for helping us maintain a comfortable and respectful environment for everyone.",
    "ne": "सबैका लागि सहज र सम्मानजनक वातावरण कायम राख्न सहयोग गर्नुभएकोमा धन्यवाद।"
  },
  {
    "en": "CARE & SPIRITUAL WELL-BEING",
    "ne": "ज्येष्ठ नागरिकको हेरचाह तथा आध्यात्मिक कल्याण"
  },
  {
    "en": "A Place to Connect, Reflect, and Belong",
    "ne": "भेटघाट, आत्मचिन्तन र अपनत्वको थलो"
  },
  {
    "en": "Our elderly day care offers a homelike place for older adults to share meaningful moments, build connections, and enjoy daily engagement. Quiet spaces for spiritual reflection bring another sense of peace and belonging.",
    "ne": "हाम्रो ज्येष्ठ नागरिक दिवा सेवाले उहाँहरूलाई आत्मीय वातावरणमा सँगै समय बिताउन, सम्बन्ध गाँस्न र दैनिक गतिविधिमा रमाउन अवसर प्रदान गर्दछ। आध्यात्मिक चिन्तनका लागि उपलब्ध शान्त स्थानहरूले थप शान्ति र अपनत्वको अनुभूति गराउँछन्।"
  },
  {
    "en": "A PLACE TO PAUSE",
    "ne": "एकछिन थामिएर मनन गर्ने ठाउँ"
  },
  {
    "en": "Room for reflection. Space for connection.",
    "ne": "चिन्तनका लागि शान्ति। आत्मीयताका लागि स्थान।"
  },
  {
    "en": "Companionship & Connection",
    "ne": "साथ र आत्मीय सम्बन्ध"
  },
  {
    "en": "A welcoming environment where older adults can spend meaningful time together.",
    "ne": "ज्येष्ठ नागरिकहरूले एकअर्कासँग आत्मीय र अर्थपूर्ण समय बिताउन सक्ने स्वागतपूर्ण वातावरण।"
  },
  {
    "en": "Daily Engagement",
    "ne": "दैनिक सहभागिता"
  },
  {
    "en": "Everyday activities that encourage mental and emotional well-being.",
    "ne": "मानसिक तथा भावनात्मक सुस्वास्थ्यलाई प्रोत्साहन गर्ने दैनिक गतिविधिहरू।"
  },
  {
    "en": "Spiritual Reflection",
    "ne": "आध्यात्मिक चिन्तन"
  },
  {
    "en": "A peaceful atmosphere for spiritual awareness and personal reflection.",
    "ne": "आध्यात्मिक चेतना र आत्मचिन्तनका लागि शान्त वातावरण।"
  },
  {
    "en": "OUR VALUES",
    "ne": "हाम्रा मूल्य–मान्यता"
  },
  {
    "en": "Rooted in Care, Guided by Compassion",
    "ne": "सेवाभावमा आधारित, करुणाबाट प्रेरित"
  },
  {
    "en": "At Baa Aama Ghar, we believe that a welcoming environment begins with kindness, respect, and a genuine sense of belonging. These values guide how we care for older adults and welcome every visitor.",
    "ne": "बा आमा घरमा हामी विश्वास गर्छौँ—आत्मीय वातावरणको सुरुवात दयाभाव, सम्मान र अपनत्वबाट हुन्छ। यही मूल्य–मान्यताले ज्येष्ठ नागरिकको हेरचाह गर्ने र प्रत्येक आगन्तुकलाई स्वागत गर्ने हाम्रो व्यवहारलाई मार्गदर्शन गर्छ।"
  },
  {
    "en": "Comfort & Belonging",
    "ne": "आराम र अपनत्व"
  },
  {
    "en": "Creating a warm, homelike atmosphere where everyone feels welcomed, valued, and at ease.",
    "ne": "सबैले स्वागत, सम्मान र सहजताको अनुभूति गर्न सक्ने न्यानो, घरजस्तै वातावरण सिर्जना गर्नु।"
  },
  {
    "en": "Dignity & Respect",
    "ne": "गरिमा र सम्मान"
  },
  {
    "en": "Treating every individual with kindness, understanding, and respect for their personal needs and beliefs.",
    "ne": "हरेक व्यक्तिको आवश्यकता र आस्थालाई बुझ्दै दयाभाव र सम्मानका साथ व्यवहार गर्नु।"
  },
  {
    "en": "Companionship & Connection",
    "ne": "साथ र आत्मीय सम्बन्ध"
  },
  {
    "en": "Encouraging meaningful relationships, shared experiences, and a sense of community.",
    "ne": "अर्थपूर्ण सम्बन्ध, साझा अनुभव र सामुदायिक भावनालाई प्रोत्साहन गर्नु।"
  },
  {
    "en": "Peace & Spiritual Well-Being",
    "ne": "शान्ति र आध्यात्मिक कल्याण"
  },
  {
    "en": "Nurturing a calm and supportive environment where individuals can find peace, reflect, and connect with their spiritual beliefs.",
    "ne": "व्यक्तिले मनको शान्ति पाउन, आत्मचिन्तन गर्न र आफ्नो आध्यात्मिक आस्थासँग जोडिन सक्ने सहयोगी वातावरण निर्माण गर्नु।"
  },
  {
    "en": "CONTACT & RESERVATIONS",
    "ne": "सम्पर्क तथा आरक्षण"
  },
  {
    "en": "We'd Be Happy to Welcome You",
    "ne": "तपाईंलाई स्वागत गर्न पाउँदा हामीलाई खुसी लाग्नेछ।"
  },
  {
    "en": "Planning a visit or looking for a peaceful place to stay in Bharatpur? Whether you're enquiring about accommodation, elderly day care, or visiting Baa Aama Ghar, we're here to help.",
    "ne": "भरतपुर भ्रमणको योजना बनाउँदै हुनुहुन्छ वा शान्त ठाउँमा बस्न चाहनुहुन्छ? आवास, ज्येष्ठ नागरिक दिवा सेवा वा बा आमा घरको भ्रमणसम्बन्धी जुनसुकै जानकारीका लागि हामीलाई सम्पर्क गर्न सक्नुहुन्छ।"
  },
  {
    "en": "For room availability, rates, and reservations, contact us by phone, WhatsApp, or email.",
    "ne": "कोठाको उपलब्धता, शुल्क र आरक्षणका लागि फोन, ह्वाट्सएप वा इमेलमार्फत सम्पर्क गर्नुहोस्।"
  },
  {
    "en": "Visit us",
    "ne": "हाम्रो ठेगाना"
  },
  {
    "en": "Nagarban Marga, Bharatpur Metropolitan City–3, Chitwan, Nepal",
    "ne": "नगरवन मार्ग, भरतपुर महानगरपालिका–३, चितवन, नेपाल"
  },
  {
    "en": "Accommodation phone",
    "ne": "आवाससम्बन्धी फोन"
  },
  {
    "en": "General enquiries",
    "ne": "सामान्य सोधपुछ"
  },
  {
    "en": "Email",
    "ne": "इमेल"
  },
  {
    "en": "Email for Reservations",
    "ne": "आरक्षणका लागि इमेल गर्नुहोस्"
  },
  {
    "en": "Enquire on WhatsApp",
    "ne": "ह्वाट्सएपमा सोधपुछ गर्नुहोस्"
  },
  {
    "en": "Get Directions",
    "ne": "यहाँ आउने बाटो हेर्नुहोस्"
  },
  {
    "en": "Operated by BSRGS Trust",
    "ne": "बुद्धि मान स्मृति रामहरि गड्गादेवी श्रेष्ठ परोपकार ट्रस्टद्वारा सञ्चालित"
  }
];
const siteAttributeTranslations = [
  {
    "id": 0,
    "en": "Baa Aama Ghar home",
    "ne": "बा आमा घरको गृहपृष्ठ"
  },
  {
    "id": 1,
    "en": "Open navigation",
    "ne": "नेभिगेसन खोल्नुहोस्"
  },
  {
    "id": 2,
    "en": "Main navigation",
    "ne": "मुख्य नेभिगेसन"
  },
  {
    "id": 3,
    "en": "Baa Aama Ghar building in Bharatpur",
    "ne": "भरतपुरस्थित बा आमा घरको भवन"
  },
  {
    "id": 4,
    "en": "Prayer shrine in the Baa Aama Ghar courtyard",
    "ne": "बा आमा घरको प्राङ्गणमा रहेको पूजास्थल"
  },
  {
    "id": 5,
    "en": "Baa Aama Ghar exterior in Bharatpur",
    "ne": "भरतपुरस्थित बा आमा घरको बाहिरी दृश्य"
  },
  {
    "id": 6,
    "en": "Religious figures within the Baa Aama Ghar shrine",
    "ne": "बा आमा घरको पूजास्थलमा रहेका धार्मिक प्रतिमाहरू"
  },
  {
    "id": 7,
    "en": "Enquire on WhatsApp",
    "ne": "ह्वाट्सएपमा सोधपुछ गर्नुहोस्"
  },
  {
    "id": 8,
    "en": "Baa Aama Ghar location",
    "ne": "बा आमा घरको स्थान"
  },
  {
    "id": 9,
    "en": "Enquire on WhatsApp",
    "ne": "ह्वाट्सएपमा सोधपुछ गर्नुहोस्"
  },
  {
    "id": 10,
    "en": "Enquire on WhatsApp",
    "ne": "ह्वाट्सएपमा सोधपुछ गर्नुहोस्"
  }
];

function setSiteLanguage(language) {
  const lang = language === 'ne' ? 'ne' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-translation-id]').forEach(el => {
    const entry = siteTranslations[Number(el.dataset.translationId)];
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll('[data-i18n-attr-alt], [data-i18n-attr-aria-label], [data-i18n-attr-title]').forEach(el => {
    ['alt','aria-label','title'].forEach(attr => {
      const index = el.getAttribute('data-i18n-attr-' + attr);
      if (index !== null) {
        const entry = siteAttributeTranslations[Number(index)];
        if (entry) el.setAttribute(attr,entry[lang]);
      }
    });
  });
  document.querySelectorAll('.language-option').forEach(button => {
    const active = button.dataset.lang === lang;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('active', active);
  });
  const ne = lang === 'ne';
  const trustNameEn = 'Buddhi Man Smriti Ramhari Gangadevi Shrestha Paropakar Trust';
  const trustNameNe = 'बुद्धि मान स्मृति रामहरि गड्गादेवी श्रेष्ठ परोपकार ट्रस्ट';
  const translatedFields = {
    'company-name': ['Baa Aama Ghar', 'बा आमा घर'],
    'footer-company': ['Baa Aama Ghar', 'बा आमा घर'],
    'footer-copyright-name': ['Baa Aama Ghar', 'बा आमा घर'],
    'footer-text': [trustNameEn, trustNameNe],
    'about-trust-name': [trustNameEn + ' (BSRGS Trust)', trustNameNe],
    'footer-rights': ['. All rights reserved.', '। सर्वाधिकार सुरक्षित।'],
    'footer-brand-mark': ['B', 'बा']
  };
  Object.entries(translatedFields).forEach(([id, values]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = values[ne ? 1 : 0];
  });
  const title = ne ? 'बा आमा घर | बुद्धि मान स्मृति रामहरि गड्गादेवी श्रेष्ठ परोपकार ट्रस्ट – भरतपुर, चितवन' : businessConfig.pageTitle;
  const desc = ne ? 'भरतपुर, चितवनस्थित बा आमा घरमा सुलभ आवास, ज्येष्ठ नागरिक दिवा सेवा, आत्मीय साथ र आध्यात्मिक शान्तिको वातावरण। बुद्धि मान स्मृति रामहरि गड्गादेवी श्रेष्ठ परोपकार ट्रस्टद्वारा सञ्चालित।' : businessConfig.metaDescription;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',desc);
  document.getElementById('og-title')?.setAttribute('content',title);
  document.getElementById('og-description')?.setAttribute('content',desc);
  // Existing WhatsApp URL remains a working, pre-filled accommodation enquiry.
  const waText = ne
    ? 'नमस्ते बा आमा घर, मलाई आवासबारे जानकारी चाहिएको छ।\nआगमन मिति: \nप्रस्थान मिति: \nअतिथि सङ्ख्या: \nकृपया कोठाको उपलब्धता र शुल्क बताइदिनुहोला। धन्यवाद।'
    : 'Hello Baa Aama Ghar, I would like to enquire about accommodation.\nCheck-in date: \nCheck-out date: \nNumber of guests: \nPlease share availability and rates. Thank you.';
  const url = 'https://wa.me/9779855059017?text=' + encodeURIComponent(waText);
  for (const id of ['whatsapp-action','floating-whatsapp']) {
    const el = document.getElementById(id);
    if (el) { el.href = url; el.setAttribute('aria-label',ne?'ह्वाट्सएपमा सोधपुछ गर्नुहोस्':'Enquire on WhatsApp'); }
  }
  const label = document.querySelector('#whatsapp-action span');
  if (label) label.textContent = ne ? 'ह्वाट्सएपमा सोधपुछ गर्नुहोस्' : 'Enquire on WhatsApp';
  const chair = document.querySelector('.chairperson-feature figcaption span');
  if (chair) chair.textContent = ne ? 'अध्यक्ष' : 'Chairperson';
  const menu = document.getElementById('menu-toggle');
  if (menu) menu.setAttribute('aria-label',ne?'नेभिगेसन खोल्नुहोस्':'Open navigation');
  try { localStorage.setItem('baaAamaLanguage',lang); } catch(e) {}
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.language-option').forEach(btn => btn.addEventListener('click', () => setSiteLanguage(btn.dataset.lang)));
  let stored = 'en';
  try { stored = localStorage.getItem('baaAamaLanguage') || 'en'; } catch(e) {}
  setSiteLanguage(stored);
});
