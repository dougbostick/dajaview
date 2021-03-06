const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'))
router.use('/media', require('./media'))
router.use('/relationships', require('./relationships'))
router.use('/posts', require('./posts'))
router.use('/ratings', require('./ratings'))
router.use('/watchlist', require('./watchlist'))
router.use('/recommendations', require('./recommendations'));
router.use('/chats', require('./chat'))


router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
