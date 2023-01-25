
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyD7QOfHFkNT0lFOK1PdQmog92G4eIpB5fA",
  authDomain: "kwitter-1d7f4.firebaseapp.com",
  databaseURL: "https://kwitter-1d7f4-default-rtdb.firebaseio.com",
  projectId: "kwitter-1d7f4",
  storageBucket: "kwitter-1d7f4.appspot.com",
  messagingSenderId: "71865152812",
  appId: "1:71865152812:web:49a4829b4bc041c78da889"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function logout()
{
  user_name = document.getElementById("user_name").value ;
  localStorage.setItem("user_name", user_name) ;
  window.location = "index.html";

}

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!!";


function addroom()
{
  room_name = document.getElementById("room_name").value ; 
  firebase.database().ref("/").child(room_name).update({
    purpose : "Adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}