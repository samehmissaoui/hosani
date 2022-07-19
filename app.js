const express = require('express');
const cors = require('cors');
const db = require('./shared-services/database-service')


const routePanne=require('./panne/panneRouter');
const interventionroute=require('./interventioncurative/interventioncurativeRouter');
const userroute=require('./user/userRouter');
const equipementroute=require('./equipement/equipementRouter')
const familleEquipementRoute=require('./familleEquipement/familleEquipementRouter')
const sousFamilleEquipementRoute=require('./sousFamilleEquipement/sousFamilleEquipementrouter')
const famillePdr =require('./famillePdr/famillePdrRouter')
const sousFamillePdrRoute =require('./sousFamillePdr/sousFamillePdrRouter')
const actionRoute =require ('./action/actionRouter')
const marqueRoute = require('./marque/marqueRouter')
const RoleRoute =require ('./role/roleRouter')
const Departementroute =require ('./departement/departementRouter')
const emplacementroute =require ('./emplacement/emplacementRouter')
const etatMachineRoute =require ('./etatMachine/etatMachineRouter')
const deviseRouter =require ('./devise/deviserouter')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port = 3000,


app.use('/panne',routePanne )
app.use('/intervention',interventionroute )
app.use('/equipement',equipementroute)
app.use('/familleEquipement',familleEquipementRoute)
app.use('/sousFamilleEquipement',sousFamilleEquipementRoute)
app.use('/famillePdr',famillePdr)
app.use('/sousFamillePdr',sousFamillePdrRoute)
app.use('/marque',marqueRoute)
app.use('/action',actionRoute)
app.use('/role',RoleRoute)
app.use('/departement',Departementroute)
app.use('/emplacement',emplacementroute)
app.use('/etatMachine',etatMachineRoute)
app.use('/devise',deviseRouter)
app.use('/user',userroute)

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})