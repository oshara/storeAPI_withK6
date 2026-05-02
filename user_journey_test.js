import {group,sleep} from 'k6';
import {  thresholds1 } from '../thresholds/thresholds.js';
import { login } from '../services/auth.service.js';
import { getProducts } from '../services/products.service.js';
import { getUsers } from '../services/get.users.service.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options ={
    vus:5,
    duration: '15s',
    thresholds:thresholds1
}

export default function(){

    //login flow
    group('Login Flow Journey',()=>{
        const loginResponse = login();
    })

    sleep(1);

    // get all products
    group('Get all products',()=>{
        const productsResponse = getProducts();
    })

    sleep(2)
 
    group('Get all users',()=>{
        const usersRsponse = getUsers();
    })

    sleep(3)

}

// export function handleSummary(data) {
//     return {
//       "summary.html": htmlReport(data),
//     };
//   }

