describe('Unit: sampleController', function() {
  // Our tests will go here
  // Load the module with MainController
  beforeEach(module('myApp.controllers'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('AppCtrl', {
      $scope: scope
    });
  }));

  it('should create $scope.greeting when calling sayHello',
  function() {
    expect(scope.greeting).toBeUndefined();
    scope.sayHello();
    expect(scope.greeting).toEqual("Hello World");
  });
})