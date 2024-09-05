/**LOADING */
window.addEventListener("load", function() {
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.classList.add('hidden');
    setTimeout(() => loadingScreen.style.display = 'none', 500);
  });
  
  