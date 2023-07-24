const router = require("express").Router();
const { verify } = require('../middleware/admin.middleware')
const {
    login,
    adminProfession,
    adminBlog,
    adminContact,
    adminProject,
    logout
} = require("../controller/admin.controller");

router.post("/login", login);
router.get("/adminProfession", adminProfession);
router.get("/adminBlog", adminBlog);
router.get("/adminContact", adminContact);
router.get("/adminProject", adminProject);
router.post('/logout', verify, logout)

module.exports = router;