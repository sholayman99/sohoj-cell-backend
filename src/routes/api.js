const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const adController = require("../controllers/adController");
const categoryController = require('../controllers/categoryController');
const districtController = require('../controllers/districtController');
const divisionController = require('../controllers/divisionContoller');
const sliderController = require("../controllers/sliderController");
const authVerify = require("../middlewares/authVerify");
const adminVerify = require("../middlewares/adminVerify");


//user
router.post('/registration' , userController.registration);
router.post('/login' , userController.login);
router.post('/userNameUpdate',authVerify,userController.userNameUpdate);
router.post('/photoUpdate',authVerify,userController.photoUpdate);
router.post('/userMobileUpdate',authVerify,userController.userMobileUpdate);
router.post('/passwordUpdate',authVerify,userController.passwordUpdate);
router.get('/logout' , userController.logout);
router.get('/info',authVerify,userController.info);
router.get('/emailVerify/:email',userController.emailVerify);
router.get('/otpVerify/:email/:otp',userController.otpVerify);
router.post('/resetPass', userController.resetPass);
router.get("/count", authVerify , userController.count);

//ad
router.post('/createAd' , authVerify , adController.createAd);
router.post('/updateAd/:id' , authVerify , adController.updateAd);
router.get('/removeAd/:id',authVerify,adController.removeAd);
router.get('/adList/:pageNo/:perPage',adController.adList);
router.get('/listUserAd/:pageNo/:perPage',authVerify,adController.listUserAd);
router.get("/searchByKeyword/:pageNo/:perPage/:keyword" , adController.searchByKeyword);
router.get("/adDetails/:id",authVerify, adController.adDetails);
router.get('/filterByDivision/:pageNo/:perPage/:divisionID', adController.filterByDivision);


router.post("/filterAd", adController.filterAd);
router.get("/findSingleAd/:id", adController.findSingleAd);

//favourites
router.post('/createFavouriteList' , authVerify , adController.createFavouriteList);
router.get('/removeFavouriteList/:id' , authVerify , adController.removeFavouriteList);
router.get('/favouriteList' , authVerify , adController.favouriteList);

//category
router.get('/categoryList', categoryController.categoryList);
router.get('/listByCategory/:pageNo/:perPage/:categoryID', categoryController.listByCategory);

//district
router.get('/districtList' , districtController.districtList);

//division
router.get('/divisionList' , divisionController.divisionList);

//slider
router.get('/sliderList' , sliderController.sliderList);

//admin
router.get('/admin/updateAdStatus/:productID/:status',authVerify,adminVerify,adController.updateAdStatus);
router.get('/admin/adByStatusList/:pageNo/:perPage/:status',authVerify,adminVerify, adController.adByStatusList);
router.get('/admin/removeUser/:id',authVerify,adminVerify, userController.removeUser);
router.get("/admin/userList/:pageNo/:perPage", authVerify ,adminVerify, userController.userList);





module.exports = router;
