// ===============================
// DASHBOARD ACCESS PROTECTION
// ===============================
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// ===============================
// PAGE NAVIGATION
// ===============================
function goTo(page) {
  window.location.href = page;
}

// ===============================
// LOGOUT FUNCTION (SAFE)
// ===============================
function logout() {
  const confirmLogout = confirm("Are you sure you want to logout?");
  if (confirmLogout) {
    // remove ONLY session flag
    localStorage.removeItem("loggedIn");

    // redirect to login page
    window.location.href = "index.html";
  }
}

