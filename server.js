const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

app.post("/api/students", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    console.log("Received student:", name, email);

    res.json({
        message: "Student registered successfully",
        student: {
            name: name,
            email: email
        }
    });
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});