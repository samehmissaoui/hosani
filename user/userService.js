const db = require("../shared-services/database-service");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getUserService = () => {
  let qr = `select * from utilisateur`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const createUserervice = (
  Matricule,
  Nom,
  Prenom,
  idRole,
  email,
  password,photo
) => {
  const qr = `insert into utilisateur (Matricule, Nom, Prenom, etat, idRole, email, password,photo)
                values ('${Matricule}','${Nom}', '${Prenom}', 1,'${idRole}','${email}','${password}','${photo}')`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
};

const createJWTService = (id_user, role) => {
  return jwt.sign(
    {
      id: id_user,
      role: role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

const loginUserService = (email) => {
  const qr = `select * from utilisateur where email = '${email}'`;
  const user = new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (result) return resolve(result);
      return reject(err);
    });
  });
  return user;
};
const getUserByemailService = (email) => {
  const qr = `select nom from utilisateur where email = '${email}'`;
  const cmpny_check = new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
  return cmpny_check;
};
const getAllDataUserByemailService = (email) => {
  const qr = `select * from utilisateur where email='${email}'`;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};
const createUserJWTService = (id, name, role) => {
  return jwt.sign(
    {
      id: id,
      name: name,
      role: role,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};
const comparePasswordService = (candidatePassword, hashedPassword) => {
  const isMatch = bcrypt.compareSync(candidatePassword, hashedPassword);
  return isMatch;
};

const updateUserService =( utilisateur)=>{
let qr = `UPDATE utilisateur SET Nom='${utilisateur.Nom}',
Prenom='${utilisateur.Prenom}', email='${utilisateur.email}',
  photo='${utilisateur.photo}'
   where IdUtilisateur  ='${utilisateur.IdUtilisateur }' `;
  return new Promise((resolve, reject) => {
    db.query(qr, (err, result) => {
      err ? reject(err) : resolve(result);
    });
  });
}

const getUserByIdService=(id)=>{
let qr =  `select * from utilisateur where IdUtilisateur='${id}'`
return new Promise((resolve, reject) => {
  db.query(qr, (err, result) => {
    err ? reject(err) : resolve(result);
  });
});

}
module.exports = {
  createUserervice,
  createJWTService,
  getUserService,
  loginUserService,
  getUserByemailService,
  getAllDataUserByemailService,
  createUserJWTService,
  comparePasswordService,
  updateUserService,
  getUserByIdService
};
