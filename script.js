// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Firebase configuration (Keep API keys private)
const firebaseConfig = {
    apiKey: "AIzaSyCXuI4rco_Zyx8pfJfBD2ndXQ1mftJ9iWY",
    authDomain: "sports-fun-cup.firebaseapp.com",
    projectId: "sports-fun-cup",
    storageBucket: "sports-fun-cup.appspot.com",
    messagingSenderId: "178092850822",
    appId: "1:178092850822:web:5aa40add7c97a562ee5b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event Listeners for Login & Register Buttons
document.getElementById("register-btn").addEventListener("click", () => {
    document.getElementById("auth-modal").style.display = "block";
    document.getElementById("auth-action").innerText = "Register";
});

document.getElementById("login-btn").addEventListener("click", () => {
    document.getElementById("auth-modal").style.display = "block";
    document.getElementById("auth-action").innerText = "Login";
});

document.getElementById("auth-action").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const action = document.getElementById("auth-action").innerText;

    if (action === "Register") {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Registered successfully!");
                document.getElementById("auth-modal").style.display = "none";
            })
            .catch(error => alert(error.message));
    } else {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Logged in successfully!");
                document.getElementById("auth-modal").style.display = "none";
            })
            .catch(error => alert(error.message));
    }
});

// Detect login state
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("profile-btn").style.display = "block";
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("register-btn").style.display = "none";
    } else {
        document.getElementById("profile-btn").style.display = "none";
        document.getElementById("login-btn").style.display = "block";
        document.getElementById("register-btn").style.display = "block";
    }
});

// Function to update probability
function updateProbability() {
    let veerWins = Math.floor(Math.random() * 100);
    let aryanWins = 100 - veerWins;
    document.getElementById("veerProb").innerText = veerWins;
    document.getElementById("aryanProb").innerText = aryanWins;
}
