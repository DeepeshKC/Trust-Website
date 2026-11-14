// Phone and WhatsApp controls remain non-clickable until verified numbers are entered in config.js.
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
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "contact-wa-link";
    link.innerHTML = action.innerHTML;
    link.querySelector("span").textContent = "Enquire on WhatsApp";
    action.replaceWith(link);
  }
  const floating = document.getElementById("floating-whatsapp");
  if (floating) {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "floating-whatsapp";
    link.setAttribute("aria-label", "Enquire on WhatsApp");
    link.title = "Enquire on WhatsApp";
    link.innerHTML = floating.innerHTML;
    floating.replaceWith(link);
  }
});
