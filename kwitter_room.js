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

function logout(){
      window.location = "index.html"
}

function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}
function getData()
 { firebase.database().ref("/").on('value', function(snapshot){ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names = childKey;
console.log("room_name" + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";
document.getElementById("output").innerHTML += row;
 

      });  
});}
getData();

function redirectToRoomName(name){
console.log (name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html"
}