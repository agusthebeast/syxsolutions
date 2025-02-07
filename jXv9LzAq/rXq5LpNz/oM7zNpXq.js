import { auth, db, storage } from "../sX9mA4tQ/firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";

/**
 * Función para registrar un nuevo usuario con Firebase Authentication.
 * También guarda los datos en Firestore y sube la imagen del DNI a Storage.
 */
async function registrarUsuario(event) {
    event.preventDefault();

    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("correo").value;
    let celular = document.getElementById("celular").value;
    let password = document.getElementById("contraseña").value;
    let fotoDni = document.getElementById("fotoDni").files[0];

    try {
        // Crear usuario en Firebase Authentication
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        let userId = userCredential.user.uid;

        // Subir imagen a Firebase Storage
        let storageRef = ref(storage, `dni/${userId}`);
        await uploadBytes(storageRef, fotoDni);
        let dniUrl = await getDownloadURL(storageRef);

        // Guardar datos en Firestore
        await setDoc(doc(db, "usuarios", userId), {
            dni, nombre, email, celular, dniUrl
        });

        alert("Registro exitoso.");
        window.location.href = "login.html";

    } catch (error) {
        alert("Error en el registro: " + error.message);
    }
}

/**
 * Función para iniciar sesión con Firebase Authentication.
 */
async function iniciarSesion(event) {
    event.preventDefault();

    let email = document.getElementById("loginCorreo").value;
    let password = document.getElementById("loginContraseña").value;

    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Inicio de sesión exitoso.");
        window.location.href = "t3Fz9X.html"; // Redirige al panel

    } catch (error) {
        alert("Error en el inicio de sesión: " + error.message);
    }
}

// Event listeners para capturar el evento de submit en los formularios
document.addEventListener("DOMContentLoaded", () => {
    let registroForm = document.getElementById("registerForm");
    if (registroForm) {
        registroForm.addEventListener("submit", registrarUsuario);
    }

    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", iniciarSesion);
    }
});
