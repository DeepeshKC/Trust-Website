# BSRG Trust Website

A responsive nonprofit organization website built with plain HTML, CSS and JavaScript.

## Main sections
- Home
- About the Trust
- Our Activities
- Accommodation
- Contact

## Activities represented
- Elderly day care
- Religious and community activities
- Affordable accommodation for pilgrims and visitors

The accommodation capacity is described as an approximate planning estimate of 15 rooms and should be confirmed before publication.

## Project structure
```text
bsrg-trust-website/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   └── script.js
└── images/
    └── favicon.svg
```

## Customize the website
Most text, contact details, SEO metadata, social-sharing details and image settings are in `js/config.js`.

- Update `companyName`, titles and descriptions.
- Add the Trust's confirmed phone number and email address.
- Replace `heroImage` and `ogImage` with approved photographs.
- Update `favicon` if replacing the included placeholder icon.
- Confirm the accommodation room count, rates, facilities and availability before publishing.

Design and layout are in `css/style.css`. Interactive behaviour and configuration application are in `js/script.js`.

## Run locally
Open `index.html` in a browser. For best results, use a local development server or deploy the folder to a static hosting service.

## Important
- The current images are remote illustrative placeholders, not photographs of the Trust or its premises.
- Do not publish unverified claims, room counts, prices, opening hours, contact details or services.
- The contact button remains hidden until an email address is added in `js/config.js`.
- This is a static website; it does not include a booking system, online payment, or server-side contact form.


## Website Information

**Website:** Baa Aama Ghar  
**Organization:** BSRG Trust  
**Location:** Bharatpur–3, Chitwan, Nepal

This repository contains the official website for Baa Aama Ghar,
operated by Buddhiman Smriti Ramhari Gangadevi Shrestha
Philanthropic Trust.

The website includes information about elderly day care,
religious and spiritual activities, and accommodation for visitors.

### Deployment

The website is hosted using Cloudflare Workers.

Planned domain: https://baa-aama-ghar.com.np

### Website Features

- Responsive website design
- English-language content
- Google Maps integration
- Contact information
- Social-sharing metadata

