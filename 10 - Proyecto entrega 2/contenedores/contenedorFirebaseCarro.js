// import admin from "firebase-admin";
// import fs from 'fs';

// const serviceAccount = JSON.parse(fs.readFileSync("./coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json", 'utf8'))

// admin.initializeApp({
// 	credential: admin.credential.cert(serviceAccount),
// 	databaseURL: "firebase-adminsdk-9ug8w@coder-backend-a3fcf.iam.gserviceaccount.com"
// });

class ContenedorFirebaseCarro {
	
	constructor(collection){
		this.collection = collection;
	}
	
	async save(obj) {
		const db = firestore();
		const query = db.collection(this.collection);
		try {
			let id = 1;
			let doc = query.doc(`${id}`);
			await doc.create(obj);
			id++;
		} catch (err) {console.log(err)}
	}

	async getById(id) {
		try {
			const doc = query.doc(`${id}`);
			const item = await doc.get();
			const res = item.data();
			console.log(res);
		} catch (err) {console.log(err)}
	}

	async getAll() {
		try {
			const querySnapshot = await query.get();
			let docs = querySnapshot.docs;
			const res = docs.map((doc) => ({
				id: doc.id,
				nombre: doc.data().nombre,
				precio: doc.data().precio
			}))
			console.log(res);
		} catch (err) {console.log(err)}
	}

	async deleteById(id) {
		try {
			const doc = query.doc(`${id}`);
			let item = await doc.delete();
			console.log("El usuario ha sido borrado exitosamente", item);
		} catch (err) {console.log(err)}
	}


	async update(id, obj){
		try {
			const doc = query.doc(`${id}`);
			let item = await doc.update(obj);
			console.log("El usuario ha sido actualidado", item);
		} catch (err) {console.log(err)}
	}
}
export default ContenedorFirebaseCarro;