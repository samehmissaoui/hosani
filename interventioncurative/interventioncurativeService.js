const db = require('../shared-services/database-service')

const getinterventioncurativeService = () => {
  let qr = `select * from interventioncurative`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getinterventioncurativeByidService = (gId) => {
  let qr = `select * from interventioncurative where IdInterventionCurative ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addinterventioncurativeService = (interventioncurative) => {
  let qr = `INSERT INTO interventioncurative(DateDemande, DateReception, DateIntervention, DateValidation, Status,
     Resultat, DescRésolution, DescProbleme, Etat,
   propriete,idEquipment, IdDemandeur, IdPanne, IdAction, IdIntervenant, IdPdr)
     VALUES ('${interventioncurative.DateDemande}','${interventioncurative.DateReception}',
     '${interventioncurative.DateIntervention}','${interventioncurative.DateValidation}',
     '${interventioncurative.Status}','${interventioncurative.Resultat}',
     '${interventioncurative.DescRésolution}','${interventioncurative.DescProbleme}',
     '${interventioncurative.Etat}','${interventioncurative.propriete}','${interventioncurative.idEquipment}'
     ,'${interventioncurative.IdDemandeur}','${interventioncurative.IdPanne}','${interventioncurative.IdAction}'
     ,'${interventioncurative.IdIntervenant}','${interventioncurative.IdPdr}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updatinterventioncurativeService = (interventioncurative) => {
 
  let qr = `UPDATE interventioncurative SET  DateDemande='${interventioncurative.DateDemande}',
  DateReception='${interventioncurative.DateReception}',DateIntervention='${interventioncurative.DateIntervention}',
  DateValidation='${interventioncurative.DateValidation}',Status='${interventioncurative.Status}',Resultat='${interventioncurative.Resultat}',
  DescRésolution='${interventioncurative.DescRésolution}',DescProbleme='${interventioncurative.DescProbleme}',
  Etat='${interventioncurative.Etat}',propriete='${interventioncurative.propriete}',idEquipment='${interventioncurative.idEquipment}',
  IdDemandeur='${interventioncurative.IdDemandeur}',IdPanne='${interventioncurative.IdPanne}',IdAction='${interventioncurative.IdAction}',
  IdIntervenant='${interventioncurative.IdIntervenant}',IdPdr='${interventioncurative.IdPdr}'
   where IdInterventionCurative ='${interventioncurative.IdInterventionCurative}' `;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteinterventioncurativeService = (gId) => {
  let qr = `delete from interventioncurative WHERE IdInterventionCurative=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { getinterventioncurativeService, getinterventioncurativeByidService, addinterventioncurativeService, 
    updatinterventioncurativeService, deleteinterventioncurativeService };