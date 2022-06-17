//export ra 2 hàm để xử lí
//trong TH array ta sẽ map qua để toObject

const { default: mongoose } = require("mongoose");

//trong TH là Object ta chỉ cần return
module.exports = {
    //1) Hàm xử lí array
    mutipleMongoooseToObject : function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    //2) Hàm xử lí trong trường hợp có 1 docs
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
