import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    duration: '10s',
    vus: 50,
    thresholds: {
        http_req_duration: ['avg < 150']
    }    
};

export default function() {
    http.get('http://localhost:5000/contador');
    sleep(1);
};