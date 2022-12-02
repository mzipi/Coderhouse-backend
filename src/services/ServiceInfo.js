import { cpus } from "os";

export default class ServiceInfo {
    info() {
        const cwd = process.cwd();
        const pid = process.pid;
        const ver = process.version;
        const platform = process.platform;
        const mem = process.memoryUsage().rss;
        const argv = process.argv.slice(2);
        const path = process.argv[0];
        const cpusCount = cpus().length;

        return {
            cwd,
            pid,
            ver,
            platform,
            mem,
            argv,
            path,
            cpus: cpusCount
        };
    }
}