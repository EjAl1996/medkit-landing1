// interactions: year, FAQ accordion, basic GA CTA tracking
try{document.getElementById('year').textContent = new Date().getFullYear();}catch(e){}

function sendGA(action, label){
  if(typeof gtag === 'function'){
    gtag('event', action, { event_category: 'engagement', event_label: label });
  }
}
['top-cta','cta-top-hero','cta-hero-card','final-cta-btn'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener('click', ()=> sendGA('click_cta', id));
});

document.querySelectorAll('.faq-item .q').forEach(q=>{
  q.addEventListener('click', function(){
    const a = this.nextElementSibling;
    const open = a.style.display === 'block';
    document.querySelectorAll('.faq-item .a').forEach(x=> x.style.display = 'none');
    if(!open) a.style.display = 'block';
  });
});
