const express = require("express")
const router = express.Router()
const UserSchema = require("../models/UserModel")


//Getting user info
router.get("/data",async(req,res)=>{

    try{
        
        const userexist = await UserSchema.findById({_id:req.query.id})
      
            res.send(userexist)      
    
    }catch(err){console.log(err)}
    })
    


    // router.put("/:id",async(req,res)=>{

    //     await UserSchema.findByIdAndUpdate(req.params.id,{$set:req.body},function(err, docs){
    //         if (err){
    //             console.log(err)
    //         }
    //         else{
    //             res.send(docs)
    //         }
    //     }
    //     )
    // })


    router.put("/:id", async(req,res)=>{

      try{
        await UserSchema.findByIdAndUpdate(req.params.id,{customerReview: req.body.customerReview},function(data, err){

            if(err)
            res.send(err)

            else{
                res.send(data)
            }
        })
      }catch{err=>console.log(err)}
    })


module.exports = router


