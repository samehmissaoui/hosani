const db = require('../shared-services/database-service')

const getfamilleEquipementService = () => {
  let qr = `select * from famille_equipement`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getfamilleEquipementByidService = (gId) => {
  let qr = `select * from famille_equipement where IdFamille_equip ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addfamilleEquipementService = (familleEquipement) => {
  let qr = `INSERT INTO famille_equipement (IdFamille_equip, code, Designation)
     VALUES ('${familleEquipement.code}','${familleEquipement.Designation}',
     '${familleEquipement.IdFamille_equip}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updatefamilleEquipementService = (familleEquipement) => {
 
  let qr = `UPDATE famille_equipement SET code='${familleEquipement.code}',
  Designation='${familleEquipement.Designation}'
   where IdFamille_equip ='${familleEquipement.IdFamille_equip}'`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deletefamilleEquipementService = (gId) => {
  let qr = `delete from famille_equipement WHERE IdFamille_equip=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { getfamilleEquipementService, getfamilleEquipementByidService, addfamilleEquipementService, 
    updatefamilleEquipementService, deletefamilleEquipementService };