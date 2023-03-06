const router = require("express").Router();
const apiController = require("../controllers/apiController");

router.get("/getallbank", apiController.getAllBank);
router.get("/getallproduct", apiController.getallproduct);
router.get("/getallmember", apiController.getallmember);
router.get("/getallbooking", apiController.getallbooking);
router.get("/getallitem" , apiController.getallitem);
router.post("/getbyidbank", apiController.getbyidBank);
router.post("/getbyidname" , apiController.getbyidname);


module.exports = router;
