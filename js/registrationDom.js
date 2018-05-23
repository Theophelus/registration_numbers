//get reference fot button input and display
var add = document.querySelector('.add');
var inputElement = document.querySelector('.inputTxt');
var display = document.querySelector('.display');
var initialValue =JSON.parse(localStorage.getItem('storedRegistation'));
var towns = document.querySelector('.towns');
var message = document.querySelector('.message');
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
var duplicates = function(duplicate){
  if(duplicate !== undefined){
    createRegistrations(duplicate);
    display.innerHTML = '';
  }
}
var regularEx = function(){

}
var addingElements = function() {
    message.innerHTML = '';
    var registrationNumber = inputElement.value.toUpperCase();
    var regex = /^[a-zA-Z]{2,3}(\s)[0-9]{3}(\-)[0-9]{3}$/;
    if (registrationNumber =='' || registrationNumber ==null) {
            message.innerHTML = 'enter registration number';
            return false;
    }else if(registrationNumber.match(regex)){
      var whatEver = newRegistration.setMap(registrationNumber);
      localStorage.setItem('storedRegistation', JSON.stringify(newRegistration.map()));
      if(whatEver !== undefined){
        createRegistrations(whatEver);
      }
    }
    else {
      message.innerHTML = 'Please enter the the correct registration number eg: CA 123-456';
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
   clearBefore();
   selectedTown();
 });
 window.addEventListener('load', function() {
    var arr = newRegistration.getMap();
    for (var i = 0; i < arr.length; i++) {
        createRegistrations(arr[i]);
    }
})
