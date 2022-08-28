FROM golang:1.18-alpine

RUN mkdir -p /opt/program

COPY httpserver /opt/program

EXPOSE 8080

ENTRYPOINT ["/opt/program/httpserver", "-response-size=10485760"]
