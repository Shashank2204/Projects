 (function(){ 
   angular.module('module1').controller('MainCtrl', MainController);
  function MainController() {
    var mctrl = this;

   // mctrl.name = "AngularJS";

    //AJAX CALL
    mctrl.people = [{
      "id": 1,
      "firstName": "PENELOPE",
      "lastName": "GUINESS",
      "email": "PENELOPE.GUINESS@abc.com",
      "city": "Palo Alto",
      "phone": "2830338429",
	   "time": "3:00 PM",
	    "size": " 5",
		 "date": "07/07/2015",
	  
    }, {
      "id": 2,
      "firstName": "NICK",
      "lastName": "WAHLBERG",
      "email": "NICK.WAHLBERG@abc.com",
      "city": "Richmond",
      "phone": "8386352866",
	  "time": "9:00 PM",
	    "size": " 2",
		 "date": "07/16/2015",
    }, {
      "id": 3,
      "firstName": "ED",
      "lastName": "CHASE",
      "email": "ED.CHASE@abc.com",
      "city": "Seattle",
      "phone": "4484771904",
	  "time": "9:00 PM",
	    "size": " 2",
		 "date": "07/10/2015",
    }, {
      "id": 4,
      "firstName": "JENNIFER",
      "lastName": "DAVIS",
      "email": "JENNIFER.DAVIS@abc.com",
      "city": "Chicago",
      "phone": "7058140035",
	  "time": "9:00 PM",
	    "size": " 5",
		 "date": "07/01/2015",
    }, {
      "id": 5,
      "firstName": "JOHNNY",
      "lastName": "LOLLOBRIGIDA",
      "email": "JOHNNY.LOLLOBRIGIDA@abc.com",
      "city": "Dallas",
      "phone": "1065564866",
	  "time": "3:00 PM",
	    "size": " 5",
		 "date": "07/07/2015",
    }];

	 mctrl.peopleReq=[
		 {
      "id": 8,
      "firstName": "MATTHEW",
      "lastName": "JOHANSSON",
      "email": "MATTHEW.JOHANSSON@abc.com",
      "city": "Denver",
      "phone": "6572822859",
    }, {
      "id": 9,
      "firstName": "JOE",
      "lastName": "SWANK",
      "email": "JOE.SWANK@abc.com",
      "city": "Phoenix",
      "phone": "3806575226",
    }, {
      "id": 10,
      "firstName": "CHRISTIAN",
      "lastName": "GABLE",
      "email": "CHRISTIAN.GABLE@abc.com",
      "city": "Miami",
      "phone": "6488569361",
    }
		 
	 ];
	
	
    mctrl.addPerson = function() {
      mctrl.newPerson.id = mctrl.people.length + 1;
      mctrl.people.push(mctrl.newPerson);
      console.log(mctrl.people);
      mctrl.newPerson = null;
    };
    
    mctrl.deletePerson = function(location) {
      mctrl.people.splice(location, 1);
      console.log(mctrl.people);
    };

  }
  })();
