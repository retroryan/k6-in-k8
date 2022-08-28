import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 600 }, // around the breaking point
    { duration: '1m', target: 700 }, // around the breaking point
    { duration: '1m', target: 150 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
  thresholds: {
    'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

export default function () {
  http.get('http://httpserver:8080/data');
  sleep(1);
}
