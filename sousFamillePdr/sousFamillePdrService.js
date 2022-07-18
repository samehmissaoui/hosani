const db = require("../shared-services/database-service");

const getsousFamillePdrService = () => {
  let qr = `select * from sous_famille_pdr`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getsousFamillePdrByidService = (gId) => {
  let qr = `select * from sous_famille_pdr where IdSousFamillePDR ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const addsousFamillePdrService = (sousFamillePdr) => {
  let qr = `INSERT INTO sous_famille_pdr( code, Designation,IdFamillePDR)
     VALUES ('${sousFamillePdr.code}','${sousFamillePdr.Designation}',
     '${sousFamillePdr.IdFamillePDR}', '${sousFamillePdr.IdFamillePDR}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const updatesousFamillePdrService = (sousFamilleEquipement) => {
  let qr = `UPDATE sous_famille_pdr SET code='${sousFamilleEquipement.code}',
  Designation='${sousFamilleEquipement.Designation}',  IdFamillePDR='${sousFamilleEquipement.IdFamillePDR}',
   where IdInterventionCurative ='${sousFamilleEquipement.IdFamillePDR}' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const deletesousFamillePdrService = (gId) => {
  let qr = `delete from sous_famille_pdr WHERE IdSousFamillePDR=${gId}`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
module.exports = {
  getsousFamillePdrService,
  getsousFamillePdrByidService,
  addsousFamillePdrService,
  updatesousFamillePdrService,
  deletesousFamillePdrService,
};
