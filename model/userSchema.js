const mongoose =require('mongoose');


const userSchema=new mongoose.Schema(
    {
        entity_type_id : {
            type:String,
            // required:true,
            length:50
        },
       
        news_type:{
            type:String,
            // required:true,
            length:50
        },
        news_headline:{
            type:String,
            // required:true,
            length:100
        },
        news_article:{
            type:String,
            // required:true,
            length:250
        },
        created_on:
             {
                
                type:Date,
                required:true
            },
            dictionary_token:{
                type:String,
                required:true,
                length:50
            }
        
            
        
    
    }
);


const User =mongoose.model('record',userSchema);
 module.exports=User;
