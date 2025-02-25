"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const router = require('express').Router()

const { login, logout } = require('../controllers/auth')

// URL : /auth

router.post('/login', login)

// router.all('/logout', logout)
router.get('/logout', logout)


module.exports = router