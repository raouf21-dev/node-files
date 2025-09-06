const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Hello, Node.js is running!");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Raouf" },
    { id: 2, name: "Alice" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
