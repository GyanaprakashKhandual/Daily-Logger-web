const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./configs/db.config');

connectDB();

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost${PORT}`);
});