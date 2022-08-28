# K6 in K8

This repo provides the following

- Basic HTTP Server to simulate network traffic
- Basic setup to run [K6](https://k6.io/docs/) locally using docker compose
- Basic setup to run [K6](https://k6.io/docs/) in K8
- Additional ability to export K6 metrics to datadog from K8


## Building the test HTTP Server

The test HTTP server is from [paninetworks testing-tools](https://github.com/paninetworks/testing-tools/tree/master/benchmarking)

Build the go binary
```
  go mod init main
  go get github.com/cgilmour/maxopen
  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -v -o httpserver main
```

Build the docker image and push it up to the docker hub:

```
  export DOCKER_USERNAME=...
  docker build --tag $DOCKER_USERNAME/httptest:1 .  
  docker push $DOCKER_USERNAME/httptest:1
```


## Running Locally using Docker compose

The docker compose script was modified from [Beautiful Load Testing With K6 and Docker Compose](https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3)
