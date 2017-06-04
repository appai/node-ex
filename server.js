var express = require('express'),
    app     = express();

app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 8080,
    ip   = process.env.IP   || '0.0.0.0';

app.get('/', function (req, res) {
  res.render('index.html');
});

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
