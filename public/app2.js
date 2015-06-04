$(function(){

  var myFirebaseRef = new Firebase("https://practiceplace.firebaseio.com/");

  myFirebaseRef.set({
    wallingford: {
      neighborhood: "Location: Wallingford, WA",
      zip: 98103,
      cost: "Cost: $300",
      time: "Hours Available: 4 hours",
      size: "Size: 500 sqft",
      outlets: "Power Outlets: 6",
      contact: "Contact Info: nacy@gmail.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
     ballard: {
      neighborhood: "Location: Ballard, WA",
      zip: 98107,
      cost: "Cost: $500",
      time: "Hours Available: 2 hours",
      size: "Size: 25 sqft",
      outlets: "Power Outlets: 1",
      contact: "Contact Info: chad@hotmail.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
     tacoma: {
      neighborhood: "Location: Tacoma, WA",
      zip: 98401,
      cost: "Cost: $200",
      time: "Hours Available: 3.5 hours",
      size: "Size: 250 sqft",
      outlets: "Power Outlets: 3",
      contact: "Contact Info: simple1@gmail.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
    bend: {
      neighborhood: "Location: Bend, OR",
      zip: 97701,
      cost: "Cost: $150",
      time: "Hours Available: 4 hours",
      size: "Size: 350 sqft",
      outlets: "Power Outlets: 4",
      contact: "Contact Info: mdh@yahoo.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
    auburn: {
      neighborhood: "Location: Auburn, WA",
      zip: 98001,
      cost: "Cost: $60",
      time: "Hours Available: 3 hours",
      size: "Size: 1000 sqft",
      outlets: "Power Outlets: 0",
      contact: "Contact Info: ezbeats@gmail.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
    westley: {
      neighborhood: "Location: Westley, CA",
      zip: 95387,
      cost: "Cost: $50",
      time: "Hours Available: 5 hours",
      size: "Size: 800 sqft",
      outlets: "Power Outlets: 2",
      contact: "Contact Info: classictunes@yahoo.com",
      // image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
  });

  myFirebaseRef.on("value", function(snapshot) {
    $('#submit').on('click', function() {
      var input = $('#user').val();
      var display = function(input){
        $('#resultsDisplay2').text(data.neighborhood);
        $('#resultsDisplay3').text(data.cost);
        $('#resultsDisplay4').text(data.time);
        $('#resultsDisplay5').text(data.size);
        $('#resultsDisplay6').text(data.outlets);
        $('#resultsDisplay7').text(data.contact);
        $('#resultsDisplay8').text(data.image);
      }
      if (input == snapshot.child("wallingford/zip").val()){
        var data = snapshot.child("wallingford").val();
        display();
      } else if (input == snapshot.child("ballard/zip").val()){
        var data = snapshot.child("ballard").val();
        display();
      } else if (input == snapshot.child("tacoma/zip").val()){
        var data = snapshot.child("tacoma").val();
        display();
      } else if (input == snapshot.child("bend/zip").val()){
        var data = snapshot.child("bend").val();
        display();
      } else if (input == snapshot.child("auburn/zip").val()){
        var data = snapshot.child("auburn").val();
        display();
      } else {
        alert('Invalid Zip Code');
      }
    });
  });
});
