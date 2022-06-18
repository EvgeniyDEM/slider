import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-messaging.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCERsi4T3yJytJddIFprKBRgiTks7Q3eXg",
  authDomain: "pushnotification-225412.firebaseapp.com",
  databaseURL: "https://pushnotification-225412.firebaseio.com",
  projectId: "pushnotification-225412",
  storageBucket: "pushnotification-225412.appspot.com",
  messagingSenderId: "234440847732",
  appId: "1:234440847732:web:bf1f511ac862e69672fc21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

