var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	
	var querystring = 'select location, price, days, nights from tours';
	
	var tour;
	connection.query(querystring,function(err,rows){
		
		if(err){
			next(err)
			return
		}
		
		rows.forEach(function(rowz){
			console.log(rowz)
		})
		tour = rows;
		
		console.log(tour.length);
		var user;
		if(req.session && req.session.user){
			user = req.session.user;
		}
		
	  res.render('index', { title: 'Welcome to Sagar Travels', tours:tour, user: user});
	  
	});
	})
	
	



module.exports = router;
