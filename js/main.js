/* main.js - interacciones portfolio */

/* Espera a que la página cargue */
document.addEventListener('DOMContentLoaded', function () {

  // --- SCROLL SUAVE PARA ENLACES INTERNOS ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;

      // Calcular offset del header fijo
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;

      // Scroll suave
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - headerHeight,
        behavior: 'smooth'
      });
    });
  });

  // --- EFECTO HOVER SUAVE PARA IMÁGENES DEL GRID (OPCIONAL) ---
  // Ya está en CSS, pero aquí se puede reforzar con JS si se desea animación adicional
  const workItems = document.querySelectorAll('.work-item img');
  workItems.forEach(function(img){
    img.addEventListener('mouseenter', function(){
      this.style.transition = 'transform 0.35s ease, box-shadow 0.35s ease';
      this.style.transform = 'scale(1.03)';
      this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
    });
    img.addEventListener('mouseleave', function(){
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });

});
