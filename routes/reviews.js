var express = require('express');
var router = express.Router();

router.get('/:movie_id/reviews', function (req, res, next) {
  res.render('movies/index');
})

router.get('/:movie_id/reviews/new', function (req, res, next) {
  res.render('movies/reviews/new');
})

router.post('/:movie_id/reviews', function (req, res, next) {
  res.redirect('/movies/:movie_id/reviews');
})

router.get('/:movie_id/reviews/:id', function (req, res, next) {
  res.render('movies/reviews/show');
})

router.get('/:movie_id/reviews/:id/edit', function (req, res, next) {
  res.render('movies/reviews/edit');
})

router.post('/:movie_id/reviews/:id', function (req, res, next) {
  res.redirect('/movies/:movie_id/reviews/:id');
})

router.post('/:movie_id/reviews/:id/delete', function (req, res, next) {
  res.redirect('/movies/:movie_id/reviews');
})

module.exports = router;
