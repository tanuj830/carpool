const express = require("express")
const router = express.Router()
const UserSchema = require("../models/UserModel")
const jwt = require("jsonwebtoken")
// Validating user
router.post("/signin",async(req,res)=>{

    try{

        // console.log("tanuj")
        const userexist = await UserSchema.findOne({email:req.body.email, password:req.body.password})
        if(!userexist)
        {
            res.send("fill right credentials")
        }
        else{
            // console.log(userexist) step 1
            const token = jwt.sign({
                "userData":{
                    id: userexist._id,
                    name: userexist.name
                }
            },
            "seckey",
            {expiresIn: "1d"})
            res.json({token, userexist})
        }
    }catch(err){console.log("err")}
    })



//Adding user
router.post("/signin/register",async(req,res)=>{

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




router.get("/signin/:id",(req,res)=>{
    
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

router.get("/signin",(req,res)=>{
    
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


