const express = require('express')
const userController = require('../controllers/userController')
const router = express()



router.get('/generate_login_token', userController.generateToken)
router.post('/authorize_login_token', userController.authorizeToken)





module.exports = router 