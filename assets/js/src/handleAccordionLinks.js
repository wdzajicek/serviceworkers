const ACCORDION = document.querySelector('.accordion');

function openAccordion(hash, Collapse) {
  const card = ACCORDION.querySelector(hash);
  const collapseEl = Collapse.getOrCreateInstance(card, {toggle: false});

  collapseEl.show();
  card.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

function checkForMatch(hash, Collapse) {
  if (document.querySelector(`[data-bs-target="${hash}"]`)) {
    openAccordion(hash, Collapse);
  }
}

function handleAccordionLinks(Collapse) {
  if (window.location.hash) {
    let hash = window.location.hash;

    checkForMatch(hash, Collapse);
  }
  window.addEventListener('hashchange', (e) => {
    let hash = window.location.hash;

    checkForMatch(hash, Collapse);
  })
}

export default handleAccordionLinks;