import http from 'k6/http';
import {check} from 'k6'


export const getUsers = ()=>{
     const response = http.get('https://fakestoreapi.com/users')

     check(response,{
        'response status code is 200 for GET Users API call' :(response)=>response.status===200
     })

     return response
}