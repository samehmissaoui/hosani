const db = require('../shared-services/database-service')


const getPanneService = () => {
  let qr = `select * from bonintervention`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};
const sumPanneService =(id)=>{
    let qr=`select sum (IDBonIntervention ) as sum from bonintervention `;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

module.exports = {getPanneService ,sumPanneService}