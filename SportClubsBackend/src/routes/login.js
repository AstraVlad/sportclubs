const express = require("express");
const { loginController } = require("../controllers/login.controller");
const router = express.Router();



router.get('/', loginController);
router.post('/', (req, res) => res.send('Login not ready yet'));
router.get('/info', (req, res) => res.send('API endpoint for logging in'));

module.exports = router