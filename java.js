
function confirmation() {

    let pass = document.getElementById("pass").value
    let confirm_pass = document.getElementById("confirm-pass").value

    if (pass == confirm_pass) {
        alert("Registered with success!")

        setTimeout(function(){ window.location.href = "index.html"; }, 2000);
    }
    else {
        alert("Password and Confirm Password are different. \n Please try again.")
    }
    return false
}

function enter_site() {
    alert("Logged in with success!")
    setTimeout(function(){ window.location.href = "index.html"; }, 2000);
    return false
}