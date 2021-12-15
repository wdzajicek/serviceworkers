function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    // app-based solution
    let refreshing = false;

    // detect controller change and refresh the page
    // navigator.serviceWorker.addEventListener('controllerchange', () => {
    //     if (!refreshing) {
    //         window.location.reload()
    //         refreshing = true
    //     }
    // })

    navigator.serviceWorker.register('./serviceworker.js')
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
  
}

export default registerServiceWorker;