function registerServiceWorker() {
  navigator.serviceWorker.register('/serviceworkers/serviceworker.js', { scope: '/serviceworkers/'})
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
}

export default registerServiceWorker;