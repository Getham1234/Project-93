user_name = localStorage.getItem("username");
document.getElementById("welcome_label").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDIRpGllyi_sw0S00HbPJ2HEztrKBRA6sQ",
      authDomain: "kwitter-d9355.firebaseapp.com",
      projectId: "kwitter-d9355",
      storageBucket: "kwitter-d9355.appspot.com",
      messagingSenderId: "313628157685",
      appId: "1:313628157685:web:7fbd27cbaed118af9c87bc"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logOut(){
      localStorage.removeItem("username");
      window.location = "index.html"
}