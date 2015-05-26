(function() {

  angular.module('module1', ['ngRoute']).config(mConfig);

 function mConfig($routeProvider){
	$routeProvider
	.when('/home',{
	templateUrl:'onlineReservation.html',
	controller:'homeCont',
	controllerAs:'hCont'
	})
	.when('/owner',{
	templateUrl:'ownerPage.html',
	controller:'ownCont',
	controllerAs:'oCont'
	})
	
	.otherwise({
		redirectTo:'/home'
	});
	
}

})();