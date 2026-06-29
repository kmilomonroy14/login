

export class User {
    constructor(id=null, name, email, password) {
        if (name === undefined || email === undefined || password === undefined) {
            throw new Error("Name, email, o password son requeridos");
        }
        if (!email.includes("@")) {
            throw new Error("Email inválido");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

module.exports = User;