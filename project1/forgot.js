function sendOTP() {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email");
    return;
  }

  const otp = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("resetOTP", otp);

  alert("Demo OTP: " + otp);
  window.location.href = "otp.html";
}

function verifyOTP() {
  const enteredOTP = document.getElementById("otp").value;
  const savedOTP = localStorage.getItem("resetOTP");

  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmPassword").value;

  if (enteredOTP !== savedOTP) {
    alert("Invalid OTP");
    return;
  }

  if (newPass.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Passwords do not match");
    return;
  }

  alert("Password reset successful");
  localStorage.removeItem("resetOTP");
  window.location.href = "index.html";
}