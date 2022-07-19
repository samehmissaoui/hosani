const db = require('../shared-services/database-service')

const getEmplacementService = () => {
  let qr = `select * from emplacement`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getEmplacementByidService = (gId) => {
  let qr = `select * from emplacement where IdEmplacement  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addEmplacementService = (emplacement) => {
  let qr = `INSERT INTO emplacement( code, Designation,IdDepartement)
     VALUES ('${emplacement.code}','${emplacement.Designation}','${emplacement.IdDepartement}')`
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateEmplacementService = (emplacement) => {

  let qr = `UPDATE emplacement SET code='${emplacement.code}',
  Designation='${emplacement.Designation}',IdDepartement='${emplacement.IdDepartement}'
   where IdEmplacement  ='${emplacement.IdEmplacement }' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteEmplacementService = (gId) => {
  let qr = `delete from emplacement WHERE IdEmplacement =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getEmplacementService, getEmplacementByidService, addEmplacementService,
  updateEmplacementService, deleteEmplacementService
};