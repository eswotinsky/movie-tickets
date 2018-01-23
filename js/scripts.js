//business end
function Ticket(movieName, timeOfDay, userAge) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.userAge = userAge;
  this.price = 0;
}

function Movie(movieName, newRelease) {
  this.movieName = movieName;
  this.newRelease = newRelease;
}

var moviesArray = [
  new Movie("The Shape of Water", true),
  new Movie("Lady Bird", true),
  new Movie("Star Wars: The Last Jedi", false),
  new Movie("Kung Fu Hustle", false),
  new Movie("Baby Driver", false)
];

//loop through moviesArray and fill Select form with each title
function fillMovieForm(moviesArray){
  var i = 0;
  moviesArray.forEach(function(movie){
    $("#movieName").append("<option>" + moviesArray[i].movieName + "</option>");
    i++;
  });
}

//check the .userAge property of an object. Add some amount to the .price property of that object, depending on the value of object.userAge
function calcPrice(object) {

  if(object.userAge == "child"){
    object.price += 5;
  }
  else if (object.userAge == "adult"){
    object.price += 8;
  }
  else if (object.userAge == "senior"){
    object.price += 5;
  }

}



//front end
$(document).ready(function(){

  fillMovieForm(moviesArray);

  $("form#orderTicket").submit(function(event){
    event.preventDefault();


    var movieName = $("#movieName").val();
    var timeOfDay = $("#timeOfDay").val();
    var userAge = $("#userAge").val();

    var newTicket = new Ticket(movieName, timeOfDay, userAge);
    console.log(newTicket);

    calcPrice(newTicket);
    console.log(newTicket);


  })


})
