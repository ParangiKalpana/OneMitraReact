const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setErrors({});
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      alert(data.message || "Failed to send email.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again later.");
  }
};