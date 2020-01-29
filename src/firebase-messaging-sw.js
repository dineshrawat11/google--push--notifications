importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCdnb4M0blv8Bv3QtQyflQ7I3QV8NTL5hpI",
    authDomain: "push-notify-44e37.firebaseapp.com",
    databaseURL: "https://push-notify-44e37.firebaseio.com",
    projectId: "push-notify-44e23",
    storageBucket: "push-notify-44e22.appspot.com",
    messagingSenderId: "145142748335",
    appId: "1:145142748334:web:de458c2542d74f1f12893f",
    measurementId: "G-QV9XLY3DRX"
   });
const messaging = firebase.messaging();