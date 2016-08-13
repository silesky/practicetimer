   // Initialize Firebase
  import firebase from 'firebase';
//
   const config = {
     apiKey: 'gRAgEtcdIZziKyUhntgQqJMAzrEvoi28jopbyu9p',
     authDomain: 'https://practicetimer.firebaseapp.com',
     databaseURL: 'https://practicetimer.firebaseio.com/',
     storageBucket: 'gs://practicetimer.appspot.com'
   };
//http://stackoverflow.com/questions/37337080/initialize-firebase-references-in-two-separate-files-in-the-new-api
   // firebase.auth(), firebase.storage(), firebase.database();
  const FB = firebase.initializeApp(config);
  export default FB;
