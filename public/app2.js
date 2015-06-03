$(function(){

  var myFirebaseRef = new Firebase("https://practiceplace.firebaseio.com/");

  myFirebaseRef.set({
    wallingford: {
      zip: 98103,
      neighborhood: "Wallingford, WA",
      cost: 300,
      time: 4,
      size: "500 sqft",
      outlets: 6,
      contact: "nacy@gmail.com",
      image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },

    ballard: {
      zip: 98107,
      neighborhood: "Ballard, WA",
      cost: 500,
      time: 2,
      size: "25 sqft",
      outlets: 1,
      contact: "chad@hotmail.com",
      image: "http://bygghjalphemma.se/wp-content/uploads/2014/11/bill-gates-wealthiest-person.jpg",
    },
  });

  myFirebaseRef.on("value", function(snapshot) {
    $('#submit').on('click', function() {
      var input = $('#user').val();
      var display = function(input){
        $('#resultsDisplay1').text(data.zip);
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
      } else {
        alert('Invalid Zip Code');
      }
    });
  });
});
