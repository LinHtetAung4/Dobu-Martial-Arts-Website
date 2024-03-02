var users = localStorage.getItem("users"); 
$(function () {

    });

    // Registration - Collect it in an array 
    // Store the array in local storage as json object 
function formValidation() {
    // Get the HTML elements
    var userId = GetUserID();
    var txtname = document.getElementById("user_name").value;
    if (!txtname) {
        alert('Please enter name!')
        return false;
    }
    var email = document.getElementById("email").value;
    if (!email) {
        alert('Please enter email!')
        return false;
    }
    var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailfilter.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    var password = document.getElementById("password").value;
    if (!email) {
        alert('Please enter password!')
        return false;
    }
    var gender = document.getElementById("ddlgender").value;
    

    var userObj = {
        "id": userId,
        "name": txtname,
        "email": email,
        "password":password,
        "gender": gender
       
    };
    addUserDataToLocalStorage(userObj);
    document.getElementById('user_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('password').value="";
    return true;
}

function GetUserID() {
    const ID = Date.now();
    return ID;
}

function addUserDataToLocalStorage(userObj) {

    //already has data in localstorage then update it other create new one
    var users = JSON.parse(localStorage.getItem('userData'));
    if (users != null) {
        users.push(userObj);
       
        localStorage.setItem('userData', JSON.stringify(users));
    }
    else {
        var userData = new Array();
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData));

    }
}
/*
hide show password function
*/
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }