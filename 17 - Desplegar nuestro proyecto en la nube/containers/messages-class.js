const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const { PROJECT_ID, PRIVATE_KEY, CLIENT_EMAIL } = require("../config.js");

const privateKey = PRIVATE_KEY.replace(/\\n/g, '\n');

initializeApp({ 
    credential: cert({
        projectId: PROJECT_ID,
        privateKey,
        clientEmail: CLIENT_EMAIL
    }) 
});

class Contenedor {

    constructor(){}

    async getAll() {
        try {
			let res = [];
			const db = getFirestore();
			const snapshot = await db.collection("messages").get();
			if (snapshot) {
                snapshot.forEach((doc) => {
                    res.push(doc.data());
                });
                return res;
            } 
		} catch (err) { console.log(err) }
    }

    async save(obj) {
		try {
			const db = getFirestore();
			const docRef = db.collection("messages");
			await docRef.add({
                author: {
                    id: obj.author.id,
                    nombre: obj.author.nombre,
                    apellido: obj.author.apellido,
                    edad: obj.author.edad,
                    alias: obj.author.alias,
                    avatar: obj.author.avatar
                },
                text: obj.text

            });
		} catch (err) { console.log(err) }
    }
}
module.exports = Contenedor;


//FieldValue.serverTimestamp()