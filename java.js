
 function confirmation() {

    let pass = document.getElementById("pass").value
    let confirm_pass = document.getElementById("confirm-pass").value

    if (pass == "" || confirm_pass == "") {
       alert("ERROR!\nPlease introduce your credentials.")
    }
    else {
        if (pass == confirm_pass) {
        alert("Registered with success!")

        setTimeout(function(){ window.location.href = "index.html"; }, 2000);
        }
        else {
        alert("Password and Confirm Password are different. \n Please try again.")
        }
    }
    return false
}

function enter_site() {
    let x = document.getElementById("pass").value
    let y = document.getElementById("username1").value

    if (x == "" || y == "") {
        alert("ERROR!\nPlease introduce your credentials.")
    }
    else {
        alert("Logged in with success!")
        setTimeout(function(){ window.location.href = "index.html"; }, 2000);
    }
    return false
}

function subscribe() {
    let a = document.getElementById("first_name").value
    let b = document.getElementById("last_name").value
    let c = document.getElementById("mail").value
    let d = document.getElementById("birth").value
    let e = document.getElementById("locality").value

    if (a == "" || b == "" || c == "" || d == "" || e == "") {
        alert("ERROR!\nPlease introduce your credentials.")
    }
    else {
        alert("Subscription completed!")
        setTimeout(function(){ window.location.href = "index.html"; }, 2000);
    }
    return false
}