const router = require("express").Router();
const upload = require("../helper/multer.helper");
const adminMiddle = require("../middleware/admin.middleware")
const {
    insert,
    update,
    list,
    one,
    latest,
    deleteB,
    category,
} = require("../controller/blog.controller");

router.post("/insert",adminMiddle,upload.array("image"), insert);
router.put("/update/:uniqueId",adminMiddle,upload.array("image"), update);
router.get("/list", list);
router.get("/one/:uniqueId", one);
router.get("/latest", latest);
router.delete("/deleteB/:uniqueId",adminMiddle, deleteB);
router.get("/category", category);

module.exports = router;