document.addEventListener('DOMContentLoaded', function(){
  //get reference for script tag
  var templateSource = document.querySelector('.userTemplate').innerHTML;
  //Compile template
  var template = Handlebars.compile(templateSource);
  //get reference fot button input and display2
  var add2 = document.querySelector('.add2');
  var inputElement2 = document.querySelector('.inputTxt2');
  var display2 = document.querySelector('.display2');
  var initialValue2 =JSON.parse(localStorage.getItem('storedRegistationTemplate'));
  var towns2 = document.querySelector('.towns2');
  var message2 = document.querySelector('.message2');
  var reset2 = document.querySelector('.reset2');
  //Declare object instance of registration
   var newRegistration2 = registration(initialValue2);
   var clear = function() {
      inputElement2.value = '';
  }
  var clearBefore = function() {
      display2.innerHTML = '';
  }
  var addingElements = function() {
      message2.innerHTML = '';
      var registrationNumber2 = inputElement2.value.trim().toUpperCase();
      var regex = /^[a-zA-Z]{2,3}(\s)[0-9]{3}(\-)[0-9]{3}$/;
      if (registrationNumber2 =='' || registrationNumber2 ==null) {
              message2.innerHTML = 'Please Enter Registration Number';
              return false;
      }
      if(registrationNumber2.match(regex)){
        var plate2 = newRegistration2.setMap(registrationNumber2);
        localStorage.setItem('storedRegistationTemplate', JSON.stringify(newRegistration2.map()));
      }
      else {
        message2.innerHTML = 'Please Enter The Correct Registration Number Format eg: CA 123-456';
        return false;
      }
        if(plate2 !== undefined){
          //
          var displayData = template({
            list: newRegistration2.getMap()
          });
           display2.innerHTML = displayData;
          }

        else {
          message2.innerHTML = 'Registration Number should starts with: CA, CL, CJ and CAW Or Registration Number Already Exists..!';
          return false;
        }
  }
   add2.addEventListener('click', function(){
     addingElements();
     clear();
   });
   var selectedTown = function(){
     var getTowns2 = towns.value;
     var selectedReg = newRegistration2.getMap();

     var displayData = template({
       list: newRegistration2.getReg(selectedReg, getTowns),
     });
      display2.innerHTML = displayData;
   }
   towns2.addEventListener('change', function() {
     message2.innerHTML = '';
     clearBefore2();
     selectedTown();
   });
   window.addEventListener('load', function() {

      var displayData = template({
        list: newRegistration2.getMap()
      });
       display2.innerHTML = displayData;

});
  reset2.addEventListener('click', function(){
    window.localStorage.removeItem('storedRegistationTemplate');
    newRegistration2.resetData();
    location.reload();
  });
});
