export class User {
    Matricule;
    Nom;
    Prenom;
    etat;
    idRole;
    email;
    password
    constructor(
        Matricule,
        Nom,
        Prenom,
        etat,
        idRole,
        email,
        password){
        this.Matricule=Matricule;
        this.Nom=Nom;
        this.Prenom=Prenom;
        this.etat=etat;
        this.idRole=idRole;
        this.email=email;
        this.password=password;
    }
}