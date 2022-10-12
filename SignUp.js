function signUp() {
    var email = document.getElementById("mailId").value;
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    if (email != "" && uname != "" && pwd != "") {
        window.open('loginPage.html');
    } else {
        window.alert("Fill all the blanks");
    }

}