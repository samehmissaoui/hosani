const db = require('../shared-services/database-service')

const getPdrService = () => {
  let qr = `select * from pdr`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const getPdrServicebyid = (gId) => {
  let qr = `select * from equipement where pdr  ='${gId}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const addPdrService = (pdr) => {
    let qr = `INSERT INTO pdr( reference, Designation, NumSerie, StockMin, PrixUnitaire, image, IdMarque, IdSousFamillePDR) 
        VALUES ('${pdr.Reference}','${pdr.Designation}','${pdr.NumSerie}','${pdr.StockMin}',
        '${pdr.PrixUnitaire}','${pdr.image}','${pdr.IdMarque}','${pdr.IdSousFamillePDR}')`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };

  const updatePdrService = (pdr) => {
 
    let qr = `UPDATE pdr SET  DateDemande='${pdr.reference}',
    DateReception='${pdr.Designation}',DateIntervention='${pdr.NumSerie}',
    DateValidation='${pdr.StockMin}',Status='${pdr.PrixUnitaire}',Resultat='${pdr.image}',
    DescResolution='${pdr.IdMarque}',DescProbleme='${pdr.IdSousFamillePDR}' `;
      return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    };
  const deletepdrService = (gId) => {
    let qr = `delete from SET WHERE IdPdr=${gId}`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };

module.exports = { getPdrService, getPdrServicebyid, addPdrService,updatePdrService ,deletepdrService};