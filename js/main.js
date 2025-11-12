// main.js — small helpers: hover-swap for cards + smooth scroll

document.addEventListener('DOMContentLoaded', () => {

  // smooth scroll for header navigation
  document.querySelectorAll('.site-nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const tgt = document.querySelector(a.getAttribute('href'));
      if(!tgt) return;
      const headerOffset = document.documentElement.style.getPropertyValue('--header-height') || 88;
      const top = tgt.getBoundingClientRect().top + window.pageYOffset - parseInt(headerOffset,10);
      window.scrollTo({ top, behavior:'smooth' });
    });
  });

  // PRELOAD hover images for cards
  document.querySelectorAll('.card[data-hover]').forEach(card=>{
    const hoverURL = card.getAttribute('data-hover');
    if(hoverURL){
      const img = new Image();
      img.src = hoverURL;
    }
  });

  // hover swap: on mouseenter swap src to data-hover; on leave swap back to data-original (stored)
  document.querySelectorAll('.card[data-hover]').forEach(card=>{
    const imgEl = card.querySelector('.card-img');
    if(!imgEl) return;

    // store original
    imgEl.dataset.original = imgEl.src;

    card.addEventListener('mouseenter', ()=>{
      const hover = card.dataset.hover;
      if(hover){
        // fade -> swap -> fade in (use opacity transition)
        imgEl.style.opacity = '0.01';
        setTimeout(()=>{
          imgEl.src = hover;
          imgEl.style.opacity = '1';
        }, 120);
      }
    });

    card.addEventListener('mouseleave', ()=>{
      const orig = imgEl.dataset.original;
      imgEl.style.opacity = '0.01';
      setTimeout(()=>{
        imgEl.src = orig;
        imgEl.style.opacity = '1';
      }, 120);
    });

    // ensure touch doesn't break (tap opens link)
    card.addEventListener('touchstart', ()=>{ /* no-op */ }, {passive:true});
  });

});
