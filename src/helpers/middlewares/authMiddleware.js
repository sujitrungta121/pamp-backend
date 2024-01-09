// const admin = require("firebase-admin");
const { commonEnum } = require("../enums");
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const { FIREBASE_KEY_PATH, FIREBASE_DBURL } = require('../../config');

// const serviceAccount = require(FIREBASE_KEY_PATH); 
console.log(FIREBASE_DBURL,"DBURL")// Replace with your Firebase Admin SDK key

// Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: FIREBASE_DBURL, 
//   databaseURL: FIREBASE_DBURL,// Replace with your Firebase project URL
// });
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
console.log(serviceAccount,"service account");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
  databaseURL: "https://pamprazzi-52441-default-rtdb.firebaseio.com"
});






const firebaseAuthMiddleware = async (req, res, next) => {
  console.log(req.headers,"headers")
  const idToken = req.header("Authorization"); 
  console.log(idToken,"id token")
 

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    console.log(decodedToken,"try")
    const user = await admin.auth().getUser(decodedToken.uid);
    
    const userClaims = user.customClaims || {};

    req.fullUser = decodedToken;
    req.user = decodedToken.uid;
    req.userRole = userClaims?.role || commonEnum.userRoles.USER;

    next(); // User is authenticated, proceed to the route handler
  } catch (error) {
    console.error("Firebase authentication error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = firebaseAuthMiddleware;  //-->previous code

// const firebaseAuthMiddleware = async (req, res, next) => {
//   const authorizationHeader = req.header("Authorization");
//   console.log(authorizationHeader,"auth header")
  
//   if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Unauthorized - Missing or invalid token" });
//   }

//   const idToken = authorizationHeader.split(" ")[1];
  
//   console.log(idToken, "id token"); // Log the extracted token

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     const user = await admin.auth().getUser(decodedToken.uid);
//     const userClaims = user.customClaims || {};

//     req.fullUser = decodedToken;
//     req.user = decodedToken.uid;
//     req.userRole = userClaims?.role || commonEnum.userRoles.USER;

//     next(); // User is authenticated, proceed to the route handler
//   } catch (error) {
//     console.error("Firebase authentication error:", error);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// };

// module.exports = firebaseAuthMiddleware;

