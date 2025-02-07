import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAcRHO-N9ajnS7zkDE6y9huyfzot59MLz8",
  authDomain: "fiscalizacionapp-7041b.firebaseapp.com",
  projectId: "fiscalizacionapp-7041b",
  storageBucket: "fiscalizacionapp-7041b.appspot.com",
  messagingSenderId: "56623377151",
  appId: "1:56623377151:web:29013582facd0d21c43aca"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

// 📌 REGISTRAR USUARIO
async function registrarUsuario(event) {
    event.preventDefault();

    const dni = document.getElementById("dni").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;
    const contraseña = document.getElementById("contraseña").value;
    const fotoDni = document.getElementById("fotoDni").files[0];

    try {
        // 1️⃣ Crear usuario en Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, contraseña);
        const user = userCredential.user;
        
        // 2️⃣ Subir foto del DNI a Firebase Storage
        const storageRef = ref(storage, `dni/${user.uid}`);
        await uploadBytes(storageRef, fotoDni);
        const dniURL = await getDownloadURL(storageRef);
        
        // 3️⃣ Guardar usuario en Firestore
        await addDoc(collection(db, "usuarios"), {
            uid: user.uid,
            dni: dni,
            nombre: nombre,
            email: email,
            celular: celular,
            dniURL: dniURL
        });

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "t3Fz9X.html"; // Redirigir al login
    } catch (error) {
        alert("Error al registrar usuario: " + error.message);
    }
}

// 📌 INICIAR SESIÓN
async function iniciarSesion(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const contraseña = document.getElementById("loginPassword").value;

    try {
        await signInWithEmailAndPassword(auth, email, contraseña);
        alert("Inicio de sesión exitoso.");
        window.location.href = "t3Fz9X.html"; // Redirigir al panel
    } catch (error) {
        alert("Error en el inicio de sesión: " + error.message);
    }
}

// Conectar las funciones a los formularios
document.querySelector(".form").addEventListener("submit", registrarUsuario);
document.querySelector("#loginForm").addEventListener("submit", iniciarSesion);
