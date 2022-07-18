const db = require('../shared-services/database-service')

const getfamillePdrService = () => {
  let qr = `select * from famille_pdr`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getfamillePdrByidService = (gId) => {
  let qr = `select * from famille_pdr where IdFamillePDR ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addfamillePdrService = (famillePdr) => {
  let qr = `INSERT INTO famille_pdr( code, Designation)
     VALUES ('${famillePdr.code}','${famillePdr.Designation}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updatefamillePdrService = (familleEquipement) => {
 
  let qr = `UPDATE famille_pdr SET code='${familleEquipement.code}',
  Designation='${familleEquipement.Designation}',
   where IdFamillePDR ='${familleEquipement.IdFamillePDR}' `;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deletefamillePdrService = (gId) => {
  let qr = `delete from famille_pdr WHERE IdFamillePDR=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { getfamillePdrService, getfamillePdrByidService, addfamillePdrService, 
    updatefamillePdrService, deletefamillePdrService };