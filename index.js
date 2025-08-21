const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./configs/db.config');

const authRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');
const workRoutes = require('./routes/work.route');
dotenv.config();

connectDB();




const app = express();
app.use(express.json());

const PORT = process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/auth', authRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/work', workRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

