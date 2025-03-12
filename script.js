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
