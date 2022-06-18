import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getMessaging,getToken} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCERsi4T3yJytJddIFprKBRgiTks7Q3eXg",
  authDomain: "pushnotification-225412.firebaseapp.com",
  databaseURL: "https://pushnotification-225412.firebaseio.com",
  projectId: "pushnotification-225412",
  storageBucket: "pushnotification-225412.appspot.com",
  messagingSenderId: "234440847732",
  appId: "1:234440847732:web:97db054719fcfb5e72fc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BBTuXHkaMfUdFs_76IGTW67C_ZaqMElvB3tOlCEa6_DS5eAPqIjISjPxnMVk5Fgk3YwtyjYzLsLY3t5gdQ6jO78' }).then((currentToken) => {
  if (currentToken) {
    alert(currentToken);
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  alert('An error occurred while retrieving token. ', err);
  // ...
});

