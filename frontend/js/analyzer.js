class ResumeAnalyzer {
    constructor() {
        this.skills = ['javascript', 'python', 'java', 'react', 'nodejs', 'express', 'mongodb', 'sql', 'html', 'css'];
    }

    extractSkills(text) {
        const lowerText = text.toLowerCase();
        return this.skills.filter(skill => lowerText.includes(skill));
    }

    calculateScore(text, jobDescription) {
        const skills = this.extractSkills(text);
        const jobSkills = this.extractSkills(jobDescription);
        const matches = skills.filter(s => jobSkills.includes(s)).length;
        return Math.round((matches / Math.max(jobSkills.length, 1)) * 100);
    }
}

const analyzer = new ResumeAnalyzer();
