function login() {
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;

    if (uname != "" && pwd != "") {
        window.open('index.html');
    } else {
        window.alert("Login failed");
    }
}