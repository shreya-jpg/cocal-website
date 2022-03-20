 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyCCGRbhrXtyEZbgnoooZOKuy6eAE9pa8dE",
     authDomain: "login-with-firebase-data-7dbbc.firebaseapp.com",
     databaseURL: "https://login-with-firebase-data-7dbbc-default-rtdb.firebaseio.com",
     projectId: "login-with-firebase-data-7dbbc",
     storageBucket: "login-with-firebase-data-7dbbc.appspot.com",
     messagingSenderId: "22413913548",
     appId: "1:22413913548:web:3400c440233599999b4169",
     measurementId: "G-M77755KFEY"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();

 //signup function
 function signUp() {
     var email = document.getElementById("exampleInputEmail2");
     var password = document.getElementById("exampleInputPassword2");
     var full_name = document.getElementById("exampleFormControlInput");

     const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
     //
     promise.then(function() {


         var user = auth.currentUser

         // Add this user to firebase database
         var database_ref = database.ref()

         // create user data
         var user_data = {
             email: email,
             full_name: full_name,
             last_login: Date.now()
         }

         database_ref.child('user/' + user.uid).set(user_data)



         alert('User Registered')
     })

     promise.catch(e => alert(e.message));
     alert("SignUp Successfully");
 }

 //signIN function
 function signIn() {
     var email = document.getElementById("exampleInputEmail1");
     var password = document.getElementById("exampleInputPassword2");
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));

 }

 //active user to homepage
 firebase.auth().onAuthStateChanged((user) => {
     if (user) {
         var email = user.email;
         alert("Active user " + email);

     } else {
         alert("No Active user Found")
     }
 })