//get reference fot button input and display
var add = document.querySelector('.add');
var inputElement = document.querySelector('.inputTxt');
var display = document.querySelector('.display');
//Declare object instance of registration
 var newRegistration = registration();

 var addNemElement = function(registrationNumber){
   var element = document.createElement('li');
   var registrationNumber = inputElement.value;
   element.textContent  = registrationNumber;
   display.appendChild(element);
  newRegistration.setMap(registrationNumber);
 };
 add.addEventListener('click', function(){
   addNemElement();
  console.log(newRegistration.map());

 });
