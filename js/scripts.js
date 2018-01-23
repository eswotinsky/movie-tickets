//business end
function Ticket(movieName, timeOfDay, userAge) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.userAge = userAge;
  this.price = "";
}



//front end
$(document).ready(function(){
  $("form#orderTicket").submit(function(event){
    event.preventDefault();

    var movieName = $("#movieName").val();
    var timeOfDay = $("#timeOfDay").val();
    var userAge = $("#userAge").val();


    var newTicket = new Ticket(movieName, timeOfDay, userAge);
    console.log(newTicket);


  })


})
