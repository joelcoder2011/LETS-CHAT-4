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
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
   
  function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message : msg,
              like : 0 
        });
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
