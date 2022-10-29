const { Router } = require("express");

const router = Router();
const cwd = process.cwd();
const pid = process.pid;
const ver = process.version;
const platform = process.platform;
const mem = process.memoryUsage().rss;
const argv = process.argv.slice(2);
const path = process.argv[0]

console.log(process.argv[0]);

router.get("/", (req, res) => {
    res.render("info", { cwd, pid, ver, platform, mem, argv, path });
});

module.exports = router;