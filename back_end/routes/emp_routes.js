let express=require('express')
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("view employee page called");
})

router.get("/assign-task",(req,res)=>{
    res.send("assign employee page called");
})

module.exports=router;

