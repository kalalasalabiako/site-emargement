function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (username === "admin" && password === "1234") {
        alert("Connexion réussie !");
    } else {
        alert("Identifiants incorrects.");
    }
}

function forgotPassword() {
    alert("Redirection vers la récupération du mot de passe...");
}
