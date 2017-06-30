var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next) {
	console.log(req.query.city)
	
	var querystring = 'select * from ' + tours + 'where city = ' + req.query.city
	
	connection.query(querystring, function(err,rows){
		
		if(err){
			next(err)
			return;
		}
		
		res.render('tourDetails.jade',{rows:rows})
		
	})
	
})

module.exports = router