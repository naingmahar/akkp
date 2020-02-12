const database = require("../db/STORAGE")

const db = new database("site")
db.start

module.exports.addSite = async function(data){
    try {
       await db.Create(data)
       return{
           message:"Succes",
       }
    } catch (error) {
        return {
            message:error.message,
        }
    }
}

module.exports.getAllStite = async function(data){
    try {
        const data = await db.Search()
        return {
            message:"Succes",
            data: data || data.length ? data : []
        }
    } catch (error) {
        return {
            message:error.message,
        }
    }
}

module.exports.updateSite = async function(id,data){
    try {
        return await db.Update({id},data)
    } catch (error) {
        return error.message
    }
}

module.exports.deleteSite = async function(id){
    try {
        return await db.Delete({id})
    } catch (error) {
        return error.message
    }
}