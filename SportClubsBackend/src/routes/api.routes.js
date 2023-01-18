const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/login.controller");
const {dummyController, paramsDummyController, queryDummyController} = require("../controllers/dummy.controller")
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

const redirectNonAuthToLogin=ensureLoggedIn('/api/login')

router.get('/login', (req, res) => {
  return res.status(200).send("Login form will be here")
})

//Login route, on success refirect to the root
router.post('/login', loginController.authenticate('local', {
  successReturnToOrRedirect: '/',
  //successReturnToOrRedirect: '/success',
  failureRedirect: '/api/login',
  //failureRedirect: '/failure',
  failureMessage: true
}))

//Logout route, on success redirect to the root
router.post('/logout', redirectNonAuthToLogin, function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

//Password recovery root, not implemented
router.post('/login/forgot', (req, res) => {
  return res.status(200).send("A message with further instructions has been sent to the mail {HERE WE USE EMAIL FIELD} ")
}
)

//GET users list with optional query, not implemented
router.get('/users', paramsDummyController)

router.post('/users', redirectNonAuthToLogin, dummyController)

router.get('/users/:id', redirectNonAuthToLogin, paramsDummyController)

router.post('/users/:id', redirectNonAuthToLogin, paramsDummyController)

//GET clubs list with optional query, not implemented
router.get('/clubs', dummyController)

router.post('/clubs', redirectNonAuthToLogin, dummyController)

router.get('/clubs/:id', paramsDummyController)

router.post('/clubs/:id', redirectNonAuthToLogin, paramsDummyController)

router.get('/subscribers', redirectNonAuthToLogin, queryDummyController)

router.post('/subscribers', redirectNonAuthToLogin, dummyController)

router.get('/subscribers/:id', redirectNonAuthToLogin, paramsDummyController)

router.post('/subscribers/:id', redirectNonAuthToLogin, paramsDummyController)

module.exports = router