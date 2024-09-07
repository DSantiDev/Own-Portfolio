/**LOADING */
    window.addEventListener("load", function() {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => loadingScreen.style.display = 'none', 10000);
    });
/**CURSOR */
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        const mouseX = e.pageX - 10;
        const mouseY = e.pageY - 10;
        cursor.style = `transform: translate3d(${mouseX}px, ${mouseY}px, 0)` 
    })

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

/**CIRCULO DE PROGRESO */
    const progressWrap = document.querySelector('.progress-wrap');
    const progressCircle = document.querySelector('.progress-circle path');

    // Actualiza el progreso del círculo
    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        // Calcular el stroke-dasharray y stroke-dashoffset
        const circleLength = 307.919; // Circunferencia del círculo (2 * Math.PI * radio)
        const dashOffset = circleLength - (circleLength * scrollPercent / 100);

        progressCircle.style.strokeDashoffset = dashOffset;

        if (scrollTop > 100) { // Muestra el botón si el desplazamiento es mayor a 100px
            progressWrap.classList.add('show');
        } else {
            progressWrap.classList.remove('show');
        }
    }

    // Actualiza el progreso en el desplazamiento
    window.addEventListener('scroll', updateProgress);

    // Desplazamiento hacia arriba al hacer clic en el botón
    progressWrap.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

  