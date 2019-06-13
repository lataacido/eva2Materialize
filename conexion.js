
firebase.initializeApp({
    apiKey: "AIzaSyDGcEqhdJ_U6csAQTQLlxg0x3Ks3TCEhzo",
    authDomain: "conexione-5bb09.firebaseapp.com",
    databaseURL: "https://conexione-5bb09.firebaseio.com",
    projectId: "conexione-5bb09",
    storageBucket: "conexione-5bb09.appspot.com",
    messagingSenderId: "472627438430"

  });

  //login
  

// Connect application with firebase
const form = document.forms['loginForm'];
firebase.auth().onAuthStateChanged(handleAuthState);
form.addEventListener('submit', handleFormSubmit);


// Application defs
function handleAuthState(user) {
  if (user) {
    showPrivateInfo()
    return console.log('Felisitaciones entraste 🎉');
  }

  showLoginForm()
  return console.log('No tenemos ningún usuario 😭');
}

function handleFormSubmit(event) {
  event.preventDefault();

  const email = form['email'].value;
  const password = form['password'].value;
  const isLoginOrSignup = form['isLoginOrSignup'].value;

  if (isLoginOrSignup === 'isLogin') {
    return loginUser({ email, password });
  }

  return createUser({ email, password });
}


// Application Utils
function showPrivateInfo(user) {
  const loginForm = document.getElementById('loginFormUI');
  loginForm.style.display = 'none';

  const hiddenPrivateInfo = document.getElementById('hiddenPrivateInfo');
  hiddenPrivateInfo.style.display = 'block';
  hiddenPrivateInfo.innerHTML = `
    <p>Esto <b>SI</b> es información confidencial </p>
    <button id="btnLogout" class="button">Logout</button>
  `;

  const btnLogout = document.getElementById('btnLogout');
  btnLogout.addEventListener('click', signoutUser);
}

function showLoginForm() {
  const loginForm = document.getElementById('loginFormUI');
  loginForm.style.display = 'block';

  const hiddenPrivateInfo = document.getElementById('hiddenPrivateInfo');
  hiddenPrivateInfo.style.display = 'none';
  hiddenPrivateInfo.innerHTML = `
    <p>Nada que mostrar, tenes que logearte, bro...</p>
  `;
}


// Firebase defs
function createUser({ email, password }) {
  console.log('Creating user ' + email);

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('¡Creamos el user, bro! Huepaje!');
    })
    .catch(function (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Ya existe el usuario');
        const soLogin = confirm(
          `Ya te habias registrado con este email, bro 😝.
          ¿Quieres iniciar sesión ✨?`
        );
        return !!soLogin ? loginUser({ email, password }) : alertTryAgain(error);;
      }

      return alertTryAgain(error);
    });
}

function loginUser({ email, password }) {
  console.log('Loging user ' + email);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log('Credenciales correctas, brother, bienvenido.');
    })
    .catch(function (error) {
      console.log(error);
      alertTryAgain(error);
    });
}

function signoutUser() {
  firebase.auth().signOut();
}


// General Utils
function alertTryAgain(error) {
  console.log(error);
  return alert('Error, intenta de nuevo ⛈');
}

//fin de login
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad= document.getElementById("edad").value;

  function agregarDatos(){

    db.collection("usuarios").add({
        first: nombre,
        last: apellido,
        born: edad

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  function eliDatos(){
    db.collection("usuarios").doc("7v3D7Z5o9p3u0uMkOeJr").delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
    
  }

  
  function verDatos(){
    db.collection("usuarios").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().first + "-" + doc.data().last + "-" + doc.data().born);
        });
    });
}
