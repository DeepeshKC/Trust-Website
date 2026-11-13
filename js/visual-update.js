/* BSRG visual enhancement: preserves existing IDs and config behavior. */
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const heroImage = hero?.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.backgroundImage = "url('/images/3.jpeg')";
    heroImage.setAttribute('aria-label', 'BSRG Trust building and courtyard in Bharatpur');
  }
  const about = document.querySelector('.intro-grid');
  if (about && !document.querySelector('.chairperson-feature')) {
    const figure = document.createElement('figure');
    figure.className = 'chairperson-feature';
    figure.innerHTML = '<img src="/images/1.jpeg" alt="Ramhari Shrestha standing in the Trust courtyard" loading="lazy"><figcaption><strong>Ramhari Shrestha</strong><span>Chairperson</span></figcaption>';
    about.insertAdjacentElement('afterend', figure);
  }
  const activityImages = document.querySelectorAll('.activity-card img');
  if (activityImages[1]) { activityImages[1].src='/images/2.jpeg'; activityImages[1].alt='Radha-Krishna shrine at the Trust'; }
  const stayPhoto = document.querySelector('.stay-photo');
  // The building is authentic; do not depict it as a confirmed guest room.
  if (stayPhoto) { stayPhoto.style.backgroundImage="url('/images/3.jpeg')"; stayPhoto.setAttribute('aria-label','Exterior of the Trust building'); }
});
/* Google Maps Section */

.trust-map {
  margin-top: 80px;
  text-align: center;
}

.map-heading {
  max-width: 650px;
  margin: 0 auto 32px;
}

.map-heading h2 {
  margin-bottom: 12px;
}

.map-heading p:last-child {
  color: #756d68;
}

.map-frame {
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid #e7dfd4;
  box-shadow: 0 12px 35px rgba(0,0,0,.07);
}

.map-frame iframe {
  display: block;
  width: 100%;
  height: 400px;
}

.map-button {
  margin-top: 28px;
}

@media (max-width: 680px) {
  .trust-map {
    margin-top: 55px;
  }

  .map-frame iframe {
    height: 300px;
  }
}
