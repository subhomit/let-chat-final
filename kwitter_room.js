
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
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
document.getElementById("username").innerHTML = "Welcome " + username + " !";
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding_room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log(Room_names);
    row = "<div class = 'room_name' id = '"+ Room_names +"' onclick = 'redirect_to_room_name(this.id)'>#" + Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();
function redirect_to_room_name(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("u_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}