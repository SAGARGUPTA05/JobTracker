import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // Adjust this for production
});

export const getApplications = () => API.get("/applications");
export const addApplication = (data) => API.post("/applications", data);
export const updateApplicationStatus = (id, status) =>
  API.put(`/applications/${id}`, { status });
export const deleteApplication = (id) => API.delete(`/applications/${id}`);
