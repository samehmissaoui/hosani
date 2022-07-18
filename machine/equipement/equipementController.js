const {
    getEquipementService, getEquipementServicebyid, addEquipementService,updateEquipementService,deleteEquipementService
    } = require("../equipement/equipementService");
    
    getEquipementController = async (req, res) => {
      res.send(await getEquipementService());
    };
  
    getEquipementbyidController =async (req,res)=>{
        let gId=req.params.id
        res.send(await getEquipementServicebyid(gId))
    }
    addEquipementController  =async (req,res)=>{
        let Equipement=req.body
      
        res.send (await addEquipementService(Equipement))
    }
    updateEquipementController =async (req,res )=>{
        let equipement =req.body
       res.send(await updateEquipementService(equipement))}
    
       deleteEquipementController =async (req,res)=>{
            let gId=req.params.id
            res.send(await deleteEquipementService(gId))
        }
    
    module.exports={getEquipementController,getEquipementbyidController,addEquipementController,updateEquipementController,deleteEquipementController}