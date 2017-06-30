var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next){
	
	var querystring = 'select * from bookings where name = "' + req.session.user + '"'
	
	console.log(querystring);
	console.log("session user" + req.session.user)
	
	connection.query(querystring,function(err,rows){
		
		console.log(rows)
		
		if(err) {
			next(err)
			console.log(err);
			return
		}
		var flights = [];
		var trains = [];
		var buses = [];
		var count = 0;
		if(rows.length == 0){
			res.render('booking',{user:req.session.user,trainBookings:trains,busBookings:buses
				,flightBookings:flights})	
				res.end();	
		}
		rows.forEach(function(rowz){
			var querystring = 'select * from ' + rowz['transport'] + ' where id = "' + rowz['transportId']+ '"'
			console.log(querystring)
			connection.query(querystring,function(err,row){
				if(err){
					next(err)
					console.log(err)
					return
				}
				row[0].depdate = row[0].depdate.toString().substring(0,15);
				row[0].arrdate = row[0].arrdate.toString().substring(0,15);
				row[0].travelClass = rowz['travelClass']
				row[0].passCount = rowz['passCount']
				switch(rowz['transport']){
				case 'buses':
					buses.push(row[0])
					break;
				case 'flights':
					flights.push(row[0])
					break;
				case 'trains':
					trains.push(row[0])
					break;
				}
				count++;
				if(count == rows.length){
					console.log(trains)
					console.log(buses)
					console.log(flights)
		res.render('booking',{user:req.session.user,trainBookings:trains,busBookings:buses
			,flightBookings:flights})	
			res.end();	
				}
			})
		})
	})
	
})

router.post('/',function(req,res,next){
	console.log(req.body.uniqueid)
	console.log(req.body.transport)
	console.log(req.session.user)
	console.log(req.body.travelClass)
	console.log(req.body.passCount)
	
	var querystring = 'insert into bookings values ("","'+ req.session.user + '","'+ 
	req.body.transport +'","'+ req.body.uniqueid +'","'+ req.body.travelClass+'", "'
	+ req.body.passCount +'")'
	
	console.log(querystring);
	
	connection.query(querystring,function(err,rows){
		if(err) {
			next(err)
			console.log(err);
			return
		}
		res.redirect('/book')
	})
	
})
router.get('/',function(req,res,err){
	console.log("it is an sql error")
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
})

module.exports = router;
