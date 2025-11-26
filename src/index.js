import dotenv from "dotenv";
import connectDB from "./db/index.js";

import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
   app.listen(process.env.PORT , () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("Mongo DB connection nahi hua", error);
    // process.exit(1);  //Exit the process with failure
});



app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});








// import express from "express";
// const app = express();


// (async()=>{
//     try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (err) => {
//         console.error("Server error:", err);
//         throw err;
//     });
//     app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     });
//     }catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// })()