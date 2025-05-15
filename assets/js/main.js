// Mobil Menü Aç/Kapat
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Menü linklerine tıklayınca menüyü kapat ve aktif linki işaretle
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    navLinks.forEach(n => n.classList.remove('active-link'));
    this.classList.add('active-link');
    navMenu.classList.remove('show');
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

// ScrollReveal ayarları
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false // animasyon sadece sayfa açılırken
});

// Animasyonları uygula
sr.reveal('header', {delay: 100});
sr.reveal('.hero h1', {delay: 300});
sr.reveal('.hero p, .btn', {delay: 500, interval: 100});
sr.reveal('.about img', {origin: 'left', delay: 400});
sr.reveal('.about p', {origin: 'right', delay: 600});
sr.reveal('.skill-box', {interval: 200, delay: 400});
sr.reveal('.project', {interval: 300});
sr.reveal('.contact form', {delay: 40})