const db = require('../shared-services/database-service');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const getUserService = () => {
    let qr = `select * from user`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };

/**
 * REGISTER COMPANY SERVICE
 * @param {*} rnue 
 * @param {*} raison_sociale 
 * @param {*} email 
 * @param {*} password 
 * @param {*} registration_number 
 * @returns 
 */
 const createUserervice = (
    phone,
    name,
    password,
    
 
  ) => {
   
    const qr = `insert into user (phone, name,  password, etat, is_active, is_relation)
                values ('${phone}','${name}', '${password}', 1,0,0)`;
    return new Promise((resolve, reject) => {
      db.query(qr, (err, result) => {
        err ? reject(err) : resolve(result);
      });
    });
  };


  const createJWTService = (id_user, role) => {
    return jwt.sign({
      id: id_user, role: role
    }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
  };
  /**
 * LOGIN COMPANY SERVICE 
 * @param {*} email 
 * @param {*} password 
 */
const loginUserService = (phone) => {
  const qr = `select * from user where phone = '${phone}'`;
  const company = new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (result) return resolve(result);
      return reject(err);
    });
  });
  return company
};
const getUserByPhoneService = (phone) => {
  const qr = `select phone from user where phone = '${phone}'`
  const cmpny_check = new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if(err) reject(err)
      resolve(result)
    })
  })
  return cmpny_check
}
const getAllDataUserByPhoneService = (phone) => {
  const qr = `select * from user where phone='${phone}'`
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result)=> {
      if(err){
        reject(err)
      }
      resolve(result)
    })
  })
}
const createUserJWTService = (id, name, role) => {
  return jwt.sign({
    id: id, name: name, role: role}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME})
}
const comparePasswordService = (candidatePassword, hashedPassword) => {
  const isMatch = bcrypt.compareSync(candidatePassword, hashedPassword)
  return isMatch
}
  module.exports={createUserervice,createJWTService,getUserService ,loginUserService,getUserByPhoneService,getAllDataUserByPhoneService,createUserJWTService,comparePasswordService}