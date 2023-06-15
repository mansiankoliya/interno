const router = require("express").Router();
const {
    insert,
    list,
    deleteC,
} = require("../controller/contact.controller");

router.post("/insert", insert);
router.get("/list", list);
router.get("/deleteC/:_id", deleteC);

module.exports = router;