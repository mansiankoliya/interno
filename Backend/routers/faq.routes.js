const router = require("express").Router();
const {verify} = require("../middleware/admin.middleware");
const {
    insert,
    update,
    list,
    one,
} = require("../controller/faq.controller");

router.post("/insert",verify, insert);
router.put("/update/:faq_id",verify, update);
router.get("/list", list);
router.get("/one/:faq_id", one);

module.exports = router;