import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const mobileMenu = document.querySelector('#mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            // Wir prüfen, ob es gerade unsichtbar ist
            const isHidden = mobileMenu.classList.contains('invisible');

            if (isHidden) {
                // MENÜ ÖFFNEN
                mobileMenu.classList.remove('invisible', 'opacity-0', '-translate-y-4');
                mobileMenu.classList.add('visible', 'opacity-100', 'translate-y-0');
            } else {
                // MENÜ SCHLIESSEN
                mobileMenu.classList.remove('visible', 'opacity-100', 'translate-y-0');
                mobileMenu.classList.add('invisible', 'opacity-0', '-translate-y-4');
            }
        });
    }
});