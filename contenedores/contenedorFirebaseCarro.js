import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";

class ContenedorFirebaseCarro {
	
	constructor(collection){
		this.collection = collection;
	}
	
	async add(id, body) {
		try {
			let res;
			id = Number(id);
			const db = getFirestore();
			const ref = db.collection('cart');
			const whereRef = await ref.where('id', '==', id).get();
			whereRef.forEach((doc) => res = doc.id);
			if (res) {
				const docRef = db.collection('cart').doc(res);
				await docRef.set({ products: [body] }, { merge: true });
			}
		} catch (err) {console.log(err)}
	}

	async getById(id) {
		try {
			let res;
			id = Number(id);
			const db = getFirestore();
			const ref = db.collection('cart');
			const whereRef = await ref.where('id', '==', id).get();
			whereRef.forEach((doc) => res = doc.data());
			return res;
		} catch (err) {console.log(err)}
	}

	async newCart() {
		let id = 0;
		try {
			const db = getFirestore();
			const docRef = db.collection('cart');
			await docRef.add({
				id: id, 
				timestamp: FieldValue.serverTimestamp(),
				products: []
			}); 
			id++;
		} catch (err) { console.log(err) }
	}

	async deleteItem(id, id_prod) {
		try {
			let res;
			id = Number(id);
			const db = getFirestore();
			const ref = db.collection('cart');
			const whereRef = await ref.where('id', '==', id).get();
			whereRef.forEach((doc) => res = doc.id);
			if (res) {
				const deleteRef = db.collection('cart').doc(res);
				await deleteRef.delete();
			}
		} catch (err) { console.log(err) }
    }

    async deleteCart(id) {
		try {
			let res;
			id = Number(id);
			const db = getFirestore();
			const ref = db.collection('cart');
			const whereRef = await ref.where('id', '==', id).get();
			whereRef.forEach((doc) => res = doc.id);
			if (res) {
				const deleteRef = db.collection('cart').doc(res);
				await deleteRef.delete();
			}
		} catch (err) { console.log(err) }
    }
}
export default ContenedorFirebaseCarro;