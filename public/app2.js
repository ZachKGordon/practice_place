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

    }

  });

  myFirebaseRef.on("value", function(snapshot) {
    var input=document.getElementById('user');

    $('#submit').on('click', function() {
      if (input.value == snapshot.child("wallingford/zip").val()){
        var data = snapshot.child("wallingford").val();
      $('#resultsDisplay1').text(data.zip);
      $('#resultsDisplay2').text(data.neighborhood);
      $('#resultsDisplay3').text(data.cost);
      $('#resultsDisplay4').text(data.time);
      $('#resultsDisplay5').text(data.size);
      $('#resultsDisplay6').text(data.outlets);
      $('#resultsDisplay7').text(data.contact);
      $('#resultsDisplay8').text(data.image);
      } else {
        alert('Invalid Zip Code');
      }
    });
  });
});
