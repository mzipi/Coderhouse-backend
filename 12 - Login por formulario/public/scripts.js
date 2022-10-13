if (document.getElementById("login")) {
    document.getElementById("login").addEventListener('submit', (e) => {
        e.preventDefault();
        loginFunc();
    }) 
}

function loginFunc() {
    var user = document.getElementById("user");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("user", `${user.value}`);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded
    };

    fetch("/login", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}

if (document.getElementById("logout")) {
    document.getElementById("logout").addEventListener('click', (e) => {
        e.preventDefault();
        logoutFunc();
    }) 
}

function logoutFunc() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders
    };

    fetch("/logout", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));
}