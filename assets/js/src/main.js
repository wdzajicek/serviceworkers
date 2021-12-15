import '../../scss/bootstrap.scss';
import '../../scss/main.scss';

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => import('bootstrap/js/src/dropdown'))
    .then(() => import('bootstrap/js/src/collapse'))
    .then(() => import('./footerDate').then(({default: footerDate}) => footerDate()))
    // .then(() => {
    //   import('./registerServiceWorker.js').then(({default: registerServiceWorker}) => {
    //     registerServiceWorker();
    //   })
    // })
  });