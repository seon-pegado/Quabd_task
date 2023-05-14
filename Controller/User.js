require("dotenv").config();
const axios = require("axios");
const User = require("../Model/userModel");

const getUser = async(req, res)=>{
    try {
        const userdata = await axios.get(process.env.FETCH_URL);
        await userdata.json();
        console.log(userdata[0]["name"]);
        for(var i=0 ; i<10 ; i++){
            const user = new User({
                name : userdata[i]["name"],
                last : userdata[i]["last"],
                buy : userdata[i]["buy"],
                sell : userdata[i]["sell"],
                volume : userdata[i]["volume"],
                base_unit : userdata[i]["base_unit"]
            })
            
            await user.save();
    
        }
        
        const data = await User.find();
        res.status(200).send({msg : data , success : true})
    } catch (e) {
        console.error(e)
        res.status(404).send({err : e , success:false})
        
    }
    

}

module.exports = {getUser}