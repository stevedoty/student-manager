import axios from 'axios';
const api = axios.create();
const baseUrl = 'http://localhost:3000'
export const getStudents = () => api.get(`${baseUrl}/api/students`);
export const deleteStudents = (data = {}) => api.post(`${baseUrl}/api/students`, data);
export const updateStudents = (data = {}) => api.put(`${baseUrl}/api/students/${data.id}`, data);
