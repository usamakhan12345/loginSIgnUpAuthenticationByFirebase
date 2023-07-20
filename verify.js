import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth ,  createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , updateEmail ,  sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyD-t2X9xHVEJD_CwMbdK_uExz-YW0u2qTA",
  authDomain: "test-6ede7.firebaseapp.com",
  projectId: "test-6ede7",
  storageBucket: "test-6ede7.appspot.com",
  messagingSenderId: "760589649087",
  appId: "1:760589649087:web:4282e4bd592fffcb1f720a",
  measurementId: "G-835XXRWF6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let VerifyEmail = document.getElementById('VerifyEmail')
let UserEmail = document.getElementById('UserEmail')
let verifyBtn = document.getElementById('verifyBtn')
console.log(auth.currentUser.email)
let VerifyUserEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });
}

verifyBtn.addEventListener("click",VerifyUserEmail)
