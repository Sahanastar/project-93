//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBA0B59tcxq781yVsw8IXQQIDB6TuWYZ8s",
    authDomain: "kwitter-20bad.firebaseapp.com",
    databaseURL: "https://kwitter-20bad-default-rtdb.firebaseio.com",
    projectId: "kwitter-20bad",
    storageBucket: "kwitter-20bad.appspot.com",
    messagingSenderId: "1088949199706",
    appId: "1:1088949199706:web:fa2bfcf61d72f29ca8c963"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

