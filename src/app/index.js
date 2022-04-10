var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

/*app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})*/


/*app.listen(process.env.PORT || 4200, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});*/

app.listen(process.env.PORT || 80, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
}); 