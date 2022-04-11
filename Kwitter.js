function add_user(){
    var username = document.getElementById("username").value;
    localStorage.setItem("u_name", username);
    window.location = "kwitter_room.html";    
}