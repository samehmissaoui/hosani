const db = require('../shared-services/database-service')

const getEtatMachineService = () => {
  let qr = `select * from etatactuel`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getEtatMachineByidService = (gId) => {
  let qr = `select * from etatactuel where IdEtatActuel   ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addEtatMachineService = (etatMachine) => {
  let qr = `INSERT INTO etatactuel( etatActuel,Statut	)
     VALUES ('${etatMachine.etatActuel}','${etatMachine.statut}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateEtatMachineService = (etatMachine) => {

  let qr = `UPDATE etatactuel SET etatActuel	='${etatMachine.etatActuel}',Statut='${etatMachine.statut}'
   where IdEtatActuel  ='${etatMachine.IdEtatActuel}' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteEtatMachineService = (gId) => {
  let qr = `delete from etatactuel WHERE IdEtatActuel  =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getEtatMachineService, getEtatMachineByidService, addEtatMachineService,
  updateEtatMachineService, deleteEtatMachineService
};