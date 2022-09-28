var admin = require("firebase-admin");

var serviceAccount = require("../../coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
