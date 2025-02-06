document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ageForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const ageInput = document.getElementById("age").value.trim();

    // Validate inputs
    if (!name || !ageInput || isNaN(ageInput)) {
      alert("Please enter valid details.");
      return;
    }

    const age = parseInt(ageInput, 10);

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); // 4-second delay
    })
      .then(alert) // Directly passing alert as a callback
      .catch(alert);
  });
});
