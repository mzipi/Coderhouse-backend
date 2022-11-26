import { PROJECT_ID, PRIVATE_KEY, CLIENT_EMAIL } from "../config.js";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import logger from "../api/logger.js";

const privateKey = PRIVATE_KEY.replace(/\\n/g, '\n');

initializeApp({
	credential: cert({
        projectId: PROJECT_ID,
        privateKey,
        clientEmail: CLIENT_EMAIL
    })
});

class FirebaseContainer {
	
	constructor(collection){
		this.collection = collection;
	}
	
	async save(obj) {
		const db = admin.firestore();
		const query = db.collection(this.collection);
		try {
			let id = 1;
			let doc = query.doc(`${id}`);
			await doc.create(obj);
			id++;
		} catch (err) { logger.error(err) }
	}

	async getById(id) {
		try {
			const doc = query.doc(`${id}`);
			const item = await doc.get();
			const res = item.data();
			logger.info(res);
		} catch (err) { logger.error(err) }
	}

	// async getAll() {
	// 	try {
	// 		const querySnapshot = await query.get();
	// 		let docs = querySnapshot.docs;
	// 		const res = docs.map((doc) => ({
	// 			id: doc.id,
	// 			nombre: doc.data().nombre,
	// 			precio: doc.data().precio
	// 		}))
	// 		logger.info(res);
	// 	} catch (err) { logger.error(err) }
	// }

	async getAll() {
        try {
			let res = [];
			const db = getFirestore();
			const snapshot = await db.collection(this.collection).get();
			if (snapshot) {
                snapshot.forEach((doc) => {
                    res.push(doc.data());
                });
                return res;
            } 
		} catch (err) { logger.error(err) }
    }

	async deleteById(id) {
		try {
			const doc = query.doc(`${id}`);
			let item = await doc.delete();
			logger.info("El usuario ha sido borrado exitosamente", item);
		} catch (err) { logger.error(err) }
	}


	async update(id, obj){
		try {
			const doc = query.doc(`${id}`);
			let item = await doc.update(obj);
			logger.info("El usuario ha sido actualidado", item);
		} catch (err) { logger.error(err) }
	}
}
export default FirebaseContainer;