/**
 * Portfolio Hero Interactive Logic
 * Handles smooth scrolling, 3D card tilt, spotlight mouse tracking, 
 * typewriter role rotation, language switcher, and responsive pill navigation.
 */

const translations = {
  en: {
    roleTitle: "Web Developer",
    navHome: "Home",
    navWork: "Work",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navLetsTalk: "Let's Talk",
    navGetInTouch: "Get In Touch",
    availability: "Available for full time or freelance",
    heroGreetingPrefix: "Hello, I'm",
    heroBio: "I'm a web developer with a focus on creating functional and user-friendly web applications.",
    btnWork: "View Projects",
    btnContact: "Get In Touch",
    metric1: "Projects Built",
    metric2: "Years Experience",
    metric3: "% Client Satisfaction",
    badge1: "React & Laravel Stack",
    badge2: "Full-Stack Developer",
    cardSubtitle: "Core Tech Stack",
    cardTitle: "React & Laravel Development",
    quoteText: '"Building clean & user-friendly web experiences."',
    quoteDetails: "Details →",
    secWorkBadge: "Selected Work",
    secWorkTitle: "Featured Projects",
    btnViewAllGithub: "View All Repositories",
    linkGithub: "GitHub Repo",
    linkDemo: "Live Project",
    p1Badge: "React & CSS App",
    p1Title: "Tomato Timers — Pomodoro Focus App",
    p1Desc: "A Pomodoro timer web application with customizable work and break sessions, task management, and a minimalist productivity-focused interface built using React and CSS.",
    p2Badge: "Rental & CRM App",
    p2Title: "Rental Management Web Application",
    p2Desc: "A rental management web application featuring client management, item tracking, payment status, return dates, and real-time dashboard statistics built using HTML, CSS, JavaScript, Firebase, and Cloudinary.",
    p3Badge: "Laravel & PHP",
    p3Title: "Project Management Web Application",
    p3Desc: "A project management web application for organizing projects, tasks, team members, and progress tracking built using Laravel, Blade, MySQL, and Bootstrap.",
    secAboutBadge: "Biography & Background",
    secAboutTitle: "About Hassan Abelhad",
    secAboutDesc: "Full-Stack Developer based in Morocco • Hassan II University Graduate",
    aboutCardTitle: "Background & Experience",
    aboutTextP1: "I'm a Full-Stack Developer from Morocco with a Professional Bachelor's degree in Full-Stack Development & DevOps from Hassan II University. I build responsive and practical web applications using HTML, CSS, JavaScript, PHP, Laravel, React, and SQL.",
    aboutTextP2: "Through academic projects and professional internships, I've gained experience developing modern user interfaces, Shopify stores, and WordPress websites. I enjoy building web solutions while continuously expanding my technical skills.",
    aboutLocation: "Morocco",
    aboutDegree: "Full-Stack & DevOps",
    aboutUniv: "Hassan II University",
    aboutCard1Title: "Education & Degree",
    aboutCard1Desc: "Professional Bachelor's degree in Full-Stack Development & DevOps from Hassan II University.",
    aboutCard2Title: "Core Tech Stack",
    aboutCard2Desc: "HTML, CSS, JavaScript, PHP, Laravel, React, and SQL for clean full-stack web applications.",
    aboutCard3Title: "UI & E-Commerce",
    aboutCard3Desc: "Experience building modern user interfaces, Shopify stores, and custom WordPress websites.",
    
    // Capabilities Section
    secCapabilitiesBadge: "Technical Skills",
    secCapabilitiesTitle: "Technical Skills & Stack",
    secCapabilitiesDesc: "Core technical expertise, programming languages, frameworks, and modern toolsets used to build responsive web applications.",
    capTechStackTitle: "Core Tech Stack",
    capFrontendTitle: "Frontend Engineering",
    capFrontendDesc: "Interactive user interfaces built with React, JavaScript, HTML5, and CSS3.",
    capBackendTitle: "Backend Development",
    capBackendDesc: "Server-side web logic and RESTful architectures powered by PHP and Laravel.",
    capDatabaseTitle: "Database Management",
    capDatabaseDesc: "Relational database modeling, query optimization, and SQL data structures.",
    capUIDesignTitle: "UI & Responsive Design",
    capUIDesignDesc: "Pixel-perfect, mobile-first design systems and modern web interfaces.",
    capAPIsTitle: "REST APIs & Integration",
    capAPIsDesc: "Seamless integration of third-party APIs, authentication, and web services.",
    capGitTitle: "Version Control & Git",
    capGitDesc: "Structured code management, branch workflows, and version control with GitHub.",
    capEcommerceTitle: "E-Commerce & CMS",
    capEcommerceDesc: "Custom Shopify store setups and custom WordPress website development.",

    // Services Section
    secServicesBadge: "Services",
    secServicesTitle: "Services Offered",
    secServicesDesc: "Tailored web development services designed to help you launch clean, reliable web solutions.",
    service1Title: "Web Development",
    service1Desc: "Creation of custom web applications tailored to your needs.",
    service2Title: "Frontend Development",
    service2Desc: "Modern, responsive, and intuitive user interfaces engineered with React, JavaScript, and CSS.",
    service3Title: "Backend Development",
    service3Desc: "Secure server-side architecture, REST APIs, and database management using Laravel and PHP.",
    service4Title: "Website Maintenance & CMS",
    service4Desc: "Custom Shopify stores, WordPress management, and ongoing technical updates for your websites.",

    secContactBadge: "Get In Touch",
    secContactTitle: "Let's Build Something Great Together",
    secContactDesc: "Have a project in mind, a question, or want to say hello? Fill out the form below or reach out directly.",
    formNameLabel: "Your Name",
    formEmailLabel: "Your Email",
    formMessageLabel: "Your Message",
    formSubmitBtn: "Send Message",
    formSendingBtn: "Sending...",
    formSuccessMsg: "Thank you! Your message has been sent.",
    formErrorMsg: "Something went wrong. Please try again.",
    contactEmailTitle: "Email Address",
    contactPhoneTitle: "Phone / WhatsApp",
    contactGithubTitle: "GitHub Profile",
    contactStatusTitle: "Availability Status",
    contactStatusValue: "Available for Full-time & Freelance",
    btnCopy: "Copy",
    emailCopiedToast: "Email copied!",
    phoneCopiedToast: "Phone number copied!",
    footerCopy: "© 2026 Hassan Abelhad."
  },
  fr: {
    roleTitle: "Développeur Web",
    navHome: "Accueil",
    navWork: "Projets",
    navAbout: "À propos",
    navServices: "Services",
    navContact: "Contact",
    navLetsTalk: "Discutons",
    navGetInTouch: "Me Contacter",
    availability: "Disponible à plein temps ou en freelance",
    heroGreetingPrefix: "Bonjour, je suis",
    heroBio: "Développeur web, je crée des applications sur mesure, simples et fonctionnelles.",
    btnWork: "Voir mes projets",
    btnContact: "Me Contacter",
    metric1: "Projets Réalisés",
    metric2: "Années d'Expérience",
    metric3: "% Satisfaction Client",
    badge1: "Stack React & Laravel",
    badge2: "Développeur Full-Stack",
    cardSubtitle: "Technologies Principales",
    cardTitle: "Développement React & Laravel",
    quoteText: '"Développement d\'expériences web propres et conviviales."',
    quoteDetails: "Détails →",
    secWorkBadge: "Projets Sélectionnés",
    secWorkTitle: "Projets Réalisés",
    btnViewAllGithub: "Voir tous les dépôts",
    linkGithub: "Dépôt GitHub",
    linkDemo: "Projet en direct",
    p1Badge: "App React & CSS",
    p1Title: "Tomato Timers — Pomodoro Focus",
    p1Desc: "Une application web de minuteur Pomodoro avec sessions de travail et de pause personnalisables, gestion des tâches et interface minimaliste axée sur la productivité, conçue en React et CSS.",
    p2Badge: "App de Gestion & CRM",
    p2Title: "Application de Gestion de Locations",
    p2Desc: "Une application web de gestion de location comprenant la gestion des clients, le suivi des articles, le statut des paiements, les dates de retour et des statistiques de tableau de bord en temps réel, conçue avec HTML, CSS, JavaScript, Firebase et Cloudinary.",
    p3Badge: "Laravel & PHP",
    p3Title: "Application Web de Gestion de Projets",
    p3Desc: "Une application web de gestion de projets pour organiser les projets, les tâches, les membres de l'équipe et le suivi de l'avancement, conçue avec Laravel, Blade, MySQL et Bootstrap.",
    secAboutBadge: "Biographie & Parcours",
    secAboutTitle: "À Propos de Hassan Abelhad",
    secAboutDesc: "Développeur Full-Stack basé au Maroc • Diplômé de l'Université Hassan II",
    aboutCardTitle: "Parcours & Expérience",
    aboutTextP1: "Je suis un développeur full-stack originaire du Maroc, titulaire d'une licence professionnelle en développement full-stack & DevOps de l'Université Hassan II. Je conçois des applications web réactives et pratiques en utilisant HTML, CSS, JavaScript, PHP, Laravel, React et SQL.",
    aboutTextP2: "Grâce à mes projets académiques et mes stages professionnels, j'ai acquis de l'expérience dans le développement d'interfaces utilisateur modernes, de boutiques Shopify et de sites WordPress. J'aime créer des solutions web tout en développant continuellement mes compétences techniques.",
    aboutLocation: "Maroc",
    aboutDegree: "Full-Stack & DevOps",
    aboutUniv: "Université Hassan II",
    aboutCard1Title: "Formation Académique",
    aboutCard1Desc: "Licence Professionnelle en Développement Full-Stack & DevOps à l'Université Hassan II.",
    aboutCard2Title: "Stack Technique",
    aboutCard2Desc: "HTML, CSS, JavaScript, PHP, Laravel, React et SQL pour des applications web fiables.",
    aboutCard3Title: "UI & E-Commerce",
    aboutCard3Desc: "Expérience dans la création d'interfaces modernes, boutiques Shopify et sites WordPress.",
    
    // Capabilities Section
    secCapabilitiesBadge: "Compétences Techniques",
    secCapabilitiesTitle: "Compétences & Stack Technique",
    secCapabilitiesDesc: "Expertise technique, langages de programmation, frameworks et outils modernes utilisés pour concevoir des applications web réactives.",
    capTechStackTitle: "Technologies Principales",
    capFrontendTitle: "Développement Frontend",
    capFrontendDesc: "Interfaces utilisateur interactives conçues avec React, JavaScript, HTML5 et CSS3.",
    capBackendTitle: "Développement Backend",
    capBackendDesc: "Logique serveur et architectures RESTful propulsées par PHP et Laravel.",
    capDatabaseTitle: "Gestion de Bases de Données",
    capDatabaseDesc: "Modélisation relationnelle, optimisation de requêtes et structures de données SQL.",
    capUIDesignTitle: "Design UI & Adaptatif",
    capUIDesignDesc: "Design responsive et moderne avec du code propre et des composants réactifs.",
    capAPIsTitle: "APIs REST & Intégration",
    capAPIsDesc: "Intégration fluide d'APIs tierces, d'authentification et de services web.",
    capGitTitle: "Contrôle de Version & Git",
    capGitDesc: "Gestion structurée du code, flux de travail par branches et contrôle de version avec GitHub.",
    capEcommerceTitle: "E-Commerce & CMS",
    capEcommerceDesc: "Création de boutiques Shopify sur mesure et développement de sites WordPress.",

    // Services Section
    secServicesBadge: "Services",
    secServicesTitle: "Services Proposés",
    secServicesDesc: "Services de développement web sur mesure pour vous aider à lancer des solutions web fiables.",
    service1Title: "Développement Web",
    service1Desc: "Création d'applications web sur mesure adaptées à vos besoins.",
    service2Title: "Développement Frontend",
    service2Desc: "Interfaces utilisateur modernes, réactives et intuitives conçues avec React et CSS.",
    service3Title: "Développement Backend",
    service3Desc: "Architecture serveur sécurisée, APIs REST et gestion de bases de données avec Laravel et PHP.",
    service4Title: "Maintenance & CMS",
    service4Desc: "Boutiques Shopify, gestion WordPress et mises à jour techniques pour vos sites.",

    secContactBadge: "Me Contacter",
    secContactTitle: "Construisons un projet ensemble",
    secContactDesc: "Vous avez un projet en tête ou des questions ? Remplissez le formulaire ci-dessous ou contactez-moi directement.",
    formNameLabel: "Votre Nom",
    formEmailLabel: "Votre E-mail",
    formMessageLabel: "Votre Message",
    formSubmitBtn: "Envoyer le message",
    formSendingBtn: "Envoi en cours...",
    formSuccessMsg: "Merci ! Votre message a bien été envoyé.",
    formErrorMsg: "Un problème est survenu. Veuillez réessayer.",
    contactEmailTitle: "Adresse E-mail",
    contactPhoneTitle: "Téléphone / WhatsApp",
    contactGithubTitle: "Profil GitHub",
    contactStatusTitle: "Statut de Disponibilité",
    contactStatusValue: "Disponible à plein temps & en freelance",
    btnCopy: "Copier",
    emailCopiedToast: "E-mail copié !",
    phoneCopiedToast: "Numéro copié !",
    footerCopy: "© 2026 Hassan Abelhad."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLanguageSwitcher();
  initCopyEmail();
  initCopyCardButtons();
  initContactForm();
  initTypewriter();
  initScrollSpy();
  initInteractiveCounters();
  initScrollReveal();
});

