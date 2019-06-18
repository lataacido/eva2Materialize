
firebase.initializeApp({
    apiKey: "AIzaSyDGcEqhdJ_U6csAQTQLlxg0x3Ks3TCEhzo",
    authDomain: "conexione-5bb09.firebaseapp.com",
    projectId: "conexione-5bb09"

});
  

// crud
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


//mostrar juegos
var tabla = document.getElementById('tabla');
function verJuegos(){
    db.collection("juegos").get().then(function(querySnapshot) {
        tabla.innerHTML = '';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ",doc.data().costo+" - "+ doc.data().descri + "-" + doc.data().nombre + "-" + doc.data().plataforma);
            tabla.innerHTML +=  `
            <tr>
                <th scope="row">${doc.data().costo}</th>
                <td>${doc.data().descri}</td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().plataforma}</td>
            </tr> 
            `
        });
    });
}
//fin de crud

