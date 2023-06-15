const router = require("express").Router();
const adminMiddle = require("../middleware/admin.middleware");
const {
    insert,
    update,
    list,
    one,
} = require("../controller/faq.controller");

router.post("/insert",adminMiddle, insert);
router.put("/update/:faq_id",adminMiddle, update);
router.get("/list", list);
router.get("/one/:faq_id", one);

module.exports = router;