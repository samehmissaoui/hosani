const db = require('../shared-services/database-service')

const getActionService = () => {
  let qr = `select * from action`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getActionByidService = (gId) => {
  let qr = `select * from action where IdAction ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addActionService = (action) => {
  let qr = `INSERT INTO action( code, Designation,observation)
     VALUES ('${action.code}','${action.Designation}','${action.observation}')`
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateActionService = (action) => {

  let qr = `UPDATE action SET code='${action.code}',
  Designation='${action.Designation}',  observation='${action.observation}'
   where IdAction  ='${action.IdAction}' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteActionService = (gId) => {
  let qr = `delete from action WHERE IdAction=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getActionService, getActionByidService, addActionService,
  updateActionService, deleteActionService
};