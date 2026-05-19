// Contact Form Handler - Send messages to backend email endpoint
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const formStatus = document.getElementById('form-status');

    // Clear previous errors
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    // Validation
    let isValid = true;

    if (!name) {
      document.getElementById('name-error').textContent = 'Please enter your name';
      isValid = false;
    }

    if (!email || !isValidEmail(email)) {
      document.getElementById('email-error').textContent = 'Please enter a valid email';
      isValid = false;
    }

    if (!subject) {
      document.getElementById('subject-error').textContent = 'Please enter a project title';
      isValid = false;
    }

    if (!message || message.length < 10) {
      document.getElementById('message-error').textContent = 'Please enter at least 10 characters';
      isValid = false;
    }

    if (!isValid) return;

    // Disable submit button
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    try {
      // Payload to send to backend
      // Backend will send: 1) notification to akashshingare217@gmail.com, 2) auto-reply to user
      const payload = {
        name,
        email,
        message: `Subject: ${subject}\n\n${message}`
      };

      // Try primary endpoint (can be deployed or localhost)
      const primaryUrl = window.location.origin && window.location.origin.startsWith('http') 
        ? `${window.location.origin}/api/contact` 
        : 'http://localhost:5000/api/contact';

      const secondaryUrl = 'http://localhost:5000/api/contact';
      const endpoints = [primaryUrl];
      if (primaryUrl !== secondaryUrl) {
        endpoints.push(secondaryUrl);
      }

      let sent = false;

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            timeout: 8000
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Server error: ${response.status}`);
          }

          const data = await response.json();

          // Success: both emails sent (to admin + auto-reply to user)
          formStatus.className = 'form-status success';
          formStatus.textContent = '✅ ' + (data.message || 'Message sent! You will receive a confirmation email shortly.');
          contactForm.reset();
          formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          sent = true;
          break;
        } catch (endpointError) {
          console.warn(`Endpoint ${endpoint} failed:`, endpointError);
          continue;
        }
      }

      if (!sent) {
        // Fallback: open mailto
        const mailto = `mailto:akashshingare217@gmail.com?subject=${encodeURIComponent(`Message from ${name}: ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailto;
        formStatus.className = 'form-status success';
        formStatus.textContent = '✅ Opening email client as backup...';
      }
    } catch (error) {
      console.error('Form submission error:', error);
      formStatus.className = 'form-status error';
      formStatus.textContent = '❌ Unable to send at this moment. Please try again or contact directly via email.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
