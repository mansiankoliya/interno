const router = require("express").Router();
const upload = require("../helper/multer.helper");
const { verify } = require("../middleware/admin.middleware");
const {
    insert,
    update,
    list,
    one,
} = require("../controller/service.controller");

router.post("/insert", verify, upload.single("video"), insert);
router.put("/update/:serviceId", verify, upload.single("video"), update);
router.get("/list", list);
router.get("/one/:serviceId", one);

module.exports = router;
