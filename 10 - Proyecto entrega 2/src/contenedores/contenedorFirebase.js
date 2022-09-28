var admin = require("firebase-admin");

var serviceAccount = require("../../coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

class Contenedor {

	constructor(path){
		this.path = path;
	}

	async save(obj) {
		
	}

	async getById(id) {

	}

	async getAll() {

	}

	async deleteById(id) {

	}


	async update(id, obj){

	}

	async deleteAll() {

	}
}
module.exports = Contenedor;