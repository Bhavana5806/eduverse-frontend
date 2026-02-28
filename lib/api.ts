const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export const api = {
  async createStudent(data: any) {
    const res = await fetch(`${API_URL}/student/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async submitAssessment(data: any) {
    const res = await fetch(`${API_URL}/assessment/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async getWeaknessAnalysis(studentId: number) {
    const res = await fetch(`${API_URL}/student/${studentId}/weakness-analysis`);
    return res.json();
  },

  async predictExam(data: any) {
    const res = await fetch(`${API_URL}/exam/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async analyzeCareer(data: any) {
    const res = await fetch(`${API_URL}/career/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  async autonomousDecision(studentId: number, assessmentData: any) {
    const res = await fetch(`${API_URL}/autonomous/analyze-and-decide?student_id=${studentId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(assessmentData),
    });
    return res.json();
  },
};
