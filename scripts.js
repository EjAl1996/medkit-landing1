// basic helpers + year
try { document.getElementById('year').textContent = new Date().getFullYear(); } catch (e) {}

// Single DOMContentLoaded to handle reveals and CTA tracking
document.addEventListener('DOMContentLoaded', function () {

  // elements to reveal (observe)
  const revealSelectors = [
    '.guide-image',
    '.guide-content',
    '.guarantee-hero',
    '.trust-item-card',
    '.about-enhanced'
  ];
  const revealEls = Array.from(document.querySelectorAll(revealSelectors.join(',')));

  if (revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  // CTA tracking (safe: check element exists)
  const ctaIds = ['guide-cta', 'guarantee-cta', 'cta-hero'];
  ctaIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'click_cta', { event_category: 'conversion', event_label: id });
      }
    });
  });

});
