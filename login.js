 // Import the functions you need from the SDKs you need
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




let logniBtn = document.getElementById('logniBtn')



let userEmail = document.getElementById('useremail')
let userpassword = document.getElementById('userpassword')
let msg = document.getElementById('msg')
let userSingIn = ()=>{
signInWithEmailAndPassword(auth, userEmail.value , userpassword.value)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
window.location.href = 'profile.html';

console.log(user)

// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorMessage)
if(errorMessage.includes("user-not-found")){
  msg.innerHTML = "User Not Register" ;
}
else if(errorMessage.includes("wrong-password")) {
  msg.innerHTML = "Wrong Password"
}

});
userEmail.value = ""
userpassword.value = ""
msg.innerHTML = ""
}

logniBtn.addEventListener("click",userSingIn)


