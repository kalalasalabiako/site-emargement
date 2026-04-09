function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert("Connexion en cours...");
    }
}
