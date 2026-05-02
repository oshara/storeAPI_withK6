import http from 'k6/http';
import {check} from 'k6';


export const getProducts = ()=>{

    const response = http.get('https://fakestoreapi.com/products');

   check(response,{
    'response code is 200':(response)=>response.status === 200
   })

   return response;
}