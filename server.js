var express = require('express');
var port = 8080;
var app = express();
var bodyParser = require('body-parser');

var User = function(name, password, cb){
	for (var i = 0; i < myFakeDb.users.length; i++) {
		var user = myFakeDb.users[i];
		
		if(user.name === name){
			return cb({error: 'UserName Already exists'});
		}
		
	}
	this.name = name;
	this.password = password;
	myFakeDb.users.push(this);
	if(cb){
		cb();
	}
}

var myFakeDb = {
	users: [],
};


app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'))

app.post('/users', function(req, res){
	new User(req.body.username, req.body.password, function(err){
		if(err){
			return res.send(err);
		}
		return res.send({message: 'User Successfully Created! WooT!'})
	});
});

app.get('/users', function(req, res){
	//BAD IDEA DONT DO THIS IN REAL PRACTICE
	res.send(myFakeDb.users);
});

// app.get('/', function(){
// 	console.log('Hey Someone is touching the server');
// })




app.listen(port, function(){
	console.log('Server is listening on port: ', port);
});