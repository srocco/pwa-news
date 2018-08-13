// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'AAAA_jjBo60:APA91bHiJs2_HJvhhuKh19ngvwdYh6MmyW3GgTY3MFh04kFz8J3eKsxZ2PackhOktTnF2yGhYFOXd976jHMlEqmr94qdkuS5ktA4yBz-094PW176Kfv9Xs3BXqhPALOOEgqUD4Xi585LOLBuomteavN4cy6wjBofNg'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
