const form = document.querySelector("form"),
    userName = form.querySelector(".user-name"),
    userNameInput = userName.querySelector("input"),
    userNameE = userName.querySelector(".error-msg"),
    userEmail = form.querySelector(".user-email"),
    userEmailInput = userEmail.querySelector("input"),
    userEmailE = userEmail.querySelector(".error-msg"),
    userPhone = form.querySelector(".user-phone-number"),
    userPhoneInput = userPhone.querySelector("input"),
    userPhoneE = userPhone.querySelector(".error-msg"),
    userGender = form.querySelector(".gender-container"),
    userGenderInput = userGender.querySelector("input"),
    userGenderE = userGender.querySelector(".error-msg");

form.onsubmit = (e) => {
    e.preventDefault();

    if (userNameInput.value == "") {
        userNameE.style.display = "block";
        userNameInput.style.borderColor = "black";
    }
    
    if (userEmailInput.value == "") {
        userEmailE.style.display = "block";
        userEmailInput.style.borderColor = "black";
    }
    
    if (userPhoneInput.value == "") {
        userPhoneE.style.display = "block";
        userPhoneInput.style.borderColor = "black";
    }
    
    if (!userGenderInput.checked) {
        userGenderE.style.display = "block";
    }

};