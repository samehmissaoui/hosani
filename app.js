const express = require('express');
const cors = require('cors');
const db = require('./shared-services/database-service')




const routePanne=require('./panne/panneRouter');
const interventionroute=require('./interventioncurative/interventioncurativeRouter');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
port = 3000,


app.use('/panne',routePanne )
app.use('/intervention',interventionroute )

app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`);
})