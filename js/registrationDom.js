//get reference fot button input and display
var add = document.querySelector('.add');
var inputElement = document.querySelector('.inputTxt');
var display = document.querySelector('.display');
var initialValue =JSON.parse(localStorage.getItem('storedRegistation'));
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

  //Add values inside the map into thw local storage
  localStorage.setItem('storedRegistation',JSON.stringify(newRegistration.map()))
 });
