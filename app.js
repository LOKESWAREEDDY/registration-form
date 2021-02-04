// form validation 

var registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit' , function(event) {

    event.preventDefault();   // stops the automatic submittion
    if( validateForm()){
        alert('Form is Submitted Successfully')
    }
    else {
        alert('Something Went Wrong')
    }
});

let validateForm = () => {
    return(checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword());
    // checkUserName();
    // checkEmail();
    // checkPassword();
    // checkConfirmPassword();
};

let checkUserName = () => {
    let inputElement = document.querySelector('#username');
    let inputFeedback = document.querySelector('#user-feedback');
    let regExp = /^[a-zA-Z\-]+$/;
    if(regExp.test(inputElement.value)) {
        makeValid(inputElement,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputElement,inputFeedback);
        return false;
    }
};

let checkEmail = () => {
    let inputElement = document.querySelector('#email');
    let inputFeedback = document.querySelector('#email-feedback');
    let regExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(regExp.test(inputElement.value)) {
        makeValid(inputElement,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputElement,inputFeedback);
        return false;
    }
};

let checkPassword = () => {
    let inputElement = document.querySelector('#password');
    let inputFeedback = document.querySelector('#password-feedback');
    let regExp =   /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regExp.test(inputElement.value)) {
        makeValid(inputElement,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputElement,inputFeedback);
        return false;
    }
};

let checkConfirmPassword = () => {
    let inputElement = document.querySelector('#confirm-password');
    let inputFeedback = document.querySelector('#confirm-password-feedback');
    let regExp =   /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regExp.test(inputElement.value) && inputElement.value === password.value ) {
        makeValid(inputElement,inputFeedback);
        return true;
    }
    else{
        makeInValid(inputElement,inputFeedback);
        return false;
    }
};




let makeValid = (inputElement , inputFeedback) => {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
    inputFeedback.classList.add('text-success');
    inputFeedback.classList.remove('text-danger');
    inputFeedback.innerText = 'Looks good';
};


let makeInValid = (inputElement , inputFeedback) => {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
    inputFeedback.classList.remove('text-success');
    inputFeedback.classList.add('text-danger');
    inputFeedback.innerText = `please enter a ${inputElement.placeholder}`;
};


// username checking while entering with keyup event 

let userName = document.querySelector('#username');
userName.addEventListener('keyup' , function() {
    checkUserName(); 
});

let email = document.querySelector('#email');
email.addEventListener('keyup' , function(){
    checkEmail();
});

let password = document.querySelector('#password');
email.addEventListener('keyup' , function(){
    checkPassword();
});

let confiempassword = document.querySelector('#confirm-password');
email.addEventListener('keyup' , function(){
    checkConfirmPassword();
});

