function adduser(){
    user_name = document.getElementById("username").value;
    localStorage.setItem("User_Name",user_name);
    window.location = "kwitter_room.html";
    
}
