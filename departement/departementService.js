const db = require('../shared-services/database-service')

const getDepartementService = () => {
  let qr = `select * from departement`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getDepartementByidService = (gId) => {
  let qr = `select * from departement where IdDepartement  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addDepartementService = (departement) => {
  let qr = `INSERT INTO departement( code, Designation)
     VALUES ('${departement.code}','${departement.Designation}')`
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateDepartementService = (departement) => {

  let qr = `UPDATE departement SET code='${departement.code}',
  Designation='${departement.Designation}'
   where IdDepartement   ='${departement.IdDepartement }' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteDepartementService = (gId) => {
  let qr = `delete from departement WHERE IdDepartement =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getDepartementService, getDepartementByidService, addDepartementService,
  updateDepartementService, deleteDepartementService
};