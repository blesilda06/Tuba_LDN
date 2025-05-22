function showSection(id) {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(id).style.display = 'block';
  }

  function confirmBooking() {
    alert("Thank you! Your booking request has been received.");
    return false; 
  }

  function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      alert("You have been logged out.");
      window.location.href = "blesilda.html"; 
    }
  }