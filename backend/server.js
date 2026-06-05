const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const upload = multer({
    dest: path.join(__dirname, 'uploads')
});

let jobs = [];
let resumes = [];

app.post('/api/jobs', (req, res) => {
    const job = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description,
        createdAt: new Date()
    };
    jobs.push(job);
    res.status(201).json(job);
});

app.get('/api/jobs', (req, res) => {
    res.json(jobs);
});

app.post('/api/upload', upload.single('resume'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file' });
    }
    const resume = {
        id: Date.now(),
        name: req.file.originalname,
        score: Math.floor(Math.random() * 40) + 60
    };
    resumes.push(resume);
    res.status(201).json(resume);
});

app.get('/api/resumes', (req, res) => {
    res.json(resumes);
});

if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
    fs.mkdirSync(path.join(__dirname, 'uploads'));
}

app.listen(PORT, () => {
    console.log(`\n🤖 AI Resume Screening System`);
    console.log(`🚀 Server running on http://localhost:${PORT}\n`);
});
