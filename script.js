// پیکربندی Firebase (اطلاعات پروژه خودتو وارد کن)
const firebaseConfig = {
  apiKey: "اینجا",
  authDomain: "اینجا",
  projectId: "اینجا",
  storageBucket: "اینجا",
  messagingSenderId: "اینجا",
  appId: "اینجا"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("ثبت‌نام موفق بود"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("auth-container").style.display = "none";
      document.getElementById("chat-container").style.display = "block";
      loadMessages();
    })
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => location.reload());
}

function sendMessage() {
  const message = document.getElementById("messageInput").value;
  const user = auth.currentUser;
  if (user && message.trim()) {
    db.collection("messages").add({
      uid: user.uid,
      text: message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    document.getElementById("messageInput").value = "";
  }
}

function loadMessages() {
  const user = auth.currentUser;
  db.collection("messages")
    .where("uid", "==", user.uid)
    .orderBy("createdAt")
    .onSnapshot(snapshot => {
      const messagesDiv = document.getElementById("messages");
      messagesDiv.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        messagesDiv.innerHTML += `<div>${data.text}</div>`;
      });
    });
}
