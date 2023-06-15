const router = require("express").Router();
const {
    login,
    adminProfession,
    adminBlog,
    adminContact,
    adminProject,
} = require("../controller/admin.controller");

router.put("/login", login);
router.get("/adminProfession", adminProfession);
router.get("/adminBlog", adminBlog);
router.get("/adminContact", adminContact);
router.get("/adminProject", adminProject);

module.exports = router;