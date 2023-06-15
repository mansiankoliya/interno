const router = require("express").Router();
const upload = require("../helper/multer.helper");
const adminMiddle = require("../middleware/admin.middleware");
const {
    insert,
    list,
    one,
    update,
    deletePR,
} = require("../controller/professional.controller");

router.post("/insert",adminMiddle,upload.single("image"), insert);
router.put("/update/:uniqueId",adminMiddle,upload.single("image"), update);
router.get("/list", list);
router.get("/one/:uniqueId", one);
router.delete("/deletePR/:uniqueId",adminMiddle, deletePR);

module.exports = router;