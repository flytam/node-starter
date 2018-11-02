import "core-js";
import http from "http";
import Console from "./lib/console";
const wait = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(1000);
        }, 3000);
    });
// const consoleApp = new Console();
//consoleApp.log();
let a = { c: 1 };
console.log({ ...a });
const app = http.createServer(async (req, res) => {
    console.log("req come");
    await wait();
    res.end("..ss312312s");
});
app.listen(3000, () => console.log("listen in 3000"));
