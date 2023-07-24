const router = require("express").Router();
const upload = require("../helper/multer.helper");
const {verify} = require("../middleware/admin.middleware")
const {
    insert,
    update,
    list,
    one,
    latest,
    deleteB,
    category,
} = require("../controller/blog.controller");

router.post("/insert",verify,upload.array("image"), insert);
router.put("/update/:uniqueId",verify,upload.array("image"), update);
router.get("/list", list);
router.get("/one/:uniqueId", one);
router.get("/latest", latest);
router.delete("/deleteB/:uniqueId",verify, deleteB);
router.get("/category", category);

module.exports = router;