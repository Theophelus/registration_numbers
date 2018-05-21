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
        registrationNumber = numbers;
        //Check if the map is empty, if empty and REGISTRATION NUMBER
        if(registrationMap[registrationNumber]=== undefined){
          registrationMap[registrationNumber] = 0;
          for(let key in registrationMap){
            reg = key;
          }
      }
      }
      return reg;
    }
    /*
    // TODO: create a function call filter that must take in parameters called town.
    // TODO: parameter names  town,
    // TODO: add conditions to check for all getTowns
    // TODO: loop through the list and check,
    */
    var getReg = function(checkAllTowns, town) {
      var storedRegistration = [];
      var registrations = getMap();
      // if(town === 'allTown'){
      //   return registrations;
      //   console.log(registrations);
      // }
        for(var i=0; i< registrations.length; i++){
          listReg = registrations[i];
          if(listReg.startsWith(town)){
            storedRegistration.push(listReg);
          }
      }
    return storedRegistration;
    console.log(filter(storedRegistration));
    }

    var map = function(){
      return registrationMap;
    }
    console.log(registrationMap);
    //Create a function to get all the registrations in the reg
    var getMap = function(){
      return Object.keys(registrationMap);
    }
    console.log(getMap());

    //console.log(map);
    return{
      setMap,
      getMap,
      getReg,
      map
    }
}
