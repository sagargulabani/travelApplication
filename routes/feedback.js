var express = require('express');
var mysql = require('mysql');
var router = express.Router();

router.get('/',function(req,res,next){
	console.log(req.query.name)
	console.log(req.query.email)
	console.log(req.query.comment)
	var querystring = 'insert into feedback values ("","'+req.query.name+'","'+req.query.email+'","'+req.query.comment+'")';
	connection.query(querystring,function(err,rows){
		if(err){
			next(err)
			return
		}
		
		console.log("Feedback inserted")
		res.redirect('/')
	})
})

module.exports = router