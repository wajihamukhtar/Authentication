

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const auth = getAuth();
import { app } from './firebaseConfig.js';

let icon = document.getElementById("icon")
let h1 = document.getElementById('heading')
let p = document.getElementById('para')
let link = document.getElementById("link")
link.innerHTML = 'Sign Up'

p.innerHTML = "don't have an account?"
icon.onclick = function () {
    if (password.type == "password") {
        password.type = "text"
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
<path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>`
    }
    else {
        password.type = "password"
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
  </svg>`
    }
}
link.onclick = function () {
    if (h1.innerHTML == "Sign Up Your Account") {
        h1.innerHTML = "Login to Your Account"
        link.innerHTML = "Sign Up"
        p.innerHTML = "don't have an account?"
        btn.innerHTML = "Login";

    }
    else if (h1.innerHTML = "Login to Your Account") {
        h1.innerHTML = "Sign Up Your Account"
        link.innerHTML = 'Login'
        p.innerHTML = "have an account?"
        btn.innerHTML = "SignUp";
    }
}
let btn = document.getElementById("btn")
btn.innerHTML = "Login";
const handleSubmit = (text) => {
    if (text == 'SignUp') {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential?.user;
                alert("Signed up successfully:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const { message } = error;
                alert(message);
            });
    }
    else {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential?.user;
                if (user) {
                    window.location.href = './welcome.html'
                }
                else if (!user) {
                    window.location.href = '/login.html'
                }
                alert("Signin successfully:", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }
}
btn?.addEventListener("click", () => handleSubmit(btn.innerHTML))

