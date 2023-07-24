const router = require("express").Router();
const upload = require("../helper/multer.helper");
const {verify} = require("../middleware/admin.middleware");
const {
    insert,
    list,
    one,
    update,
    deletePR,
} = require("../controller/professional.controller");

router.post("/insert",verify,upload.single("image"), insert);
router.put("/update/:uniqueId",verify,upload.single("image"), update);
router.get("/list", list);
router.get("/one/:uniqueId", one);
router.delete("/deletePR/:uniqueId",verify, deletePR);

module.exports = router;