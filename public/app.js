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

  if (localStorage.Places) {
    places = JSON.parse(localStorage.getItem('Places'));
  } else {
    places.push(new Practice_place("a1", "Wallingford, WA", 300, 4, "500 sqft", 4, "nacy@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
    places.push(new Practice_place("b1", "Ballard, WA", 500, 2, "25sqft", 1, "chad@hotmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
    places.push(new Practice_place("c1", "Tacoma, WA", 200, 3.5, "250 sqft", 3, "simple1@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
    places.push(new Practice_place("d1", "Bend, OR", 150, 4, "350sqft", 4, "mdh@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
    places.push(new Practice_place("e1", "Auburn, WA", 60, 3, "1000sqft", 0, "ezbeats@gmail.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));
    places.push(new Practice_place("f1", "Westley, CA", 50, 5, "800sqft", 2, "classictunes@yahoo.com","http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg"));

    var dataToStore = JSON.stringify(places);
    localStorage.setItem('Places', dataToStore);
  }





// // Helper method to display results our html page (each time its called creates a new row)
// displayValues = function(source,data,result){
//   var html  = ("<tr><td><pre>" + source.toString() + "</pre></td>");
//   html += "<td class='big'> + </td>";
//   html += "<td><pre>" + JSON.stringify(data,null,4) +"</pre></td>";
//   html += "<td class='big'> = </td>";
//   html += "<td>" + JSON.stringify(result) + "</td></tr>";
//   $("#main").append(html);
// }


    // var sClick = $('#btn');
    // console.log(sClick);
    // sClick.on('click', function(){
    //    var x = $('#user').val();
    // console.dir(x);
    // console.log(places[0].location);
    // if (x == places[0].location) {
    //   alert("yes");
    // }
    // else {alert("no")}
    //   ;
    // });



//     (function() {                             // Lives in an IIFE
//   var $locations = place          // Get the imcost
//   var $search = $('#filter-search');      // Get the input element
//   var cache = [];                         // Create an places called cache

//   $imgs.each(function() {                 // For each image
//     cache.push({                          // Add an object to the cache places
//       element: this,                      // This image
//       text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
//     });
//   });

//   function filter() {                     // Declare filter() function
//     var query = this.value.trim().toLowerCase();  // Get the query
//     cache.forEach(function(img) {         // For each entry in cache pass image
//       var index = 0;                      // Set index to 0

//       if (query) {                        // If there is some query text
//         index = img.text.indexOf(query);  // Find if query text is in there
//       }

//       img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
//     });
//   }

//   if ('oninput' in $search[0]) {          // If browser supports input event
//     $search.on('input', filter);          // Use input event to call filter()
//   } else {                                // Otherwise
//     $search.on('keyup', filter);          // Use keyup event to call filter()
//   }

// }());






    // var $tableBody = $('<tody></tbody>');
    // for (var i = 0; i < results.length; i++) {
    //   var person = results[i];
    //   var $row = $('<tr></tr>');
    //   $row.append($('<td></td>').text(places[0].location));
    //   $row.append($('<td></td>').text(places[0].cost));
    //   $tableBody.append($row);
    // }

    // $('thead').after($tableBody);




// sClick.addEventListener('click', function(){
//   alert('hello');
// });
  // $('#usersearch').on('click', function() {
  //   alert("hello");
  // });



  //For loop to iterate through our locations, then we can stringify and parse

  //for(var i = 0; i < places.length; i++) {

//var localData = JSON.parse(localStorage.getItem('Places'));
  //console.dir(places);


//$.each(localData, function(key, value){
    //console.log(key + ' = ' + value);

//});
//}


// insertplace = function() {
//   for(var i = 0; i < places.length; i++) {
//     //console.log(places.length);
//     localStorage.setItem(places[i].id, JSON.stringify(places[i]));
//    // console.log(JSON.parse(localStorage.getItem('places[i]')));
//   }
// }
// insertplace();
//localStorage.setItem($('#user').val(),$('#user').val());

// var x = $('#user').val();
// console.dir($('#user'));
// console.log(places[0].location);
// if (x == places[0].location) {
//   alert("yes");
// }
// else {alert("no")}
//   ;

// $(function() {

//   localStorage.setItem($input)
//   JSON.parse(localStorage.getItem(places[i].id));


//   var results =[];
//   places[i].id.forEach(function)
// }

//match the variable input to location key of objects stored in localstorage
// if match made, we have to find location element details element, imcost element
// attach correspoding key values to the elements within the results html page

