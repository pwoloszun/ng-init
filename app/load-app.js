$script([
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'app.js',
  'view1/view1.js',
  'view2/view2.js',
  'components/version/version.js',
  'components/version/version-directive.js',
  'components/version/interpolate-filter.js'
], function () {
  console.log("qq", arguments);
  // when all is done, execute bootstrap angular application
  angular.bootstrap(document, ['myApp']);
});
