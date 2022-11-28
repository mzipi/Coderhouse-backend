import { Router } from "express";
import { cpus as _cpus } from "os";
import compression from "compression";

const router = Router();
const cwd = process.cwd();
const pid = process.pid;
const ver = process.version;
const platform = process.platform;
const mem = process.memoryUsage().rss;
const argv = process.argv.slice(2);
const path = process.argv[0];
const cpus = _cpus().length;

router.get("/", compression(), (req, res) => {
    res.render("info", { cwd, pid, ver, platform, mem, argv, path, cpus });
});

export default router;