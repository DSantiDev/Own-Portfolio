/**LOADING */
window.addEventListener("load", function() {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(() => loadingScreen.style.display = 'none', 500);
  });
/**CURSOR */
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mouseover', function(e) {
    const cursor = document.querySelector('.cursor');
    if (e.target.matches('a, button, [role="button"], input[type="button"], input[type="submit"], textarea, select, [contenteditable]')) {
        cursor.classList.add('cursor-active');
    }
});

document.addEventListener('mouseout', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!e.target.matches('a, button, [role="button"], input[type="button"], input[type="submit"], textarea, select, [contenteditable]')) {
        cursor.classList.remove('cursor-active');
    }
});

/**SCROLL */
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 500) { // Ajusta este valor según tus necesidades
        navbar.classList.add('nav-scroll');
    } else {
        navbar.classList.remove('nav-scroll');
    }
});

  