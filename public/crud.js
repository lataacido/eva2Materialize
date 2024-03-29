firebase.initializeApp({
    apiKey: "AIzaSyDNB4ujKirD8DGchz7ClG-9FtBMpJd_5OE",
    authDomain: "eva2-bc7c5.firebaseapp.com",
    projectId: "eva2-bc7c5"
});  

// CRUD
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var nombre = document.getElementById("nombre").value;
var plataforma = document.getElementById("plataforma").value;
var costo= document.getElementById("costo").value;
var descri= document.getElementById("descri").value;

//terro
function agregarDatos(){
db.collection("juegos").add({
    nombre: nombre,
    plataforma: plataforma,
    costo: costo ,
    descri: descri
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

//edgard
function eliDatos(){
db.collection("juegos").doc("7v3D7Z5o9p3u0uMkOeJr").delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}

function modiDatos(){
   // db.collection("juegos")
}

//cata
var tabla = document.getElementById('tabla');
function verJuegos(){
    db.collection("juegos").get().then(function(querySnapshot) {
        tabla.innerHTML = '';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ",doc.data().costo+" - "+ doc.data().descri + "-" + doc.data().nombre + "-" + doc.data().plataforma);
            tabla.innerHTML +=  `
            <tr>
                <th scope="row">${doc.data().nombre}</th>
                <td>${doc.data().descri}</td>
                <td>${doc.data().costo}</td>
                <td>${doc.data().plataforma}</td>
            </tr> 
            `
        });
    });
};