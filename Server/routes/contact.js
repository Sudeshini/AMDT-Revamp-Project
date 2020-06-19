var express = require('express');
var router = express.Router();
const db = require('monk')('localhost/mydb');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* POST Contact Create. */
router.post('/', function (req, res, next) {
  try {

    const users = db.get('users');

    console.log(`req.body`, req.body);
    const payload = req.body;
    const dbRes = users.insert(payload);


    res.json({
      status: true,
      message: "We received your query. Will get back to you soon.",
      payload
    });
    // db.close();

  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      error
    });
  }
  // res.render('contact', { title: 'Express' });
});

module.exports = router;