var express = require('express');
var mysql = require('mysql');
var router = express.Router();


router.get('/',function(req,res,next){
	
	
	console.log(req.query)
	console.log(req.query.depcity)
	console.log(req.query.arrcity)
	console.log(req.query.tripOneRound)
	console.log(req.query.depdate)
	console.log(req.query.retdate)
	console.log(req.query.travelClass)
	console.log(req.query.passCount)
	
	var depdatearray = req.query.depdate.split('/')
	var depdate = depdatearray[2] + '-' + depdatearray[1] + '-' + depdatearray[0]
	var retdatearray;
	var retdate;
	if(req.query.tripOneRound == 'roundTrip'){
		retdatearray = req.query.retdate.split('/')
		retdate = retdatearray[2] + '-' + retdatearray[1] + '-' + retdatearray[0]
	}
	
	var querystring = 'select * from ' + req.query.search +' where depcity = "' + req.query.depcity + '"  and arrcity = "' +req.query.arrcity + '" and depdate = "'+ depdate + '"'; 
	console.log(querystring)
	
	connection.query(querystring, function(err,rows){
		
		if(err) {
			next(err)
			return
		}
		
		var transport = '';
		if(req.query.search == 'buses'){
			transport = 'buses'
		}
		else if(req.query.search == 'flights'){
			transport = 'flights'
		}
		else if(req.query.search == 'trains'){
			transport = 'trains'
		}
		
		console.log(rows)
		rows.forEach(function(rowz){
			console.log(rowz)
			var arrdate = rowz["arrdate"]
			console.log(arrdate)
			delete rowz["arrdate"]
			console.log(arrdate.toLocaleDateString())
			rowz["arrdate"] = arrdate.toLocaleDateString()
			var depdate = rowz["depdate"]
			delete rowz["depdate"]
			rowz["depdate"] = depdate.toLocaleDateString()
		})
		
		var user;
		if(req.session && req.session.user){
			user = req.session.user;
		}
		
		var searchData = {transport:transport,depcity:req.query.depcity,
			arrcity:req.query.arrcity, depdate:req.query.depdate,
			retdate:req.query.retdate,travelClass:req.query.travelClass,
			roundTrip:roundTrip,passCount:req.query.passCount
		}
		
		var renderFunction = function(renderedData){
			
			res.render('search.jade', renderedData)
		}
		
		var roundTrip;
		if(req.query.tripOneRound == 'roundTrip'){
			searchData.roundTrip = true;
			querystring = 'select * from ' + req.query.search +' where depcity = "' + req.query.arrcity + '"  and arrcity = "' +req.query.depcity + '" and depdate = "'+ retdate + '"'; 
			connection.query(querystring, function(err,rows2){

				if(err) {
					next(err)
					return
				}
		
				console.log(rows)
		
				rows2.forEach(function(rowz){
					console.log(rowz)
					var arrdate = rowz["arrdate"]
					console.log(arrdate)
					delete rowz["arrdate"]
					console.log(arrdate.toLocaleDateString())
					rowz["arrdate"] = arrdate.toLocaleDateString()
					var depdate = rowz["depdate"]
					delete rowz["depdate"]
					rowz["depdate"] = depdate.toLocaleDateString()
				})
				var renderedData = {user:user,searchData:searchData, datas: rows, datasReturn:rows2}
				renderFunction(renderedData);
		
			});
		}
		
else{
	searchData.roundTrip = false;
	var renderedData = {user:user,searchData:searchData, datas: rows}
	roundTrip = false;
	renderFunction(renderedData);
}
	
});
});



router.get('/',function(req,res,err){
	console.log("it is an sql error")
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
})


module.exports = router;