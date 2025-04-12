// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAUFJeLyvFxW2iQ143snxn0d_9-36zzb1Q",
  authDomain: "axcel-20956.firebaseapp.com",
  projectId: "axcel-20956",
  storageBucket: "axcel-20956.appspot.com",
  messagingSenderId: "115833840953",
  appId: "1:115833840953:web:03194ff9d298b5d2bf74e8"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign up
window.signUp = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("ثبت‌نام موفق بود!");
      window.location.href = "chat.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};

// Sign in
window.signIn = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("ورود موفق بود!");
      window.location.href = "chat.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
