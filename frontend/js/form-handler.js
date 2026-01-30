document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) {
    console.error("❌ Form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 🔥 PAGE REFRESH STOP

    const name = document.querySelector("#name")?.value;
    const email = document.querySelector("#email")?.value;
    const message = document.querySelector("#message")?.value;

    console.log("📨 Sending data:", { name, email, message });

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          projectType: "Contact Form",
          message
        })
      });

      const data = await res.json();
      console.log("✅ Server response:", data);

      if (data.success) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message");
      }

    } catch (error) {
      console.error("❌ Fetch error:", error);
      alert("❌ Server not reachable");
    }
  });
});
