const router = require('express').Router(); 

const homeRoutes = require('./homeRoutes'); 

router.use('/', homeRoutes); 

// list other routes here 

module.exports = router; 