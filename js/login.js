document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;


    const passField = document.getElementById('pass-field');
    const pass =  passField.value;

    console.log(email, pass);

    if (email === 'rayhan@gmail.com' && pass === 'rayhan704') {
        console.log('vlaid user');
    }
    else{
        console.log('invalid user');
    }
})