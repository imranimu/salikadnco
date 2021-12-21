import Cookies from 'universal-cookie';

const cookies = new Cookies();

class CookieService {

    get(key){

        return cookies.get(key);
    }

    set(key, value, options ){

        return cookies.set(key, value, options);

    }

    remove(key){

        return cookies.remove(key);

    }

}

export default new CookieService();