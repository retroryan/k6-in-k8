import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 50 }, // below normal load
    { duration: '5m', target: 50 },
    { duration: '2m', target: 100 }, // normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 150 }, // around the breaking point
    { duration: '5m', target: 150 },
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
