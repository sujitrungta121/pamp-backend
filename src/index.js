const dotenv=require("dotenv")
const express = require("express");
const connectDB = require("./helpers/utils/db");
const cors = require("cors");
// import {PORT }
const { PORT } = require("./config");
dotenv.config({
    path:"./env"
})
console.log(process.env.PORT,"index")

const storeRoute = require("./routes/store");
const serviceRoute = require("./routes/service");
const categoryRoute = require("./routes/category");
const saRoute = require("./routes/storeAmenities");


connectDB().then((connection) => {

    const app = express();
  
    // Middleware
    app.use(express.json());
    app.use(cors());

    app.use("/store", storeRoute);
    // app.use("/category", categoryRoute);
    // app.use("/service", serviceRoute);
    // app.use("/storeamenities", saRoute);


    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
});