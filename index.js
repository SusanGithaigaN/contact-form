document.addEventListener('DOMContentLoaded', function () {
    function validateForm(event) {
        var firstNameInput = document.getElementById('grid-first-name');
        var firstNameError = document.getElementById('first-name-error');
        var lastNameInput = document.getElementById('grid-last-name');
        var lastNameError = document.getElementById('last-name-error');
        var emailInput = document.getElementById('grid-email');
        var emailError = document.getElementById('email-error');
        var queryType1Radio = document.getElementById('green-radio-1');
        var queryType2Radio = document.getElementById('green-radio-2');
        var queryTypeError = document.getElementById('query-type-error');
        var queryType1Input = document.getElementById('grid-query-type-1');
        var queryType1InputError = document.getElementById('query-type-1-error');
        var messageInput = document.getElementById('message');
        var messageError = document.getElementById('message-error');
        var consent = document.getElementById('consent');
        var consentError = document.getElementById('consent-error');

        // input fields
        // var inputField =  document.getElementById('input-field');

        var isValid = true;

        // first name validation
        if (!firstNameInput.value.trim()) {
            firstNameError.classList.remove('hidden');
            isValid = false;
        } else {
            firstNameError.classList.add('hidden');
        }

        // last name validation
        if (!lastNameInput.value.trim()) {
            lastNameError.classList.remove('hidden');
            isValid = false;
        } else {
            lastNameError.classList.add('hidden');
        }

        // email
        if (!emailInput.value.trim()) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // query type validation (shared error message)
        if (!queryType1Radio.checked && !queryType2Radio.checked) {
            queryTypeError.classList.remove('hidden');
            isValid = false;
        } else {
            queryTypeError.classList.add('hidden');
        }

        // validate text input based on selected radio button
        if (queryType1Radio.checked && !queryType1Input.value.trim()) {
            queryType1InputError.classList.remove('hidden');
            isValid = false;
        } else if (queryType1Radio.checked) {
            queryType1InputError.classList.add('hidden');
        }

        if (queryType2Radio.checked && !queryType2Input.value.trim()) {
            queryType1InputError.classList.remove('hidden');
            isValid = false;
        } else if (queryType2Radio.checked) {
            queryType1InputError.classList.add('hidden');
        }

        // message validation
        if (!messageInput.value.trim()) {
            messageError.classList.remove('hidden');
            isValid = false;
        } else {
            messageError.classList.add('hidden');
        }

        // consent
        if (!consent.checked) {
            consentError.classList.remove('hidden');
            isValid = false;
        } else {
            consentError.classList.add('hidden');
        }


        // prevent default form submission
        event.preventDefault();

        if (isValid) {
            // If all validations pass, submit the form
            alert('Thanks for completing the form. We`ll be in touch soon!');
        }
    }

    // event listener for form submission
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});
