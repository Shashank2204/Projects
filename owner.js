(function(){
angular.module('module1').controller('ownCont', ownerController);

 function ownerController($location){
 var oCont=this;
 
 oCont.validateUser=function(){
	 
	 var query={
		 userName:'admin',
		 password:'admin'
	 };
	 console.log("owner controller");
	 $location.path('/owner').search(query);
 };

 }
})();