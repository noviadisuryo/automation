import http from 'k6/http';
import { sleep, check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

//export const options = {
//  stages: [
//    { duration: '30s', target: 20 },
//    { duration: '1m30s', target: 10 },
//    { duration: '20s', target: 0 },
//  ],
//
//  thresholds: {
//    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
//  },
//
//};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'is status 200': (r) => r.status === 200,
    'text verification': (r) => r.body.includes("Collection of simple web-pages suitable for load testing"),
  });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data), // show report in html based format.
  };
}