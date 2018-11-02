import "babel-polyfill";
import http from "http";

const wait = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(1000);
        }, 3000);
    });
const app = http.createServer(async (req, res) => {
    console.log("req come");
    await wait();
    res.end("..ss312312s");
});
app.listen(3000, () => console.log("listen in 3000"));
