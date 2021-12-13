// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAA5DBUBRr4pHC2dJngYS99SmOtyh_2Jak",
    authDomain: "letschat-a9f16.firebaseapp.com",
    databaseURL: "https://letschat-a9f16-default-rtdb.firebaseio.com",
    projectId: "letschat-a9f16",
    storageBucket: "letschat-a9f16.appspot.com",
    messagingSenderId: "494428777198",
    appId: "1:494428777198:web:89c5c508979ae4dbb7e1ff"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser(){
    user_name = document.getElementById("username").value;
    localStorage.setItem ("user_name", user_name);
    window.location = "kwitter_room.html";
}
