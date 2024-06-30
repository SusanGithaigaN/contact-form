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
        var queryType2Input = document.getElementById('grid-query-type-2');
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
            firstNameInput.classList.add('border-error');
            isValid = false;
        } else {
            firstNameError.classList.add('hidden');
            firstNameInput.classList.remove('border-error');
        }

        // last Name validation
        if (!lastNameInput.value.trim()) {
            lastNameError.classList.remove('hidden');
            lastNameInput.classList.add('border-error');
            isValid = false;
        } else {
            lastNameError.classList.add('hidden');
            lastNameInput.classList.remove('border-error');
        }

        // email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-error');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
            emailInput.classList.remove('border-error');
        }

        // query type validation (shared error message)
        if (!queryType1Radio.checked && !queryType2Radio.checked) {
            queryTypeError.classList.remove('hidden');
            isValid = false;
        } else {
            queryTypeError.classList.add('hidden');
        }

        // validate text input based on selected radio button
        if (queryType1Radio.checked && !queryType1Input.textContent.trim()) {
            queryType1InputError.classList.remove('hidden');
            isValid = false;
        } else {
            queryType1InputError.classList.add('hidden');
        }

        if (queryType2Radio.checked && !queryType2Input.textContent.trim()) {
            queryType1InputError.classList.remove('hidden');
            isValid = false;
        } else {
            queryType1InputError.classList.add('hidden');
        }

        // message validation
        if (!messageInput.value.trim()) {
            messageError.classList.remove('hidden');
            messageInput.classList.add('border-error');
            isValid = false;
        } else {
            messageError.classList.add('hidden');
            messageInput.classList.remove('border-error');
        }

        // consent
        if (!consent.checked) {
            consentError.classList.remove('hidden');
            isValid = false;
        } else {
            consentError.classList.add('hidden');
        }

        return isValid;
    }

    // form submission
    var form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            if (validateForm()) {
                //  show modal popup if all validations pass
                var modalBackdrop = document.querySelector('.bg-gray-500');
                var modalPanel = document.querySelector('.relative.transform');

                // display modal
                modalBackdrop.classList.remove('opacity-0', 'hidden');
                modalBackdrop.classList.add('opacity-100');
                modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                modalPanel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');

                // clear form after submission
                form.reset();
            }
        });
    }

    // change background color for radio buttons
    var radios = document.querySelectorAll('input[type="radio"][name="query-type"]');
    radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            var radioContainers = document.querySelectorAll('.radio-container, .selection');
            radioContainers.forEach(function (container) {
                container.classList.remove('bg-lightGreen');
            });

            var selectedContainer = radio.closest('.radio-container, .selection');
            if (selectedContainer) {
                selectedContainer.classList.add('bg-lightGreen');
            }
        });
    });

});
