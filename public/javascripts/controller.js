var app = angular.module('myApp',[])
app.run(function($rootScope){
	
})


 app.directive('pwCheck', function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
			  console.log("abc" + elem.val());
			  console.log("efg" + $(firstPassword).val());
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  });

app.controller('signupControl',function($scope,$http){
	
	
	$scope.firstName ;
	$scope.lastName  ;
	$scope.mobileNo;
	$scope.email;
	$scope.pwd;
	$scope.repPwd;
	
	
		
	$scope.submit = function(){
		var signupParams = {'firstName':$scope.firstName ,'lastName':$scope.lastName,
		'mobileNo':$scope.mobileNo, 'email': $scope.email
		,'password':$scope.pwd}
		
		$http.post('/signup',signupParams).then(function success(response){
			console.log("hi")
			console.log(response);
		},function error(response){
			console.log(response);
			console.log("yo")
		})
	}
})

app.controller('loginControl',function($scope){
	
})