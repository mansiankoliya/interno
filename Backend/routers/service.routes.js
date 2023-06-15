const router = require("express").Router();
const upload = require("../helper/multer.helper");
const adminMiddle = require("../middleware/admin.middleware");
const {
    insert,
    update,
    list,
    one,
} = require("../controller/service.controller");

router.post("/insert",adminMiddle, upload.single("video"), insert);
router.put("/update/:serviceId",adminMiddle, upload.single("video"), update);
router.get("/list", list);
router.get("/one/:serviceId", one);

module.exports = router;
