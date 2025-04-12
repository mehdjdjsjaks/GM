// کانفیگ تو
const firebaseConfig = {
  apiKey: "AIzaSyAUFJeLyvFxW2iQ143snxn0d_9-36zzb1Q",
  authDomain: "axcel-20956.firebaseapp.com",
  projectId: "axcel-20956",
  storageBucket: "axcel-20956.firebasestorage.app",
  messagingSenderId: "115833840953",
  appId: "1:115833840953:web:03194ff9d298b5d2bf74e8",
  measurementId: "G-2NSQVB63JG"
};

// اتصال به Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("ثبت‌نام موفق بود!");
    })
    .catch(error => {
      alert("خطا: " + error.message);
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("ورود موفق بود!");
    })
    .catch(error => {
      alert("خطا: " + error.message);
    });
}
