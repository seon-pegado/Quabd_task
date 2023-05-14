const mongoose = require('mongoose');


const UserData = new mongoose.Schema({
    name:{
        type: String
    },
    last:{
        type:Number
    },
    buy:{
        type: Number
    },
    sell:{
        type: Number
    },
    volume:{
        type: Number
    },
    base_unit:{
        type: String
    }
});

const User = mongoose.model("User",UserData);
module.exports= User