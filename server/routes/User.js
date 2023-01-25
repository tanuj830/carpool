const express = require("express")
const router = express.Router()
const UserSchema = require("../models/UserModel")

// Validating user
router.post("/api/signin",async(req,res)=>{

    try{

        // console.log("tanuj")
        const userexist = await UserSchema.findOne({email:req.body.email, password:req.body.password})
        if(!userexist)
        {
            res.send("fill right credentials")
        }
        else{
            // console.log(userexist)
            res.send(userexist)
        }
    }catch(err){console.log("err")}
    })



//Adding user
router.post("/api/signin/register",async(req,res)=>{

try{
    
    const userexist = await UserSchema.findOne({email:req.body.email, phone: req.body.phone})
    
    if(userexist){
        res.status(404).json("some credentials already exist")
    }
    else{
        const NewUser = new UserSchema({
        
            
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password
        })
        // await NewVechile.save().then(()=> res.status(201).json("Vechile added")).catch((err)=>console.log("unable to add vechile"));
        await NewUser.save().then(()=>res.status(201).json("true")).catch((err)=>console.log(err))
    }

}catch(err){console.log(err)}
})




router.get("/api/signin/:id",(req,res)=>{
    
    try{  
        // const id = req.params.id
        // console.log(req.params.id)
        UserSchema.findById(req.params.id, function (err, docs) {
            if (err){
                console.log(err);
            }
            else{
                res.send(docs)
            }      })
    }catch(err){res.send(err)}

})

router.get("/api/signin",(req,res)=>{
    
    try{  
        // const id = req.params.id
        // console.log(req.params.id)
       UserSchema.find({}).then(data=>res.send(data))
    //   res.send(users)
    }catch(err){res.send(err)}

})

router.put("/:id",async(req,res)=>{
    
    try{  
    
        await UserSchema.findByIdAndUpdate(req.params.id,{customerReview : req.body.customerReview}, { new: true }, function(err, docs){
            if (err){
                console.log(err)
            }
            else{
                res.send("review added")
            }
        })
    }catch(err){res.send(err)}

})



module.exports = router


