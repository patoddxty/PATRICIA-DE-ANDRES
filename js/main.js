// js/main.js

(function(){
  // Smooth scroll for internal links
  function smoothScrollTo(target) {
    document.querySelector(target).scrollIntoView({behavior:'smooth', block:'start'});
  }

  // When clicking the cover portfolio badge, go to #full
  var portfolioLink = document.getElementById('portfolioLink');
  if(portfolioLink){
    portfolioLink.addEventListener('click', function(e){
      e.preventDefault();
      smoothScrollTo('#full');
      // add class so header changes to full variant
      document.body.classList.add('full-active');
    });
  }

  // Header behavior on scroll: toggle .full-active when we reach #full
  var fullSection = document.getElementById('full');
  var ticking = false;
  function onScroll(){
    if(!fullSection) return;
    var rect = fullSection.getBoundingClientRect();
    // if top of full is within the top half of viewport, activate full header
    if(rect.top <= window.innerHeight*0.45){
      document.body.classList.add('full-active');
    } else {
      document.body.classList.remove('full-active');
    }
  }
  window.addEventListener('scroll', function(){
    if(!ticking){
      window.requestAnimationFrame(function(){onScroll();ticking=false;});
      ticking=true;
    }
  });
  // initial check
  onScroll();

  // Smooth behavior for header links pointing to anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        smoothScrollTo(href);
      }
    });
  });

})();
