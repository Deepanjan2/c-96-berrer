

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

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name:user_name,
            message : msg,
            like:0
      });
      document.getElementById("msg").value = "";

}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}