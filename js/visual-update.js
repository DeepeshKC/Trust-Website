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
