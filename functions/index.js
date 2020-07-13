const functions = require('firebase-functions');
// const express = require('express');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const { sapper } = require('./__sapper__/build/server/server');
const middleware = sapper.middleware();

// const app = express().use(sapper.middleware());

exports.ssr = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  middleware(req, res);
});
