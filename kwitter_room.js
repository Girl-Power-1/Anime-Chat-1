var firebaseConfig = {
  apiKey: "AIzaSyClLXamOqwUYw6dSwv1XPw_E34sO3dg-eQ",
  authDomain: "anime-chat---chatlet.firebaseapp.com",
  databaseURL: "https://anime-chat---chatlet-default-rtdb.firebaseio.com",
  projectId: "anime-chat---chatlet",
  storageBucket: "anime-chat---chatlet.appspot.com",
  messagingSenderId: "207740974602",
  appId: "1:207740974602:web:8514ec2810607e46d011f3"
};

  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "Kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
