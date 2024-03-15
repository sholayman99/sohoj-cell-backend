const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authVerify = require("../middlewares/authVerify");


//user
router.post('/registration' , userController.registration);
router.post('/login' , userController.login);
router.post('/update',authVerify,userController.update);
router.get('/info',authVerify,userController.info);






module.exports = router;
