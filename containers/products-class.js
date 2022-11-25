const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const { PROJECT_ID, PRIVATE_KEY, CLIENT_EMAIL } = require("../config.js");

class Contenedor {

    constructor(table){
        this.table = table;
    }

    async getAll() {
        try {
			let res = [];
			const db = getFirestore();
			const snapshot = await db.collection(this.table).get();
			if (snapshot) {
                snapshot.forEach((doc) => {
                    res.push(doc.data());
                });
                return res;
            } 
		} catch (err) { console.log(err) }
    }

    async getById(id) {
        try {
            const db = getFirestore();
            // const colec = await db.collection("products").where("id", "==", "r9NOp34unbf5HEG0P46E").get();
            const colec = await db.collection(this.table).doc(id).get();
            return colec.data();
		} catch (err) { console.log(err) }
    }

    async delete(id) {
        try {
            const db = getFirestore();
            await db.collection(this.table).doc(id).delete();
        } catch (err) { console.log(err) }
    }

    async save(obj) {
		try {
			const db = getFirestore();
			const docRef = db.collection(this.table);
			await docRef.add({
                name: obj.name,
                price: obj.price,
                image: obj.image
            });
		} catch (err) { console.log(err) }
    }

    async update(id, body){
        try {
			const db = getFirestore();
			const docRef = db.collection(this.table).doc(id);
			await docRef.update({
                name: body.name,
                price: body.price,
                image: body.image
            });
		} catch (err) { console.log(err) }
    }

    // { error: "producto no encontrado" }
}
module.exports = Contenedor;