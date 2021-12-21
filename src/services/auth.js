import CookieService from './CookieService';
import axios from 'axios';

const API_URL = 'http://10.0.0.75:3000';

class Auth {  
             
    constructor(){
        const token = CookieService.get('token');
        (token) ? this.authenticated = true : this.authenticated = false;
        this.token = token;
    } 

    async login(credentials){        
        const loginURL = API_URL+"/user/signin";        
        try{
            const response =  await axios.post(loginURL, credentials, {
                headers: {
                    'Content-Type': 'application/json',
                } 
            });
            return response.data;
        }catch(error){
            return error.response.data;
        }  
    }

    onLoginSuccess(data){
        let options = { path : '/', sameSite: 'lax'}               
        CookieService.set('token', data.token, options);
        CookieService.set('user', data.data, options);        
        return true;
    }

    logout() {
        CookieService.remove('token');
        CookieService.remove('user');
    }

    isAuthenticated(){
        return this.authenticated; 
    }

    getAccessToken(){
        return  CookieService.get('token');
    }
    
    getUser(){
        return  CookieService.get('user');
    }

    BaseName(){
        return 'Salik & Co';
    }

    apiUrl(){
        return API_URL;
    }

}

export default new Auth();