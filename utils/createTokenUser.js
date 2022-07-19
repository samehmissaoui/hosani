const createTokenUser = (IdUtilisateur, idRole,nom) => {
    return {
        id: IdUtilisateur,
        idRole: idRole,
        nom: nom,
       
    }
}


module.exports = createTokenUser