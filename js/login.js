var body = document.querySelector("body");
var singUpButton = document.querySelector("#singUp");
var singInButton = document.querySelector("#singIn");

body.onload = function(){
    body.className = "on-load";
}

singUpButton.addEventListener("click", function(){
    body.className = "sing-up";
});

singInButton.addEventListener("click", function(){
    body.className = "sing-in";
});

document.getElementById("access").addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const data = {
        email: email,
        password: password
    };

    axios.post("https://api-umfg-programacao-iv-2024-291d5e9a4ec4.herokuapp.com/v1/signin", data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        alert("Login realizado com sucesso!");
            window.location.href = "welcome.html";
            localStorage.setItem("userEmail", email);
        if (response.data.success) {
            alert("Login realizado com sucesso!");
            window.location.href = "welcome.html";
        } else {
            
        }
    })
    .catch(error => {
        if (error.response) {
            console.error("Erro na resposta da API:", error.response.data);
            alert("Erro ao realizar o login: " + error.response.data);
        } else {
            console.error("Erro:", error.message);
            alert("Erro ao realizar o login: " + error.message);
        }
    });
});
