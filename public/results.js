
console.log(localStorage.length);

var place [];

tree = function () {
for (var j = 0; j < localStorage.length; j++) {
  var datatoStore = JSON.parse(localStorage.getItem(localStorage.id));
  console.log(datatoStore);
}
}

tree();



 // for(var i = 0; i < places.length; i++) {
 // var dataToStore = JSON.stringify(places[i].id);
 // localStorage.setItem(places[i].id, dataToStore);
 // var localData = JSON.parse(localStorage.getItem(places[i].id));
 // $.each(localData, function(key, value){
 //    console.log(key + ' = ' + value);
 //    console.log(localData);
 //   var DataArray = [];
 //   DataArray.push(localData);
 //   console.log(DataArray);
