describe('registration number widget', function(){
  it('map should not take a registration number more than once', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-345');
    newRegistration.setMap('CJ 567-787');
    newRegistration.setMap('CA 123-345');
    assert.deepEqual(newRegistration.map(), { 'CA 123-345': 0, 'CJ 567-787': 0 });
  });
  it('should be able to get all registration numbers inside the map', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-345');
    newRegistration.setMap('CJ 567-787');
    assert.deepEqual(newRegistration.getMap(), [ 'CA 123-345', 'CJ 567-787' ]);
  });
  it('should be able to check all registration numbers inside the map', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-345');
    newRegistration.setMap('CJ 567-787');
    newRegistration.setMap('CAW 983-785');
    newRegistration.setMap('CL 689-462');
    assert.deepEqual(newRegistration.map(), { 'CA 123-345': 0, 'CJ 567-787': 0, 'CAW 983-785':0, 'CL 689-462': 0});
  });
});
