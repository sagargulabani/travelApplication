var express = require('express');

var router = express.Router();

/* GET users listing. */



router.post('/', function(req, res, next) {
	
	var firstName = req.body.firstName
	var lastName = req.body.lastName
	var mobileNo = req.body.mobileNo
	var emailAddress = req.body.emailAddress
	var password = req.body.password
	
	console.log(req.body)
	console.log(firstName)
	console.log(lastName)
	console.log(mobileNo)
	console.log(emailAddress)
	console.log(password)
	
	var querystring = 'insert into users values ("","' + firstName + '","' + lastName + '","'+ mobileNo +'","'+ emailAddress +'","'+ password +'")'
	
	
	
	connection.query(querystring, function(err,rows){
		
		if(err) {
			next(err)
			console.log(err);
			return
		}
		console.log(rows)
		res.redirect('/')
	})
});


module.exports = router;
