const db = require('../shared-services/database-service')

const getEquipementService = () => {
  let qr = `select * from equipement`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getEquipementServicebyid = (gId) => {
  let qr = `select * from equipement where idEquipment  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const addEquipementService = (equipement) => {
    let qr = `INSERT INTO equipement(Reference, Designation, NumSerie, NumDecla, Modele, Observation, DateAchat, 
        PrixAchat, DateMes, Image, PieceJointe, IdDevise, IdEtatActuel, IdSFamille_equip, IdMarque, IdEmplacement) 
        VALUES ('${equipement.Reference}','${equipement.Designation}','${equipement.NumSerie}','${equipement.NumDecla}',
        '${equipement.Modele}','${equipement.Observation}','${equipement.DateAchat}','${equipement.PrixAchat}',
        '${equipement.DateMes}','${equipement.Image}','${equipement.PieceJointe}','${equipement.IdDevise}'
        '${equipement.IdEtatActuel}','${equipement.IdSFamille_equip}','${equipement.IdMarque}','${equipement.IdEmplacement}')`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };

module.exports = { getEquipementService, getEquipementServicebyid, addEquipementService};