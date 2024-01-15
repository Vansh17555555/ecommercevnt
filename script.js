const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
function submitSignInForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = {
        username: username,
        password: password
    };

    fetch('http://localhost:2000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("🎉 Logged in with love! 🥰");
        window.location.replace(window.location.origin + '/Build-and-Deploy-Ecommerce-Website/index.html');

    })
    .catch(error => {
        console.error('Error:', error);
    });
}

const signInForm = document.getElementById('signin-form');
if (signInForm) {
    signInForm.addEventListener('submit',submitSignInForm);
    };



function submitSignUpForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formData = {
        username: username,
        password: password
    };

    fetch('http://localhost:2000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("🎉 Signed up successfully!");

        // Use an absolute path for redirection
        window.location.replace(window.location.origin + '/Build-and-Deploy-Ecommerce-Website/index.html');
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error during signup. Please try again.");
    });
}

const signUpForm = document.getElementById('signup-form');
if (signUpForm) {
    signUpForm.addEventListener('submit', submitSignUpForm);
}
