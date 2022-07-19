const db = require('../shared-services/database-service');

const createTokenService = (user) => {
    console.log(user.user);
  const qr = `insert into token (refreshToken, userIP, userAgent,isValid, userID) values ('${user.refreshToken}', '${user.ip}', '${user.userAgent}',true, ${user.user}) `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

const getTokenByRefreshTokenService = (userID, token)=> {
    const qr = `select * from token where userID = '${userID}' AND refreshToken = '${token}'`;
    const tokenize = new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
    return tokenize;

}

const getTokenService = (userID) => {
    
        const qr = `select * from token where userID = ${userID}`;
        const tokenize = new Promise((resolve, reject) => {
            db.query(qr, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
        return tokenize;
    
};

const deleteTokenService = (userID) => {
    const qr = `delete from token where userID=${userID}`
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
};

const isValidTokenService = (userID) => {
    const qr = `select isValid from token where userID=${userID}`
    return new Promise((resolve, reject) => {
        db.query(qr, (err, result) => {
            if (err){
                reject(err)
            }
            resolve(result)
        })
    })
};

module.exports = {
  createTokenService,
  getTokenService,
  deleteTokenService,
  isValidTokenService,
  getTokenByRefreshTokenService
};
