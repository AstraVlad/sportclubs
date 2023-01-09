const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('Here comes the login page'));
router.post('/', (req, res) => res.send('Login not ready yet'));
router.get('/info', (req, res) => res.send('API endpoint for logging in'));

module.exports = router