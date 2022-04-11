//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCjGPo7UGE63x3iuw0PerTuKa0MAJh288U",
    authDomain: "kwitter-1c217.firebaseapp.com",
    databaseURL: "https://kwitter-1c217-default-rtdb.firebaseio.com",
    projectId: "kwitter-1c217",
    storageBucket: "kwitter-1c217.appspot.com",
    messagingSenderId: "321443798360",
    appId: "1:321443798360:web:dae338449d04fb9893d92d"
  };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("u_name");
    roomname = localStorage.getItem("room_name");
    function send(){
          user_msg = document.getElementById("msg").value;
          firebase.database().ref(roomname).push({
                name : username,
                message : user_msg,
                like : 0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = '<h4>' + name + '<img class = "user_tick" src = "tick.png"> </h4>';
message_with_tag = '<h4 class = "message_h4">' + message + '</h4>';
like_button = '<button class = "btn btn-warning" id = "'+ firebase_message_id +'" value = "'+ like +'" onclick = "update_like(this.id)">';
span_with_tag = '<span class = "glyphicon glyphicon-thumbs-up"> Like :' + like + '</span> </button> <hr>';
row = name_with_tag + message_with_tag + like_button + span_with_tag ;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function update_like(message_id){
  console.log(message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  firebase.database().ref(roomname).child(message_id).update({
        like : updated_likes
  });
}
function logout(){
  localStorage.removeItem("u_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
