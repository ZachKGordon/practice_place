/*Create the constructor that will build our practice locations with location
price, hours, sqft, power, contact information. */

function Practice_place(location, cost, time, size, outlets, email, img) {
  this.location = location;
  this.cost = cost;
  this.time = time;
  this.size = size;
  this.outlets = outlets;
  this.email = email;
  this.img = img;
}

var places = [];
  places.push(new Practice_place("Wallingford, WA", 300, 4, "500 sqft", 4, "nacy@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("Ballard, WA", 500, 2, "25sqft", 1, "chad@hotmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("Tacoma, WA", 200, 3.5, "250 sqft", 3, "simple1@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("Bend, OR", 150, 4, "350sqft", 4, "mdh@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("Auburn, WA", 60, 3, "1000sqft", 0, "ezbeats@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("Westley, CA", 50, 5, "800sqft", 2, "classictunes@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));

  //For loop to iterate through our locations, then we can stringify and parse
insertplace = function() {
  for(var i = 0; i < places.length; i++) {
    console.log(places.length);
    localStorage.setItem('places[i]', JSON.stringify(places[i]));
    console.log( JSON.parse(localStorage.getItem('places[i]')));
  }
}
insertplace();

$("input").val();
