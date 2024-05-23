import http from "k6/http";
import { sleep, check } from "k6";
// import { Counter } from "k6/metrics";

export let options = {
    stages: [
        { duration: "2m", target: 5000 },
        { duration: "6m", target: 5000 },
        { duration: "2m", target: 0 },
    ],
};

// let server1CountSuccess = new Counter("server1_count_success");
// let server2CountSuccess = new Counter("server2_count_success");
// let server3CountSuccess = new Counter("server3_count_success");

export default function () {
    const url = "http://localhost";
    const res = http.get(url);
    const isSuccess = check(res, { "status was 200": (r) => r.status == 200 });
    // const whichServer = res.body;
    // if (isSuccess) {
    //     switch (whichServer) {
    //         case "Server1":
    //             server1CountSuccess.add(1);
    //             break;
    //         case "Server2":
    //             server2CountSuccess.add(1);
    //             break;
    //         case "Server3":
    //             server3CountSuccess.add(1);
    //             break;
    //     }
    // }
    sleep(1);
}
