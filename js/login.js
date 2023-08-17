// step 1: add click event handlers with the click event submit button
document.getElementById('btn_submit').addEventListener('click', function() {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get text fron an input field
    const emailField = document.getElementById('user_email');
    const email = emailField.value;

    // step 3: get passsword
    // 3.1: set id on the html element
    // 3.2: get the element
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user_password');
    const password = passwordField.value;
    // console.log(email, password);

    // DANGER: DO NOT VERIFY THIS email and password on the client side
    // step 4: verify email and password
    if (email === "racelife64@gmail.com" && password === "Adminok") {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid information');
    }
});