/*  File Name: index.js
    Student's Name: Bhavya Bhuvanendra Kumar Sreelatha
    Student ID: 301118501
    Date: 13/02/2021
*/
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;