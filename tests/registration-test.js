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
  it('should be able to return all registration numbers inside the map', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-345');
    newRegistration.setMap('CJ 567-787');
    newRegistration.setMap('CAW 983-785');
    newRegistration.setMap('CL 689-462');
    assert.deepEqual(newRegistration.map(), { 'CA 123-345': 0, 'CJ 567-787': 0, 'CAW 983-785':0, 'CL 689-462': 0});
  });
  it('should be able to return registration number from Cape Town', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-456');
    newRegistration.setMap('CA 123-956');
    newRegistration.setMap('CL 123-456');
    newRegistration.setMap('CJ 123-456');
    var getList = newRegistration.getMap()
    assert.deepEqual(newRegistration.getReg(getList,'CA'), ['CA 123-456', 'CA 123-956']);
  });
  it('should be able to return registration number from StellenBosch', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-456');
    newRegistration.setMap('CL 123-956');
    newRegistration.setMap('CL 123-456');
    newRegistration.setMap('CJ 123-456');
    newRegistration.setMap('CAW 123-456');
    var getList = newRegistration.getMap()
    assert.deepEqual(newRegistration.getReg(getList, 'CL'), ['CL 123-956', 'CL 123-456']);
  });
  it('should be able to return registration number from Paarl', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-456');
    newRegistration.setMap('CA 123-956');
    newRegistration.setMap('CL 123-456');
    newRegistration.setMap('CJ 123-456');
    newRegistration.setMap('CAW 123-456');
    var getList = newRegistration.getMap()
    assert.deepEqual(newRegistration.getReg(getList, 'CJ'), ['CJ 123-456']);
  });
  it('should be able to return registration number from George', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-456');
    newRegistration.setMap('CA 123-956');
    newRegistration.setMap('CL 123-456');
    newRegistration.setMap('CJ 123-456');
    newRegistration.setMap('CAW 123-456');
    var getList = newRegistration.getMap()
    assert.deepEqual(newRegistration.getReg(getList, 'CAW'), ['CAW 123-456']);
  });

  it('should be able to return all registration numbers from all towns', function(){
    var newRegistration = registration();
    newRegistration.setMap('CA 123-456');
    newRegistration.setMap('CL 123-456');
    newRegistration.setMap('CJ 123-456');
    newRegistration.setMap('CAW 123-456');
    //var getList = newRegistration.getMap()
    assert.deepEqual(newRegistration.getMap('allTown'), ['CA 123-456', 'CL 123-456', 'CJ 123-456', 'CAW 123-456']);
  });
});
