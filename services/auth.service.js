import http from 'k6/http';
import {check} from 'k6';

export const login = ()=>{
    const response = http.post('https://fakestoreapi.com/auth/login',{
        username:'mor_2314',
        password:'83r5^_'
    })

    check(response,{
        "response code was 200":(response) =>response.status === 200
    });

    return response
}