const header = document.querySelector('.sticky-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function updateHeaderVisibility() {
    if (window.innerWidth >= 768) {
        header.style.display = 'none';
    } else {
        header.style.display = 'block';
    }
}

window.addEventListener('resize', updateHeaderVisibility);
updateHeaderVisibility();
