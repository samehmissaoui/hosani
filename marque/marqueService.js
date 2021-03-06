const db = require('../shared-services/database-service')

const getMarqueService = () => {
  let qr = `select * from marque`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getMarqueByidService = (gId) => {
  let qr = `select * from marque where IdMarque  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addMarqueService = (marque) => {
  let qr = `INSERT INTO marque( Designation	)
     VALUES ('${marque.Designation}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateMarqueService = (marque) => {

  let qr = `UPDATE marque SET Designation	='${marque.Designation}'
   where IdMarque  ='${marque.IdMarque}' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteMarqueService = (gId) => {
  let qr = `delete from marque WHERE IdMarque =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getMarqueService, getMarqueByidService, addMarqueService,
  updateMarqueService, deleteMarqueService
};