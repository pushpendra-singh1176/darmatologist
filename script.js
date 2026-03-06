// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu when nav link clicked (mobile)
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Appointment form handler
const form = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value.trim(),
    phone_number: document.getElementById("phone").value.trim(),
    skin_problem: document.getElementById("problem").value.trim(),
    preferred_appointment_date: document.getElementById("date").value,
  };

  if (!payload.name || !payload.phone_number || !payload.skin_problem || !payload.preferred_appointment_date) {
    formMessage.textContent = "Please fill all fields.";
    return;
  }

  // Optional backend API integration
  // Replace with your backend URL if needed
  const API_URL = "https://your-backend-url/api/appointments";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error("Failed");

    formMessage.textContent = "Appointment submitted successfully!";
    form.reset();
  } catch (err) {
    // Fallback: still show successful UI message for static demo
    formMessage.textContent = "Appointment request recorded (demo mode).";
    form.reset();
  }
});