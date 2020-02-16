import axios from "axios"
import { SiteModel } from "./response.model";
import { AuthModel, Auth } from "./auth.model";

const API_CALL = axios.create({
    baseURL: 'http://localhost/api',
    timeout: 5000
});

const AUTH_API_CALL = axios.create({
    baseURL: 'http://localhost/api',
    timeout: 5000,
    headers:{
        authorization:  'Bearer ' +Auth.user.key.key
    }
});


/**
* @return {Promise<AuthModel>} 
**/
export const Login= async (username,password) =>{
    const response = await API_CALL.post("login",{username,password})
    Auth.user = response.data
    return response.data
}

/**
* @param {SiteModel} siteModel
**/
export const AddSites= async (siteModel) =>{
    if(siteModel._id) delete siteModel._id
    let response = await AUTH_API_CALL.post("site",siteModel)
    return response.data
}

/**
* @returns {Promise<SiteModel>} siteModel
**/
export const GetSites= async () =>{
    const response = await AUTH_API_CALL.get("site")
    return response.data.response
}