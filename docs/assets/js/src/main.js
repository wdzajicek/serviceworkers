import '../../scss/bootstrap.scss';
import '../../scss/main.scss';

function errorHandler(message, err) {
  console.error( `${message} \n${err}`, err);
}

async function loadSimpleModule(module) {
  const { default: module_1 } = await import(`./${module}`);
  return module_1();
}

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => import('bootstrap/js/src/dropdown').then(({ default: Dropdown }) => Dropdown))
    .then((Dropdown) => import('bootstrap/js/src/collapse').then(({ default: Collapse }) => [Dropdown, Collapse]))
    .then(([Dropdown, Collapse]) => import('./highlightNavItem').then(({ default: highlightNavItem }) => {
      highlightNavItem();
      return [Dropdown, Collapse];
    }))
    .then(([Dropdown, Collapse]) => import('./footerDate').then(({ default: footerDate }) => {
      footerDate();
      return [Dropdown, Collapse];
    }))
    .then(([Dropdown, Collapse]) => {
      if (document.querySelector('[id*="accordion"]')) {
        import('./handleAccordionLinks').then(({ default: handleAccordionLinks }) => {
          handleAccordionLinks(Collapse);
        }).then(() => {
          import('./handleAccordionClicks').then(({ default: handleAccordionClicks }) => handleAccordionClicks())
        }).catch(err => errorHandler('Error loading Accordion module(s):', err))
      }
    }).then(() => {
      if (document.getElementById('svgFour'))
        return loadSimpleModule('errorPageAnimation');
    }).then(() => {
      if (window.location.pathname == '/sheets-api/') {
        return loadSimpleModule('fetchSheetsData');
      }
    })
    .then(() => window.location.pathname == '/404.html' ? loadSimpleModule('errorPageAnimation') : null )
     .then(() => {
       if ('serviceWorker' in navigator) {
         import('./registerServiceWorker.js').then(({default: registerServiceWorker}) => {
           registerServiceWorker();
         });
       }
    })
    .catch(err => errorHandler('Error loading module(s):', err))
});