/**
 * Handle Formspree Contact Form Submission via fetch
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('contact-submit-btn');
  const submitText = document.getElementById('contact-submit-text');
  const submitIcon = document.getElementById('contact-submit-icon');
  const statusBanner = document.getElementById('contact-form-status');

  if (!form || !submitBtn || !submitText || !statusBanner) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const currentLang = localStorage.getItem('portfolio_lang') || 'en';
    const sendingText = translations[currentLang]?.formSendingBtn || 'Sending...';
    const originalText = translations[currentLang]?.formSubmitBtn || 'Send Message';
    const successMsg = translations[currentLang]?.formSuccessMsg || 'Thank you! Your message has been sent.';
    const errorMsg = translations[currentLang]?.formErrorMsg || 'Something went wrong. Please try again.';

    // Disable button and change state
    submitBtn.disabled = true;
    submitText.innerText = sendingText;
    if (submitIcon) submitIcon.classList.add('animate-spin');

    // Hide previous status message
    statusBanner.classList.add('hidden');
    statusBanner.className = 'hidden p-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-3 transition-all';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvzenndl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success state
        statusBanner.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="shrink-0 text-emerald-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>${successMsg}</span>
        `;
        statusBanner.classList.remove('hidden');
        statusBanner.classList.add('bg-emerald-950/80', 'border', 'border-emerald-700/60', 'text-emerald-200');

        form.reset();
      } else {
        // Failure state from server
        throw new Error('Form submission failed');
      }
    } catch (err) {
      console.error('Formspree submit error:', err);
      statusBanner.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="shrink-0 text-rose-400"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
        <span>${errorMsg}</span>
      `;
      statusBanner.classList.remove('hidden');
      statusBanner.classList.add('bg-rose-950/80', 'border', 'border-rose-700/60', 'text-rose-200');
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitText.innerText = originalText;
      if (submitIcon) submitIcon.classList.remove('animate-spin');
    }
  });
}

/**
 * Clipboard copy functionality for Contact Cards (Email & Phone)
 */
