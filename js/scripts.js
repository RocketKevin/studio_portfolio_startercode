// -----------firebase----------------------------
var config = {
  apiKey: "AIzaSyBJ5fFFAJeV3MMTKD0MMd_ycz3U1alOeRY",
  authDomain: "my-profile-dea20.firebaseapp.com",
  databaseURL: "https://my-profile-dea20.firebaseio.com",
  projectId: "my-profile-dea20",
  storageBucket: "my-profile-dea20.appspot.com",
  messagingSenderId: "1050589712437"
};
firebase.initializeApp(config);
    
var database = firebase.database();

var info = database.ref('Info');
var projects = database.ref('Projects');
var images = database.ref('Images');
var contacts = database.ref('Contacts');
// ----------------------------------------------
info.on('value', function(snapshot) {
      var value = snapshot.val();
      $('#name').html(value.firstName);
      $('#name').append(' ' + value.lastName);
});

projects.on('value', function(snapshot) {
      var projects = snapshot.val();
      for (var key in projects){
        $('#panelTwo').append('<p>' + key + '</p>');
      }
});

images.on('value', function(snapshot) {
      var images = snapshot.val();
      for (var key in images){
        $('#panelThree').append('<p>' + key + '</p>');
      }
});
// button click--------------------------------
function addClickHandlersToButtons() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            
            // $('.panel').append('<div id = ' + 'panelOne' + '><p id='+'highschool'+'></p><p id='+'address'+'></p><p id='+'birth'+'></p><p id='+'gender'+'></p></div>')
            
            info.on('value', function(snapshot) {
                var value = snapshot.val();
                $('#highschool').html('High School: ' + value.highSchool);
                $('#address').html('Mailing Addrees: ' + value.Address);
                $('#birth').html('Birth: ' + value.Birth);
                $('#gender').html('Gender: ' + value.Gender);
            });
            
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        };
    }
}

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(addClickHandlersToButtons)
// -----------------------------------------------------

// -------------contact button--------------------------
function myFunction() {
    contacts.on('value', function(snapshot) {
        var contacts = snapshot.val();
        alert('Phone: ' + contacts.Phone + '\n' + 'Email: ' + contacts.Email);
    });
}
// -----------------------------------------------------


