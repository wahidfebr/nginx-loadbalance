## Simple implementation of using nginx to load balance user request

To run the apps use
```bash
$ docker compose up --build --detach
```

Confirm the load balance works by visiting http://localhost


## Stress test guide

Use k6 and simply run
```bash
$ k6 run stress_test.js
```

Or use Jmeter

My stats stress testing on a single computer with intel i5 8250u 4 cores 8 threads achive throughput around 2k request per second.