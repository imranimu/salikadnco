import AxiosServices from "../services/AxiosServices";

class PropertyApi {    

    /*
    ## Get All Property     
    ********************************/
    async getProperty(){
        
        const propertyApiURL = '/property';        

        try{

            const response =  await AxiosServices.get(propertyApiURL);
            
            return response.data.results.data;

        }catch(error){

            return error.response;

        }
    }


    /*
    ## Insert Property     
    ********************************/
    async insertProperty(credentials){
        
        const propertyApiURL = '/property/save/';               

        try{

            const response =  await AxiosServices.post(propertyApiURL, credentials);

            //console.log(response);

            return response.data.results.data;
            
        }catch(error){

            return error.response;

        }
    }

}


export default new PropertyApi();