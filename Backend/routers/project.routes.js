const router = require("express").Router();
const {verify} = require("../middleware/admin.middleware");
const upload = require("../helper/multer.helper");
const {
    insert,
    update,
    list,
    one,
    deleteP,
    category,
    catList,
} = require("../controller/project.controller");

router.post("/insert",verify, upload.array("image"), insert);
router.put("/update/:projectId",verify, upload.array("image"), update);
router.get("/list", list);
router.get("/one/:projectId", one);
router.delete("/deleteP/:projectId",verify, deleteP);
router.get("/category", category);
router.get("/catList", catList);

module.exports = router;