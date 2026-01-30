const API_URL = "https://akwebify.onrender.com/api/orders";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) {
    console.error("❌ Form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name")?.value;
    const email = document.querySelector("#email")?.value;
    const message = document.querySelector("#message")?.value;

    try {
      const res = await fetch(API_URL, {
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
