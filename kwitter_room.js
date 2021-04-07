var firebaseConfig = {
  apiKey: "AIzaSyBol6xlCHkX1Zf3VqGNqze80k3dsM2s-rc",
  authDomain: "kwitter-project-9d3f7.firebaseapp.com",
  projectId: "kwitter-project-9d3f7",
  storageBucket: "kwitter-project-9d3f7.appspot.com",
  messagingSenderId: "721539405841",
  appId: "1:721539405841:web:72c6f71f6906f1b3a579b0",
  measurementId: "G-81EFX5PWR2"
};
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , room_name);
    window.location = "kwitter_page.html";
  }

  firebase.initializeApp(firebaseConfig);

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
         //End code
         });});}
   getData();

   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name" , name);
     window.location = "kwitter_page.html";
   }

  