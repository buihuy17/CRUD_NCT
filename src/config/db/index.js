const mongoose = require('mongoose');
async function connect(){
   try {
        await mongoose.connect('mongodb://localhost:27017/crud_nhac_cua_toi_dev');
        console.log("Connect Successfully!")
   } catch (error) {
       console.log("Conncect Fail!")
   }
}

module.exports = { connect };
