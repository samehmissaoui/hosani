const db = require('../shared-services/database-service')

const getDeviseService = () => {
  let qr = `select * from devise`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getDeviseByidService = (gId) => {
  let qr = `select * from devise where IdDevise  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addDeviseService = (devise) => {
  let qr = `INSERT INTO devise (Devise, Symbole, DevisePrincipale)
     VALUES ('${devise.Devise}','${devise.Symbole}','${devise.DevisePrincipale}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateDeviseService = (devise) => {
 
  let qr = `UPDATE devise SET Devise='${devise.Devise}',
  Symbole='${devise.Symbole}',DevisePrincipale='${devise.DevisePrincipale}'
   where IdDevise  ='${devise.IdDevise }' `;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };
const deleteDeviseService = (gId) => {
  let qr = `delete from devise WHERE IdDevise =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = { getDeviseService, getDeviseByidService, addDeviseService, 
    updateDeviseService, deleteDeviseService };