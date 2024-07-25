document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add any backend call to send the signup data

    // Hide the signup form and show the OTP form
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('otp-form').classList.remove('hidden');
});

// Handle OTP form submission
document.getElementById('otp-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your logic to verify the OTP
    const otp = [
        document.getElementById('input1').value,
        document.getElementById('input2').value,
        document.getElementById('input3').value,
        document.getElementById('input4').value
    ].join('');

    alert(`OTP entered: ${otp}`); // For demonstration, you can replace this with your verification logic
});
