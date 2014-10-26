var express = require('express'),
	app = express();

var _ = require('lodash');

var interestRate;

app.use(express.static(__dirname + '/public'))

app.get('/interest_rate', function (req, res){
	//Throwing a + in from of the string to a number.  parseInt('str') works as well
	//interestRate = +(Math.random() * 19 + 1).toFixed(2);

	interestRate = +_.random(1.1, 19.9).toFixed(2);
	//Using lodash

	return res.status(200).send(JSON.stringify(interestRate));
});


app.listen(8888, function(){
	console.log("We're Running on port 8888!")
});
