//get reference fot button input and display
var add = document.querySelector('.add');
var inputElement = document.querySelector('.inputTxt');
var display = document.querySelector('.display');
var initialValue =JSON.parse(localStorage.getItem('storedRegistation'));
var towns = document.querySelector('.towns');
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
    var registrationNumber = inputElement.value.toUpperCase();
    if (registrationNumber == '') {
        alert('enter registration number');
        return false;
    } else {
        newRegistration.setMap(registrationNumber);
        localStorage.setItem('storedRegistation', JSON.stringify(newRegistration.map()));
        createRegistrations(registrationNumber);
    }
}
 add.addEventListener('click', function(){
   addingElements();
   clear();
 });
 var selectedTown = function(){
   var getTowns = towns.value;
   //var arr = newRegistration.getMap();
   //console.log(arr);
    var filteredPlates = newRegistration.getReg(initialValue, getTowns);
    console.log(filteredPlates);
        for (var i = 0; i < filteredPlates.length; i++) {
            createRegistrations(filteredPlates[i]);
        }
 }
 towns.addEventListener('change', function() {
   clearBefore();
   selectedTown();
 });
 // window.addEventListener('load', function() {
 //
 // })
