// searching rides by city name
const verifyJWT = require("../middlewares/verifyJWT")
const Vechile = require("../models/AddVechile")
const app = require("express")
const router = app.Router()


router.get("/",verifyJWT, (req,res)=>{
    
    try{
        
         Vechile.find({source : req.query.source, des : req.query.des}).then(d=>{
            res.json({
                isToken: true,
                data: d
            })
        })
    }catch(err){res.send(false)}

})

// get details page
router.get("/details/:id",(req,res)=>{
    
    try{

          const id = req.params.id

         Vechile.findById(id).then(d=>{
            res.send(d)
        })
    }catch(err){res.send(false)}

})


module.exports = router