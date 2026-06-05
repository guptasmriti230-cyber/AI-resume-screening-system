document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});

async function loadDashboard() {
    const resumes = await getAllResumes();
    document.getElementById('totalResumes').textContent = resumes.length;
    if (resumes.length > 0) {
        const avgScore = Math.round(resumes.reduce((sum, r) => sum + (r.score || 0), 0) / resumes.length);
        document.getElementById('avgScore').textContent = avgScore + '%';
        document.getElementById('topMatch').textContent = Math.max(...resumes.map(r => r.score || 0)) + '%';
    }
    loadRecentCandidates(resumes);
}

function loadRecentCandidates(resumes) {
    const container = document.getElementById('recentCandidates');
    if (resumes.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No candidates yet</p>';
        return;
    }
    container.innerHTML = resumes.slice(-5).reverse().map(r => `
        <div class="candidate-item">
            <div>
                <div style="font-weight: bold;">${r.name || 'Candidate'}</div>
            </div>
            <span class="score-badge ${r.score >= 70 ? 'score-high' : r.score >= 50 ? 'score-medium' : 'score-low'}">${r.score || 0}%</span>
        </div>
    `).join('');
}

function setupJobDescription() {
    document.getElementById('jobModal').style.display = 'block';
}

function closeJobModal() {
    document.getElementById('jobModal').style.display = 'none';
}

async function saveJobDescription() {
    const description = document.getElementById('jobDescription').value.trim();
    if (!description) {
        alert('Please enter job description');
        return;
    }
    const job = await createJob({ title: 'Position', description });
    if (job) {
        alert('Job saved!');
        closeJobModal();
        loadDashboard();
    }
}

function exportResults() {
    alert('Export feature coming soon!');
}

window.onclick = (event) => {
    const modal = document.getElementById('jobModal');
    if (event.target === modal) modal.style.display = 'none';
}
