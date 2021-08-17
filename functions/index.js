const functions = require("firebase-functions");
const Firestore = require("@google-cloud/firestore");

const firestore = new Firestore({
  projectId: "whatbill-aac15",
  keyFilename: "./whatbill-aac15-firebase-adminsdk-cxa9o-92c2f0049b.json",
});
exports.onCreateUser = functions.auth.user().onCreate((user) => {
  const provider = user.providerData[0].providerId;
  firestore.collection("users").doc(user.uid).set({provider});
});
