const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const adController = require("../controllers/adController");
const categoryController = require('../controllers/categoryController');
const districtController = require('../controllers/districtController');
const divisionController = require('../controllers/divisionContoller');
const authVerify = require("../middlewares/authVerify");


//user
router.post('/registration' , userController.registration);
router.post('/login' , userController.login);
router.post('/update',authVerify,userController.update);
router.get('/info',authVerify,userController.info);
router.get('/emailVerify/:email',userController.emailVerify);
router.get('/otpVerify/:email/:otp',userController.otpVerify);
router.post('/resetPass', userController.resetPass);

//ad
router.post('/createAd' , authVerify , adController.createAd);
router.post('/updateAd/:id' , authVerify , adController.updateAd);
router.get('/removeAd/:id',authVerify,adController.removeAd);
router.get('/addList',authVerify,adController.adList);
router.get('/listUserAd',authVerify,adController.listUserAd);

//category
router.get('/categoryList', categoryController.categoryList);

//district
router.get('/districtList' , districtController.districtList);

//division
router.get('/divisionList' , divisionController.divisionList);






module.exports = router;
