const db = require('../shared-services/database-service')

const getRoleService = () => {
  let qr = `select * from role`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getRoleByidService = (gId) => {
  let qr = `select * from role where idRole   ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addRoleService = (role) => {
  let qr = `INSERT INTO role( Role,Etat	,commentaire,code)
     VALUES ('${role.Role}','${role.Etat}','${role.commentaire}','${role.code}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updateRoleService = (role) => {

  let qr = `UPDATE role SET Role	='${role.Role}' , commentaire='${role.commentaire}',code='${role.code}'
   where idRole   ='${role.idRole }' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deleteRoleService = (gId) => {
  let qr = `delete from role WHERE idRole  =${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getRoleService, getRoleByidService, addRoleService,
  updateRoleService, deleteRoleService
};