function initCopyCardButtons() {
  const emailBtn = document.getElementById('copy-email-card-btn');
  const phoneBtn = document.getElementById('copy-phone-card-btn');
  const emailToast = document.getElementById('email-toast');
  const phoneToast = document.getElementById('phone-toast');

  // Copy Email Address
  emailBtn?.addEventListener('click', async () => {
    const textToCopy = emailBtn.getAttribute('data-copy') || 'hassanabelhad52@gmail.com';
    try {
      await navigator.clipboard.writeText(textToCopy);
      if (emailToast) {
        emailToast.classList.remove('hidden');
        setTimeout(() => {
          emailToast.classList.add('hidden');
        }, 2500);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  });

  // Copy Phone Number
  phoneBtn?.addEventListener('click', async () => {
    const textToCopy = phoneBtn.getAttribute('data-copy') || '+212 621-705812';
    try {
      await navigator.clipboard.writeText(textToCopy);
      if (phoneToast) {
        phoneToast.classList.remove('hidden');
        setTimeout(() => {
          phoneToast.classList.add('hidden');
        }, 2500);
      }
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  });
}

/**
 * Copy Gmail Address to Clipboard
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  const copyIcon = document.getElementById('copy-email-icon');
  if (!copyBtn || !copyText) return;

  const email = copyBtn.getAttribute('data-email') || 'hassanabelhad52@gmail.com';

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      
      const originalText = copyText.innerText;
      copyText.innerText = 'Copied to Clipboard!';
      copyBtn.classList.add('bg-emerald-50', 'border-emerald-300', 'text-emerald-700');
      
      if (copyIcon) {
        copyIcon.outerHTML = `<svg id="copy-email-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-600"><polyline points="20 6 9 17 4 12"/></svg>`;
      }

      setTimeout(() => {
        copyText.innerText = email;
        copyBtn.classList.remove('bg-emerald-50', 'border-emerald-300', 'text-emerald-700');
        const updatedIcon = document.getElementById('copy-email-icon');
        if (updatedIcon) {
          updatedIcon.outerHTML = `<svg id="copy-email-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        }
      }, 2200);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  });
}

/**
 * Language Switcher Logic (EN / FR)
 */
function initLanguageSwitcher() {
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';

  const btnEn = document.getElementById('lang-btn-en');
  const btnFr = document.getElementById('lang-btn-fr');
  const mobileBtnEn = document.getElementById('mobile-lang-btn-en');
  const mobileBtnFr = document.getElementById('mobile-lang-btn-fr');

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;

    const activeClasses = ['bg-white', 'text-indigo-600', 'shadow-xs', 'font-bold'];
    const inactiveClasses = ['text-slate-500', 'hover:text-slate-800', 'font-semibold'];

    const updateBtnStyle = (btn, isActive) => {
      if (!btn) return;
      if (isActive) {
        btn.classList.add(...activeClasses);
        btn.classList.remove('text-slate-500', 'hover:text-slate-800', 'font-semibold');
      } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add('text-slate-500', 'hover:text-slate-800', 'font-semibold');
      }
    };

    updateBtnStyle(btnEn, lang === 'en');
    updateBtnStyle(btnFr, lang === 'fr');
    updateBtnStyle(mobileBtnEn, lang === 'en');
    updateBtnStyle(mobileBtnFr, lang === 'fr');

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });
  }

  btnEn?.addEventListener('click', () => setLanguage('en'));
  btnFr?.addEventListener('click', () => setLanguage('fr'));
  mobileBtnEn?.addEventListener('click', () => setLanguage('en'));
  mobileBtnFr?.addEventListener('click', () => setLanguage('fr'));

  // Initialize on page load
  setLanguage(currentLang);
}

