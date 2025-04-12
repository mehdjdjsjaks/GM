import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUFJeLyvFxW2iQ143snxn0d_9-36zzb1Q",
  authDomain: "axcel-20956.firebaseapp.com",
  projectId: "axcel-20956",
  storageBucket: "axcel-20956.appspot.com",
  messagingSenderId: "115833840953",
  appId: "1:115833840953:web:03194ff9d298b5d2bf74e8",
  measurementId: "G-2NSQVB63JG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messagesDiv = document.getElementById("messages");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Load previous messages
    const q = query(collection(db, "messages"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const msg = doc.data().text;
      const p = document.createElement("p");
      p.textContent = msg;
      messagesDiv.appendChild(p);
    });

    // Send message
    sendBtn.addEventListener("click", async () => {
      const text = messageInput.value.trim();
      if (text === "") return;

      await addDoc(collection(db, "messages"), {
        uid: user.uid,
        text: text,
        timestamp: Date.now()
      });

      const p = document.createElement("p");
      p.textContent = text;
      messagesDiv.appendChild(p);
      messageInput.value = "";
    });
  } else {
    window.location.href = "index.html";
  }
});
