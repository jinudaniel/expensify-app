import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   });
//   console.log(expenses);
// }, (e) => {
//   console.log('Error occured', e);
// })
// database.ref('expenses').push({
//   description: 'Rent', 
//   note: 'Rent for the month of Jan',
//   amount: 1200,
//   createdAt: 1250
// });

// database.ref('expenses').push({
//   description: 'Gas', 
//   note: 'Gas for the trip',
//   amount: 2500,
//   createdAt: 100
// });

// database.ref('expenses').push({
//   description: 'Food', 
//   note: 'Food expense',
//   amount: 500,
//   createdAt: 2000
// });


  // database.ref().on('value', (snapshot) => {
  //   const val = snapshot.val();
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  // }, (e) => {
  //   console.log('Error while fetching data', e);
  // });

//  database.ref().set({
//     name: 'Jinu Daniel',
//     age: 28,
//     stressLevel : 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//         city: 'Boston',
//         country: 'United States'
//     }
//   }).then(() => {
//     console.log('Data saved');
//   }).catch((e) => {
//     console.log('This failed ', e);
//   })

// database.ref('isSingle').remove().then(() => {
//   console.log('Data Removed');
// }).catch((e) => {
//   console.log('Remove failed ', e);
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

