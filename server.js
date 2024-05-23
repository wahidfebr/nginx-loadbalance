const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const name = process.env.NAME || "Default";

app.get("/", async (_, res) => {
    res.send(name);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
