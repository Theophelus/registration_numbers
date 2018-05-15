//Application logic for Registration NUMBER
var registration = function(initialValue){
  //Declare three variables map, registrationNUmber,
  var registrationMap = {};
  var registrationNumber = '';
  if(initialValue){
    registrationMap = initialValue;
  }
  //Create a function to map all the registration numbers
    var setMap = function(numbers){
      if(numbers !==''){
        registrationNumber = numbers
          //Check if the map is empty, if empty and REGISTRATION NUMBER
          if(registrationMap[registrationNumber] === undefined){
            registrationMap[registrationNumber] = 0;
          }
        }
    }
    //create a function to check if registration belong to which Town
    // var registrationCheck = function(registrationMap, city){
    //   //add a variable to store values in the registratrion
    //   var registration = getMap();
    //   //loop through the list to check which registration belong to which city
    //   for(var i=0; i<registrationMap.length; i++){
    //
    //   }
    // }
    //Create a function to get all the registrations in the reg
    var getMap = function(){
      return Object.keys(registrationMap);
    }
    console.log(registrationMap);
    //Return registration map
    var map = function(){
      return registrationMap;
    }
    //console.log(map);
    return{
      setMap,
      getMap,
      map
    }
}
