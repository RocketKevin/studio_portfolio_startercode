function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('#aboutme')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
 // Initialize Firebase
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
// var lastName = database.ref('lastName');
// var highSchool = database.ref('highSchool');
// var address = database.ref('Address');
// var birth = database.ref('Birth');

info.on('value', function(snapshot) {
      var name = snapshot.val();
      //console.log(name);
      $('#name').html(name.firstName);
      $('#name').append(' ' + name.lastName);
      $('#highschool').html(name.highSchool);
      $('#address').html(name.Address);
      $('#birth').html(name.Birth);
});

projects.on('value', function(snapshot) {
      var projects = snapshot.val();
      for (var key in projects){
        console.log(key)
        var container;
        container = key;
        $('#test').append(container);
      }
});


