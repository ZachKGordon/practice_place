$(function(){

  var myFirebaseRef = new Firebase("https://practiceplace.firebaseio.com/");

  myFirebaseRef.on("value", function(snapshot) {
    $('#submit').on('click', function() {
      var input = $('#user').val();
      var display = function(input){
        $('#resultsDisplay1').text(data.neighborhood);
        $('#resultsDisplay2').text(data.cost);
        $('#resultsDisplay3').text(data.time);
        $('#resultsDisplay4').text(data.size);
        $('#resultsDisplay5').text(data.outlets);
        $('#resultsDisplay6').text(data.contact);
      }
      if (input == snapshot.child("wallingford/zip").val()){
        var data = snapshot.child("wallingford").val();
        display();
        $('#picDisplay').attr('src',array[1].link);
      } else if (input == snapshot.child("ballard/zip").val()){
        var data = snapshot.child("ballard").val();
        display();
        $('#picDisplay').attr('src',array[2].link);
      } else if (input == snapshot.child("tacoma/zip").val()){
        var data = snapshot.child("tacoma").val();
        display();
        $('#picDisplay').attr('src',array[3].link);
      } else if (input == snapshot.child("bend/zip").val()){
        var data = snapshot.child("bend").val();
        display();
        $('#picDisplay').attr('src',array[4].link);
      } else if (input == snapshot.child("auburn/zip").val()){
        var data = snapshot.child("auburn").val();
        display();
        $('#picDisplay').attr('src',array[5].link);
      } else if (input == snapshot.child("westley/zip").val()){
        var data = snapshot.child("westley").val();
        display();
        $('#picDisplay').attr('src',array[6].link);
      } else {
        alert('Invalid Zip Code');
      }
    });
    $.ajax({
      url:'https://api.imgur.com/3/album/cv3fW.json',
      headers:{
       "Authorization": "Client-ID d956fdd060faa48"
      }
    })
    .done(function(info) {
      array = info.data.images;
    });
  });
});
