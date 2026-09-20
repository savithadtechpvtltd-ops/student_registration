const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/students",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    email: email
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        result.innerHTML = `
            <p>${data.message}</p>
            <p>Name: ${data.student.name}</p>
            <p>Email: ${data.student.email}</p>
        `;

    } catch (error) {

        result.innerHTML = `
            <p>Error: ${error.message}</p>
        `;

    }

});