document.addEventListener("DOMContentLoaded", function () {
  const form = document.createElement("form");
  form.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter your name" required />
    
    <label for="age">Age:</label>
    <input type="number" id="age" placeholder="Enter your age" required />

    <button type="submit" id="btn">Submit</button>
  `;

  document.body.appendChild(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);

    if (!name || isNaN(age)) {
      alert("Please enter valid details.");
      return;
    }

    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); // 4-second delay
    })
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });
});
