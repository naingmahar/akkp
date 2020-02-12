let router = require('express').Router()
let {login,sites} = require("./data")
let {addSite,deleteSite,getAllStite,updateSite} = require("../controller/site.controller")

router.post("/api/login",(req,res)=>res.send(login))
router.get("/api/login",(req,res)=>res.send(login))

router.post("/api/site",async (req,res)=>res.send({response:await addSite(req.body)}))
router.get("/api/site",async (req,res)=> res.send({response:await getAllStite(req.body)}))

router.delete("/api/site",async (req,res)=> res.send({response:await addSite(req.body)}))
router.put("/api/site",async (req,res)=> res.send({response:await addSite(req.body)}))


module.exports = router