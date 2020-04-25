window.onload = () => {
   if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').then(function() {
          console.warn('ServiceWorker registration successful');
        }, function() {
          alert('ServiceWorker registration failed');
        });
      });
    }
}
