import axios from 'axios';
import AuthServices from './auth';

let headers = {
    "Content-Type": 'application/json'
};

const BASE_API_URL = 'http://10.0.0.75:3000';

const Bearer = 'AE5A7D2799BFFBF59D0028BFC7244E741CC6853520BF793C4A4369D8D772ED59';

if(AuthServices.isAuthenticated){
    headers.Authorization = Bearer + ` ${AuthServices.getAccessToken()}`
}

const axiosServices = axios.create({
    baseURL: BASE_API_URL,
    headers
});

export default axiosServices;