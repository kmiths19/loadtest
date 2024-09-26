# To test the load, run this following command: loadtest -n 1000 -c 10 -k http://localhost:3000/heavy
# -n: This option specifies the total number of requests to perform. For example, -n 1000 means the load test will send 1000 requests in total.
# -c: This option sets the number of concurrent clients. For example, -c 100 means that 100 clients will be sending requests simultaneously.
# -k: This option enables HTTP keep-alive, which means that the connection to the server will be reused for multiple requests, rather than opening a new connection for each request. This can help simulate more realistic load and reduce the overhead of establishing new connections.
