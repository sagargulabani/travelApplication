var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
	
	console.log(req.body.emailAddress)
	console.log(req.body.password)
	
	var querystring = 'select password,firstName from users where emailAddress = "' + req.body.emailAddress +'"'
	
	connection.query(querystring, function(err,rows){
		
		console.log("logged in")
		
		if(err) {
			next(err)
			return
		}
		
		if(rows.count == 0){
			res.send("Invalid Email Address")
		}
		else{
			if(rows[0]['password'] == req.body.password){
				req.session.user = rows[0]['firstName']
				res.redirect('/')
			}
		}
		
	})
	
});

module.exports = router;
