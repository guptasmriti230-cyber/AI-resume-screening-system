# 🤖 AI Resume Screening System

An intelligent resume screening application that uses AI/Machine Learning to automatically analyze and score resumes based on job requirements. Built with Node.js, Express, and NLP algorithms.

**[GitHub Repo](https://github.com/guptasmriti230-cyber/AI-resume-screening-system)**

---

## 📋 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)

---

## ✨ Features

- 📄 Resume Upload (PDF, TXT, DOCX)
- 🔍 Text Extraction from documents
- 🎯 Job Matching against job descriptions
- ⭐ AI-powered Resume Scoring (0-100%)
- 🧠 Skills Analysis and extraction
- 📊 Experience Detection
- 🏢 Company Recognition
- 📈 Ranking System
- 📦 Batch Processing
- 📥 Result Export (CSV/JSON)
- 📊 Analytics Dashboard
- 📱 Responsive Design

---

## 🚀 Installation

### Prerequisites
- Node.js (v14+)
- npm
- Git

### Setup

```bash
# Clone repository
git clone https://github.com/guptasmriti230-cyber/AI-resume-screening-system.git
cd AI-resume-screening-system

# Install dependencies
npm install

# Create uploads directory
mkdir backend/uploads

# Start server
npm start

# Open browser
http://localhost:5000
```

---

## 💻 Usage

### For Recruiters

1. **Set Job Description** - Paste job requirements
2. **Upload Resumes** - Single or batch upload
3. **Analyze** - System scores resumes automatically
4. **View Results** - See ranked candidates
5. **Export** - Download as CSV or JSON

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (Responsive Design)
- JavaScript (ES6+)
- Chart.js (Data Visualization)
- Fetch API

### Backend
- Node.js
- Express.js
- Multer (File Upload)
- Natural.js (NLP)
- csv-writer (Export)
- pdf-parse (PDF Extraction)

### AI/ML
- Natural Language Processing (NLP)
- String Similarity Algorithms
- Custom Scoring Algorithm

---

## 📡 API Endpoints

### Jobs
```
POST /api/jobs - Create job
GET /api/jobs - Get all jobs
GET /api/jobs/:id - Get job by ID
DELETE /api/jobs/:id - Delete job
```

### Resumes
```
POST /api/upload - Upload resume
GET /api/resumes - Get all resumes
DELETE /api/resumes/:id - Delete resume
```

### Analysis
```
POST /api/analyze - Analyze resume
GET /api/analysis/:jobId - Get results
GET /api/analytics - Get analytics
```

### Export
```
GET /api/export/csv - Export as CSV
GET /api/export/json - Export as JSON
```

---

## 🎯 Scoring Algorithm

```
Final Score = (Skill Match × 0.4) + 
              (Experience Match × 0.3) + 
              (Education Match × 0.2) + 
              (Keyword Match × 0.1)
```

---

## 📊 Skills Recognized

- **Programming**: JavaScript, Python, Java, C++, C#, Ruby, PHP, Go, Rust
- **Frontend**: React, Angular, Vue, HTML, CSS, Sass, Webpack
- **Backend**: Node.js, Express, Django, Flask, Spring, ASP.NET
- **Database**: MongoDB, PostgreSQL, MySQL, Redis, Elasticsearch
- **DevOps**: Docker, Kubernetes, Jenkins, AWS, Azure, GCP
- **Soft Skills**: Leadership, Communication, Teamwork, Problem-solving

---

## 👨‍💻 Author

**Smriti Gupta**
- GitHub: [@guptasmriti230-cyber](https://github.com/guptasmriti230-cyber)

---

## 📄 License

MIT License - Free to use and modify

---

**Built with ❤️ for Recruitment | Perfect for Portfolio & Interviews**
