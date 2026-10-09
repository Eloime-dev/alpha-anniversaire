console.log("Mon portfolio fonctionne !");
const bouton = document.getElementById("btnPlus");
const message = document.getElementById("message");
bouton.addEventListener("click", function() {
    message.style.display = "block";
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
});
const btnTop = document.getElementById("btnTop");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});
btnTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector("nav ul");
menuBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        menuBtn.textContent = "✖"; // Change le texte du bouton en "X"
    } else {
        menuBtn.textContent = "☰"; // Change le texte du bouton en "☰"
    }
});
const menuLinks = document.querySelectorAll("nav ul li a");
menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("active");
        menuBtn.textContent = "☰"; // Change le texte du bouton en "☰"
    });
});
const navLinks = document.querySelectorAll("nav ul a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {

        navLinks.forEach(function(l) {
            l.classList.remove("active");
        });

        link.classList.add("active");
    });
});
document.addEventListener("click", function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove("active");
        menuBtn.textContent = "☰"; // Change le texte du bouton en "☰"
    }
});
const contactForm = document.getElementById("contactForm");
const confirmation = document.getElementById("confirmation");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    confirmation.textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
    contactForm.reset(); // Réinitialise le formulaire après l'envoi
});
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
    const nom = document.querySelector("#nom").value;
    console.log(nom);
});
