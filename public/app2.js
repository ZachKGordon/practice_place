var myFirebaseRef = new Firebase("https://practiceplace.firebaseio.com/");


myFirebaseRef.set({
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

myFirebaseRef.child("location/state").on("value", function(snapshot) {
  alert(snapshot.val());
});
