const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/login.controller");

router.post('/login', loginController)
router.post('/login/forgot', (req, res) => {
  return res.status(200).send("A message with further instructions has been sent to the mail {HERE WE USE EMAIL FIELD} ")
}

)
router.get('/login', (req, res)=>{return res.send("Login here")})
router.get('/', (req, res)=>{return res.send("API here")})

module.exports = router