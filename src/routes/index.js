const express = require('express')
const { addUsers } = require('../controllers/user')

const router = express.Router()

// Controller
// import controller here


// Route
// add route here
router.post("/user",addUsers)


module.exports = router