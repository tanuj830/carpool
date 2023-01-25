const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors  = require("cors")
const addvechile = require("./routes/AddVechile")
const search_ride = require("./routes/SearchRides")
const signin = require("./routes/User")
const settings = require("./routes/Settings")
const path = require("path")
// require("./client/build/");

//connecting env file
dotenv.config();





//connecting to database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false 
}).then(
        console.log("Database connected"))
        
        
        
        
        // relaxing security
        app.use(cors({
            origin: 'https://www.section.io',
            origin: ['https://www.section.io', 'https://www.google.com/'],
            origin: '*',
            allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
            methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
        }))
        
        // parsing req
        app.use(express.json());
        
        // console.log("tanuj https://ridemaker.herokuapp.com/signin ")
        // calling route to main
        app.use("", signin)
        app.use("/settings", settings);
        app.use("/addvechile", addvechile)
        app.use("/search", search_ride)
        
        
        // ... other app.use middleware 
        app.use(express.static(path.join(__dirname, "client", "build")))
        
        // ...
        // Right before your app.listen(), add this:
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "client", "build", "index.html"));
        });
        
        
        app.listen(process.env.PORT, ()=>
        {
            console.log(`Server running on port ${process.env.PORT}`)
        });
        
        


