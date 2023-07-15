const express = require('express');
const path = require('path');


const app = express();
const PORT = 8080;


app.use("/static", express.static(path.resolve(__dirname,"frontend", "static"), {extensions: ["js"]}));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})


app.listen(PORT, () => {
    console.log('listening on port:', PORT);
})