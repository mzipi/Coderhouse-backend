const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.render("api-randoms");
});

module.exports = router;