const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const addController = require("../controllers/addController");
const authVerify = require("../middlewares/authVerify");


//user
router.post('/registration' , userController.registration);
router.post('/login' , userController.login);
router.post('/update',authVerify,userController.update);
router.get('/info',authVerify,userController.info);
router.get('/emailVerify/:email',userController.emailVerify);
router.get('/otpVerify/:email/:otp',userController.otpVerify);
router.post('/resetPass', userController.resetPass);

//add
router.post('/createAdd' , authVerify , addController.createAdd);
router.post('/updateAdd/:id' , authVerify , addController.updateAdd);
router.get('/removeAdd/:id',authVerify,addController.removeAdd);
router.get('/addList',authVerify,addController.addList);
router.get('/listUserAdd',authVerify,addController.listUserAdd);







module.exports = router;
