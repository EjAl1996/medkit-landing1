// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Track CTA clicks to GA4 (send event). Replace with your GA4 ID in index.html config.
function sendGAEvent(action, label){
  if(typeof gtag === 'function'){
    gtag('event', action, {
      event_category: 'engagement',
      event_label: label
    });
  }
}

// Attach listeners
['cta-top','cta-mid','cta-bottom'].forEach(id=>{
  const el = document.getElementById(id);
  if(el){
    el.addEventListener('click', () => {
      sendGAEvent('click_cta', id);
    });
  }
});
