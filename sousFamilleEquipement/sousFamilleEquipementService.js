const db = require('../shared-services/database-service')

const getSousfamilleEquipementService = () => {
  let qr = `select * from sous_famille_equipement`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getSousfamilleEquipementByidService = (gId) => {
  let qr = `select * from sous_famille_equipement where IdSFamille_equip ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addSousfamilleEquipementService = (SousfamilleEquipement) => {
  let qr = `INSERT INTO sous_famille_equipement ( code, Designation,IdFamille_equip)
     VALUES ('${SousfamilleEquipement.code}','${SousfamilleEquipement.Designation}',
     '${SousfamilleEquipement.IdFamille_equip}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateSousfamilleEquipementService = (SousfamilleEquipement) => {
 
  let qr = `UPDATE sous_famille_equipement SET code='${SousfamilleEquipement.code}',
  Designation='${SousfamilleEquipement.Designation}',IdFamille_equip='${SousfamilleEquipement.IdFamille_equip}'
   where IdSFamille_equip ='${SousfamilleEquipement.IdSFamille_equip}' `;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteSousfamilleEquipementService = (gId) => {
  let qr = `delete from sous_famille_equipement WHERE IdSFamille_equip=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { getSousfamilleEquipementService, getSousfamilleEquipementByidService, addSousfamilleEquipementService, 
    updateSousfamilleEquipementService, deleteSousfamilleEquipementService };