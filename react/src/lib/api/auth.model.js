const authKey = "@auth"

const UserModel = {
    "fullname":"",
    "username":"",
    "email":""
}

const keyModel = {
    "key":"",
    "expiration_date":""
}

export const AuthModel = {
    user:UserModel,
    key:keyModel
}



export const Auth = {

    /**
    * @param {AuthModel} 
    **/ 
    set user(user){
        user = JSON.stringify(user)
        localStorage.setItem(authKey,user)
    },


    /**
    * @returns {AuthModel} 
    **/ 
    get user(){
        let user = localStorage.getItem(authKey)
        user = JSON.parse(user)
        if(!user) user = AuthModel
        return user
    },

    clear(){
        localStorage.setItem(authKey,JSON.stringify(AuthModel))
    }
}