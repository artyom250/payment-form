// Format the card number input
document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';

    // Format value with spaces every 4 digits
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;
});

// Format the expiry date input
document.getElementById('expiry-date').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    let formattedValue = '';

    // Format value as MM/YY
    if (value.length > 2) {
        formattedValue = value.slice(0, 2) + '/' + value.slice(2, 4);
    } else {
        formattedValue = value;
    }

    e.target.value = formattedValue;
});

// Toggle receipt option and email field visibility
function checkFunc() {
    const check = document.querySelector("#check");
    const email = document.querySelector("#email");
    const icon = document.querySelector(".bx-check");
    check.classList.toggle("blue");
    email.classList.toggle("down");
    icon.classList.toggle("show");
}

// Show/hide label based on input field value
document.addEventListener('DOMContentLoaded', () => {
    const fields = document.querySelectorAll('.field input');

    fields.forEach(input => {
        input.addEventListener('input', () => {
            const span = input.nextElementSibling;
            if (input.value.trim() !== '') {
                span.classList.add('active');
            } else {
                span.classList.remove('active');
            }
        });
    });
});