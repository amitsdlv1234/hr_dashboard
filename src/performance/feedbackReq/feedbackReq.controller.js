const { request } = require('../../../app');
const feedbackReqRepository = require('./model/feedbackReq.modal.repository');
const AddService = require('./services/feedbackReq.add.service');

exports.addfeedbackReq=async(req,res)=>{
    try {
        const user=req.body;
        const {userId,name}=req.body;
        console.log("user data now ",name);
         // Check if user data is empty
         if (!user || Object.keys(user).length === 0) {
            return res.status(400).json({ message: "User data is required." });
          }
    //     const FeedbackReqRepository= new feedbackReqRepository();
    //     const present=await FeedbackReqRepository.checkfeedbackReqExists(userId);
    //    console.log(present)
    //     if(present) res.status(202).json({message:"user Data is already register"});
    //     else{
           const addService=new AddService();
           const newUser=await addService.addfeedbackReq({...user,employeeName:name,requestedBy:name});
           res.status(200).json(newUser);
        // }    
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error",error})
    }
    }
    exports.getfeedbackReq=async(req,res)=>{
        try {
            const {userId}=req.body;
               const addService=new AddService();
               const newUser=await addService.getPrimaryDetail(userId);
               res.status(200).json(newUser);
              
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Server error",error})
        }
        }
        exports.updatefeedbackReq=async(req,res)=>{
            try {
                const user=req.body;
                const {userId}=req.body;
                console.log("user data now ",user.length===0);
                 // Check if user data is empty
                 if (!user || Object.keys(user).length === 0) {
                    return res.status(400).json({ message: "User data is required." });
                  }
                const FeedbackReqRepository= new feedbackReqRepository();
                const present=await FeedbackReqRepository.checkfeedbackReqExists(userId);
               console.log(present)
                if(!present) res.status(202).json({message:"user Data is not present"});
                else{
                   const addService=new AddService();
                   const newUser=await addService.updatefeedbackReq(user);
                   console.log("newuser",newUser)
                   if(newUser){
                    res.status(200).json({message:"user Data updated",newUser});
                   }
                   else res.status(201).json({message:"user Data not updated"});
                }    
            } catch (error) {
                console.log(error);
                res.status(500).json({message:"Server error",error})
            }
            }