/**
 * Navigation Bar Logic
 */
function initNavbar() {
  const navContainer = document.getElementById('navbar-container');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Shrink/enhance navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navContainer?.classList.add('shadow-xl', 'bg-white/90');
      navContainer?.classList.remove('bg-white/75');
    } else {
      navContainer?.classList.remove('shadow-xl', 'bg-white/90');
      navContainer?.classList.add('bg-white/75');
    }
  });

  // Mobile menu toggle
  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = !mobileMenu?.classList.contains('hidden');
    if (isOpen) {
      mobileMenu?.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      `;
    } else {
      mobileMenu?.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      `;
    }
  });

  // Close mobile menu on clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      mobileMenu?.classList.add('hidden');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        `;
      }
    });
  });
}

/**
 * Typewriter text switcher for hero subtitle
 */
function initTypewriter() {
  const typeTarget = document.getElementById('typewriter-text');
  if (!typeTarget) return;

  const roles = [
    'Full-Stack Developer',
    'Laravel & React Developer',
    'Web Engineer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typeTarget.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typeTarget.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/**
 * Interactive 3D tilt effect on the hero glass card
 */
function initParallaxAndTilt() {
  const tiltCard = document.getElementById('hero-3d-card');
  const heroSection = document.getElementById('hero');

  if (!tiltCard || !heroSection) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / rect.height) * 16;
    const rotateY = (x / rect.width) * 16;

    tiltCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/**
 * Mouse tracking ambient spotlight effect
 */
function initSpotlight() {
  const heroSection = document.getElementById('hero');
  const spotlight = document.querySelector('.spotlight');

  if (!heroSection || !spotlight) return;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroSection.style.setProperty('--mouse-x', `${x}px`);
    heroSection.style.setProperty('--mouse-y', `${y}px`);
  });
}

/**
 * ScrollSpy to update active state of navbar pill indicators
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-indigo-600', 'bg-indigo-50/80', 'font-semibold');
      link.classList.add('text-slate-600');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('text-indigo-600', 'bg-indigo-50/80', 'font-semibold');
        link.classList.remove('text-slate-600');
      }
    });
  });
}

/**
 * Animated number counting effect for portfolio metrics
 */
function initInteractiveCounters() {
  const counters = document.querySelectorAll('.counter-val');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 40);
        
        const updateCount = () => {
          count += increment;
          if (count < target) {
            entry.target.innerText = count;
            setTimeout(updateCount, 30);
          } else {
            entry.target.innerText = target + '+';
          }
        };
        updateCount();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/**
 * Smooth scroll reveal animations when elements enter the viewport
 */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

