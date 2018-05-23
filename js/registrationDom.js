//get reference fot button input and display
var add = document.querySelector('.add');
var inputElement = document.querySelector('.inputTxt');
var display = document.querySelector('.display');
var initialValue =JSON.parse(localStorage.getItem('storedRegistation'));
var towns = document.querySelector('.towns');
var message = document.querySelector('.message');
var reset = document.querySelector('.reset');
//Declare object instance of registration
 var newRegistration = registration(initialValue);
 var createRegistrations = function(list){
   var element = document.createElement('li');
   element.textContent  = list;
   display.appendChild(element);
 };
 var clear = function() {
    inputElement.value = '';
}
var clearBefore = function() {
    display.innerHTML = '';
}

var addingElements = function() {
    message.innerHTML = '';
    var registrationNumber = inputElement.value.trim().toUpperCase();
    var regex = /^[a-zA-Z]{2,3}(\s)[0-9]{3}(\-)[0-9]{3}$/;
    if (registrationNumber =='' || registrationNumber ==null) {
            message.innerHTML = 'Please Enter Registration Number';
            return false;
    }
    if(registrationNumber.match(regex)){
      var plateRegistration = newRegistration.setMap(registrationNumber);
      localStorage.setItem('storedRegistation', JSON.stringify(newRegistration.map()));
    }
    else {
      message.innerHTML = 'Please enter the the correct registration number eg: CA 123-456';
      return false;
    }
      if(plateRegistration !== undefined){
        createRegistrations(plateRegistration);
      }
      else {
        message.innerHTML = 'Registration Number already exists..!';
        return false;
      }
}
 add.addEventListener('click', function(){
   addingElements();
   clear();
 });
 var selectedTown = function(){
   var getTowns = towns.value;
   var selectedReg = newRegistration.getMap();
    var filteredPlates = newRegistration.getReg(selectedReg, getTowns);
    console.log(filteredPlates);
        for (var i = 0; i < filteredPlates.length; i++) {
            createRegistrations(filteredPlates[i]);
        }
 }
 towns.addEventListener('change', function() {
   message.innerHTML = '';
   clearBefore();
   selectedTown();
 });
 window.addEventListener('load', function() {
    var arr = newRegistration.getMap();
    for (var i = 0; i < arr.length; i++) {
        createRegistrations(arr[i]);
    }
})
reset.addEventListener('click', function(){
  localStorage.clear();
  newRegistration.resetData();
  location.reload();
});
