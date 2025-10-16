// small interaction script: carousel, FAQ toggle, year + GA click
document.getElementById('year').textContent = new Date().getFullYear();

// CTA click tracking (GA)
function sendGAEvent(action, label){
  if(typeof gtag === 'function'){
    gtag('event', action, { event_category: 'engagement', event_label: label });
  }
}
['cta-hero','cta-mid','cta-card','cta-bottom'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener('click', ()=> sendGAEvent('click_cta', id));
});

// Testimonial carousel (auto rotate)
(function(){
  const slides = Array.from(document.querySelectorAll('.carousel .slide'));
  let idx = slides.findIndex(s=> s.classList.contains('active'));
  if(idx < 0) idx = 0;
  function rotate(){
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }
  setInterval(rotate, 4200);
})();

// FAQ accordion
document.querySelectorAll('.faq-item .q').forEach(q=>{
  q.addEventListener('click', function(){
    const a = this.nextElementSibling;
    const open = a.style.display === 'block';
    document.querySelectorAll('.faq-item .a').forEach(x=> x.style.display = 'none');
    if(!open) a.style.display = 'block';
  });
});
