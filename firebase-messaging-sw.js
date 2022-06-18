
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getMessaging,getToken,onBackgroundMessage} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging-sw.js";


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
  const firebaseApp = initializeApp({
  apiKey: "AIzaSyCERsi4T3yJytJddIFprKBRgiTks7Q3eXg",
  authDomain: "pushnotification-225412.firebaseapp.com",
  databaseURL: "https://pushnotification-225412.firebaseio.com",
  projectId: "pushnotification-225412",
  storageBucket: "pushnotification-225412.appspot.com",
  messagingSenderId: "234440847732",
  appId: "1:234440847732:web:97db054719fcfb5e72fc21",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);


onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

