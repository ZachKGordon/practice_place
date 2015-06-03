/*Create the constructor that will build our practice locations with location
price, hours, sqft, power, contact information. */

function Practice_place(id, location, cost, time, size, outlets, email, img) {
  this.id = id;
  this.location = location;
  this.cost = cost;
  this.time = time;
  this.size = size;
  this.outlets = outlets;
  this.email = email;
  this.img = img;

}

var places = [];
  places.push(new Practice_place("a1", "Wallingford, WA", 300, 4, "500 sqft", 4, "nacy@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("b1", "Ballard, WA", 500, 2, "25sqft", 1, "chad@hotmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("c1", "Tacoma, WA", 200, 3.5, "250 sqft", 3, "simple1@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("d1", "Bend, OR", 150, 4, "350sqft", 4, "mdh@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("e1", "Auburn, WA", 60, 3, "1000sqft", 0, "ezbeats@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
  places.push(new Practice_place("f1", "Westley, CA", 50, 5, "800sqft", 2, "classictunes@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));

  //For loop to iterate through our locations, then we can stringify and parse
insertplace = function() {
  for(var i = 0; i < places.length; i++) {
    //console.log(places.length);
    localStorage.setItem(places[i].id, JSON.stringify(places[i]));
   // console.log(JSON.parse(localStorage.getItem('places[i]')));
  }
}
insertplace();

$(function() {
  var $input = $('#user').val();
  JSON.parse(localStorage.getItem(places[i].id));


  var results =[];
  places[i].id.forEach(function)
}

//match the variable input to location key of objects stored in localstorage
// if match made, we have to find location element details element, images element
// attach correspoding key values to the elements within the results html page

