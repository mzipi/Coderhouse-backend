<<<<<<< HEAD
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import fs from 'fs';

const serviceAccount = JSON.parse(fs.readFileSync("./coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json", 'utf8'))

initializeApp({
	credential: cert(serviceAccount),
});
=======
// import knex from 'knex';
import admin from "firebase-admin";
import { serviceAccount } from "../coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json";
// var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

>>>>>>> 1d105d83bdfa7cc5798f010eeefc9b7fb32cbbf3

class Contenedor {

    constructor(){}

    async getAll() {
        try {
			let res = [];
			const db = getFirestore();
			const snapshot = await db.collection('messages').get();
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
			const docRef = db.collection('messages');
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
export default Contenedor;