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
        auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Registered successfully!");
            document.getElementById("auth-modal").style.display = "none";
        }).catch(error => alert(error.message));
    } else {
        auth.signInWithEmailAndPassword(email, password).then(user => {
            alert("Logged in successfully!");
            document.getElementById("auth-modal").style.display = "none";
        }).catch(error => alert(error.message));
    }
});

// Detect login state
auth.onAuthStateChanged(user => {
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


import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const auth = getAuth();

function showSignup() {
    document.getElementById("signup-form").style.display = "block";
}

function signup() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signup Successful!");
            document.getElementById("signup-form").style.display = "none";
        })
        .catch((error) => {
            alert(error.message);
        });
}


function updateProbability() {
    let veerWins = Math.floor(Math.random() * 100);
    let aryanWins = 100 - veerWins;

    document.getElementById("veerProb").innerText = veerWins;
    document.getElementById("aryanProb").innerText = aryanWins;
}
