const hamMenu = document.querySelector('.ham-menu'),
      nav = document.querySelector('nav');

hamMenu.onclick = () => {
    hamMenu.classList.toggle('change');
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
}