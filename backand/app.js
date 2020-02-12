let app = require('express')()
let router = require('./router/router')
let bodyParser = require('body-parser')
let cors = require('cors')
var server = require('http').createServer(app);
var _ = require("lodash")

var log = require('noogger')
var colors = require('colors')
let port = process.env.ADMIN_API_PORT || 80;

    const logo =`
     _   _   _   _   _   _   _   _   _   _
    / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ 
   ( M | M | F | i | r | e | b | a | s | e ) 
    \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ 
    `


server.listen(port, () => {
    console.log(colors.rainbow(logo))
    log.info("Status      : " + colors.green("Start"))
    log.info("Name        : " + colors.green("MM FIRE BASE"))
    log.info(`Version     : ${colors.green(process.env.VERSION||"1.0.0.1")}`)
    log.info("Port Number : " + colors.green(port));
  });



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next)=>{
    req.data = _.extend(req.query || {}, req.params || {}, req.body || {},req.headers || {}) 
    next()
})

app.use(router)
app.get("/test",(req,res)=>{
    res.send({hello:"hello"})
})