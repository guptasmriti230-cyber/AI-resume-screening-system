const API_BASE_URL = 'http://localhost:5000/api';

async function createJob(jobData) {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jobData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function getAllJobs() {
    try {
        const response = await fetch(`${API_BASE_URL}/jobs`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function uploadResume(file) {
    try {
        const formData = new FormData();
        formData.append('resume', file);
        const response = await fetch(`${API_BASE_URL}/upload`, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function getAllResumes() {
    try {
        const response = await fetch(`${API_BASE_URL}/resumes`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
