const {
    getinterventioncurativeService, getinterventioncurativeByidService,
     addinterventioncurativeService, updatinterventioncurativeService, deleteinterventioncurativeService
    } = require("../interventioncurative/interventioncurativeService");
    
    getinterventioncurativeController = async (req, res) => {
      res.send(await getinterventioncurativeService());
    };
  
    getinterventioncurativeControllerByid =async (req,res)=>{
        let gId=req.params.id
        res.send(await getinterventioncurativeByidService(gId))
    }
    addinterventioncurativeController  =async (req,res)=>{
        let interventioncurative=req.body
      
        res.send (await addinterventioncurativeService(interventioncurative))
    }
    updateinterventioncurativeController =async (req,res )=>{
        let interventioncurative =req.body
        console.log('sss',interventioncurative.IdInterventionCurative);
  
        res.send(await updatinterventioncurativeService(interventioncurative))}
    
        deleteinterventioncurativeController =async (req,res)=>{
            let gId=req.params.id
            res.send(await deleteinterventioncurativeService(gId))
        }
    
    module.exports={getinterventioncurativeController,getinterventioncurativeControllerByid,addinterventioncurativeController,
        updateinterventioncurativeController,deleteinterventioncurativeController}