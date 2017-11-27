/*
 * GET home page.
 */
// exports.index = function(req, res) {
//   res.render('index', {title: 'Express', foo: {bar: 'baz'}});
// };

exports.index = (req, res) => {
    res.render('index', {title: 'Oscar Bäck'});
};

exports.about = (req, res) => {
    res.render('about', {title: 'About'});
};

exports.report = (req, res) => {
    res.render('report', {title: 'Reports'});
};

exports.test = (req, res) => {
    res.render('test');
};

exports.game = (req, res) => {
    res.render('game');
};
