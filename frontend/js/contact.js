document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      statusEl.textContent = "Please fill all fields!";
      statusEl.className = "text-red-400 text-center text-sm";
      return;
    }

    statusEl.textContent = "Sending...";
    statusEl.className = "text-gray-400 text-center text-sm";

    try {
      const res = await fetch("https://portfolio-loki.onrender.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});

      const result = await res.json();

      if (res.ok) {
        statusEl.textContent = "✨ Message sent successfully 📩 — I’ll get back to you shortly.";
        statusEl.className = "text-green-400 text-center text-sm";
        form.reset();
      } else {
        statusEl.textContent = result.message || "Something went wrong!";
        statusEl.className = "text-red-400 text-center text-sm";
      }
    } catch (error) {
      statusEl.textContent = "Server not reachable ❌";
      statusEl.className = "text-red-400 text-center text-sm";
      console.error(error);
    }
  });
});




