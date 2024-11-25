const { constants }=require("../constants");
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;

switch(statusCode){
    case constants.VALIDATION_ERROR:res.json({
        title:"Validation Failed",
        message:err.message,
        stackTrace:err.stack,
    });
    break;
    case constants.VALIDATION_ERROR:res.json({
        title:"Unauthorized",
        message:err.message,
        stackTrace:err.stack,
    });
    break;
    case constants.VALIDATION_ERROR:res.json({
        title:"Server Error",
        message:err.message,
        stackTrace:err.stack,
    });
    default:
        console.log("No error,All Good!");
        break;
}
}
module.exports=errorHandler;

