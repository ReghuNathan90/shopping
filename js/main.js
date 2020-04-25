window.onload = () => {
  'use strict';
  console.log('The service worker is serving the asset.');
  if ('serviceWorker' in navigator) {
  	console.log('The service worker is serving the m2ai2n');
    navigator.serviceWorker.register('./sw.js');
    console.log('The service worker is serving the m2ai2n.');
  }
}
