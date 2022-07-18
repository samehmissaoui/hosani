

    const {
        getfamilleEquipementService, getfamilleEquipementByidService, addfamilleEquipementService, 
        updatefamilleEquipementService, deletefamilleEquipementService
        } = require("../familleEquipement/familleEquipementService");
        
        getfamilleEquipementController = async (req, res) => {
          res.send(await getfamilleEquipementService());
        };
      
        getfamilleEquipementByidController =async (req,res)=>{
            let gId=req.params.id
            res.send(await getfamilleEquipementByidService(gId))
        }
        addfamilleEquipementController  =async (req,res)=>{
            let familleEquipement=req.body
          
            res.send (await addfamilleEquipementService(familleEquipement))
        }
       updatefamilleEquipementController =async (req,res )=>{
            let familleEquipement =req.body
           res.send(await updatefamilleEquipementService(familleEquipement))}
        
      deletefamilleEquipementController =async (req,res)=>{
                let gId=req.params.id
                res.send(await deletefamilleEquipementService(gId))
            }
        
        module.exports={getfamilleEquipementController,getfamilleEquipementByidController,addfamilleEquipementController,
            updatefamilleEquipementController,deletefamilleEquipementController}