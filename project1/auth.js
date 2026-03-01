// Toggle password visibility
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Register
function register() {
  const user = regUser.value.trim();
  const email = regEmail.value.trim();
  const mobile = regMobile.value.trim();
  const pass = regPass.value.trim();
  const confirm = regConfirm.value.trim();

  if (!user || !email || !mobile || !pass || !confirm) {
    alert("All fields are required");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Only Gmail allowed");
    return;
  }

  if (mobile.length !== 10 || isNaN(mobile)) {
    alert("Enter valid 10-digit mobile number");
    return;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Account created successfully!");
  window.location.href = "index.html";
}

function login() {

  const u = loginUser.value.trim();
  const p = loginPass.value.trim();

  // 🔐 ADMIN LOGIN
  if (u === "admin" && p === "admin123") {

    localStorage.setItem("loggedInUser", "admin");
    localStorage.setItem("role", "admin");

    window.location.href = "admin.html";
    return;
  }

  // 👤 NORMAL USER LOGIN
  if (
    u === localStorage.getItem("user") &&
    p === localStorage.getItem("pass")
  ) {

    localStorage.setItem("loggedInUser", u);
    localStorage.setItem("role", "user");

    window.location.href = "dashboard.html";

  } else {
    alert("Invalid login");
  }
}


  
