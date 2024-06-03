import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuzWuUgDgMJsKBlorn3VJ382C2gTe639s",
  authDomain: "video-79fcd.firebaseapp.com",
  projectId: "video-79fcd",
  storageBucket: "video-79fcd.appspot.com",
  messagingSenderId: "620307539887",
  appId: "1:620307539887:web:17c86c43a67dfeb059f15a"
};

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBuzWuUgDgMJsKBlorn3VJ382C2gTe639s",
//   authDomain: "video-79fcd.firebaseapp.com",
//   projectId: "video-79fcd",
//   storageBucket: "video-79fcd.appspot.com",
//   messagingSenderId: "620307539887",
//   appId: "1:620307539887:web:17c86c43a67dfeb059f15a"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
