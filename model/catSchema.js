const mongoose =require('mongoose');


const catSchema=new mongoose.Schema(
    {
        title : {
            type:String,
            required:true,
            
        },
       
    p_name :{
       
            type:String,
            required:true,
            
        
    }
        
            
        
    
}
);


const Category =mongoose.model('video',catSchema);
 module.exports=Category;
