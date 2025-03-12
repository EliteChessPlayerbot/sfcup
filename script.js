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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase Configuration
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

console.log("✅ Firebase initialized successfully!");

// Function to handle user registration
document.getElementById("register-btn").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password (min 6 chars):");

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Registration successful!");
            console.log("User Registered:", userCredential.user);
        })
        .catch((error) => {
            alert("❌ Error: " + error.message);
        });
});

// Function to handle user login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("✅ Login successful!");
            console.log("User Logged In:", userCredential.user);
            document.getElementById("login-btn").style.display = "none";
            document.getElementById("register-btn").style.display = "none";
            document.getElementById("profile-btn").style.display = "inline-block";
        })
        .catch((error) => {
            alert("❌ Error: " + error.message);
        });
});

// Function to check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user);
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("profile-btn").style.display = "inline-block";
    } else {
        console.log("No user logged in.");
        document.getElementById("login-btn").style.display = "inline-block";
        document.getElementById("register-btn").style.display = "inline-block";
        document.getElementById("profile-btn").style.display = "none";
    }
});

// Function to logout
document.getElementById("profile-btn").addEventListener("click", () => {
    signOut(auth).then(() => {
        alert("✅ Logged out successfully!");
        location.reload();
    }).catch((error) => {
        alert("❌ Error: " + error.message);
    });
});
