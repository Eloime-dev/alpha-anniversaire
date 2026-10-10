const bouton = document.getElementById('ouvrirLettre');
const lettre = document.getElementById('lettre');
const enveloppe = document.querySelector('.enveloppe');

bouton.addEventListener('click', function () {

    if (lettre.classList.contains('lettre-cachee')) {

        // Ouvrir la lettre
        lettre.classList.remove('lettre-cachee');
        lettre.classList.add('visible');
        enveloppe.classList.add('ouverte');

        bouton.textContent = 'Refermer ma lettre 💌';

    } else {

        // Refermer la lettre
        lettre.classList.remove('visible');
        lettre.classList.add('lettre-cachee');
        enveloppe.classList.remove('ouverte');

        bouton.textContent = 'Ouvrir ma lettre ✨';

    }

});