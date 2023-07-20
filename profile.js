import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getStorage , ref , uploadBytes ,  uploadBytesResumable , getDownloadURL , deleteObject} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-t2X9xHVEJD_CwMbdK_uExz-YW0u2qTA",
  authDomain: "test-6ede7.firebaseapp.com",
  projectId: "test-6ede7",
  storageBucket: "test-6ede7.appspot.com",
  messagingSenderId: "760589649087",
  appId: "1:760589649087:web:4282e4bd592fffcb1f720a",
  measurementId: "G-835XXRWF6N"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage();
let submitBtn = document.getElementById('submit')

const uploadFile = (file)=>{
return new Promise((resolve,reject)=>{
  const mountainImagesRef = ref(storage, `images/${file.name}`);
  //   uploadBytes(mountainImagesRef, file.files[0] ).then((snapshot) => {
  //     console.log('Uploaded a blob or file!');
  //   });
  // const uploadTask = uploadBytesResumable(mountainImagesRef, file.files[0]);
  
  const uploadTask = uploadBytesResumable(mountainImagesRef, file);
  
  
  uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      console.log(error)
      reject(error)
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        resolve(downloadURL)
      });
    }
  );
})
}

submitBtn.addEventListener("click",  async()=>{
  let file = document.getElementById('file')
  let imageShow = document.getElementById('imageShow')
  // console.log("hello world")
  // console.log(file.files[0].name)
  const res = await uploadFile(file.files[0])
  // .then((resolve)=> console.log(resolve))
  // .catch((reject)=> console.log(reject))
  try{
    console.log(res)
    let resImg = res 
    console.log(resImg)
    imageShow.src = resImg
  }
  catch(er){
    console.log(er)
  }
    
})

