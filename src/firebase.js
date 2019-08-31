import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAowF2AKJA7ytomZFhOAnANZltksQ27pUs",
  authDomain: "todoist-r.firebaseapp.com",
  databaseURL: "https://todoist-r.firebaseio.com",
  projectId: "todoist-r",
  storageBucket: "",
  messagingSenderId: "98122328273",
  appId: "1:98122328273:web:eb0671da8c42a066"
});

export { firebaseConfig as firebase };
