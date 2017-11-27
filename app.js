/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var lessExpress = require('less-express');
var reactViews = require('express-react-views');

var app = express();

// all environments
app.set('port', process.env.DBWEBB_PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

app.get('/css/style.css', lessExpress('./public/stylesheets/style.less'));
app.get('/', routes.index);
app.get('/users', routes.test);
app.get('/game', routes.game);

// app.use((req, res, next) => {
//     var err = new Error("Not Found");
//
//     err.status = 404;
//     next(err);
// });

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    err.status = err.status || 500;
    res.status(err.status);
    res.render("error", {
        error: err
    });
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
