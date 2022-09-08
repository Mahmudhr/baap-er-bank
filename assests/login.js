// step-1 add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function () {

    // step-2 get the email address inside the email input field
    // a. set the id on the html element
    // b. get the element
    // c. get the value from the element
    // always remember, to use  .value to get text from an input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3 (as like step-2)

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    // step-4
    // alternative way for verify email and password 

    if (email === 'shontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid useremail and password !!!')
    }

})