// StudentJobTracker.jsx
import React, { useState, useEffect } from "react";
import {
  getApplications,
  addApplication,
  updateApplicationStatus,
  deleteApplication,
} from "../api";

const STATUS_OPTIONS = ["Applied", "Interview", "Offer", "Rejected"];

export default function StudentJobTracker() {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({ company: "", role: "", status: "Applied", date: "", link: "" });
  const [filter, setFilter] = useState({ status: "", date: "" });

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await getApplications();
      setApplications(res.data);
    } catch (err) {
      console.error("Failed to fetch applications", err);
    }
  };

  const handleAddApplication = async () => {
    try {
      const res = await addApplication(form);
      setApplications([...applications, res.data]);
      setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    } catch (err) {
      console.error("Error adding application", err);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await updateApplicationStatus(id, newStatus);
      setApplications(applications.map(app => app._id === id ? res.data : app));
    } catch (err) {
      console.error("Error updating status", err);
    }
  };

  const handleDeleteApplication = async (id) => {
    try {
      await deleteApplication(id);
      setApplications(applications.filter(app => app._id !== id));
    } catch (err) {
      console.error("Error deleting application", err);
    }
  };

  const filteredApps = applications.filter(app => {
    const statusMatch = filter.status ? app.status === filter.status : true;
    const dateMatch = filter.date ? app.date === filter.date : true;
    return statusMatch && dateMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl font-bold text-center text-blue-700">Student Job Tracker</h1>

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Add New Job Application</h2>
          <div className="flex flex-col gap-4">
            <input type="text" placeholder="Company" className="border rounded-lg p-2 w-full" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
            <input type="text" placeholder="Role" className="border rounded-lg p-2 w-full" value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} />
            <select className="border rounded-lg p-2 w-full" value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
              {STATUS_OPTIONS.map(status => <option key={status}>{status}</option>)}
            </select>
            <input type="date" className="border rounded-lg p-2 w-full" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
            <input type="url" placeholder="Job Link" className="border rounded-lg p-2 w-full" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} />
          </div>
          <div className="text-right pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg" onClick={handleAddApplication}>Add Application</button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <select className="border rounded-lg p-2 w-full md:w-auto" value={filter.status} onChange={e => setFilter({ ...filter, status: e.target.value })}>
            <option value="">All Status</option>
            {STATUS_OPTIONS.map(status => <option key={status}>{status}</option>)}
          </select>
          <input type="date" className="border rounded-lg p-2 w-full md:w-auto" value={filter.date} onChange={e => setFilter({ ...filter, date: e.target.value })} />
        </div>

        {/* Application List */}
        <div className="grid gap-6">
          {filteredApps.length === 0 && <p className="text-center text-gray-500">No applications found.</p>}
          {filteredApps.map(app => (
            <div key={app._id} className="bg-white border-l-4 border-blue-500 p-5 rounded-lg shadow hover:shadow-md transition flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-semibold text-xl text-gray-800">{app.company} - {app.role}</h2>
                <p className="text-sm text-gray-600">Status: <span className="font-medium">{app.status}</span></p>
                <p className="text-sm text-gray-600">Date: {app.date}</p>
                <a href={app.link} className="text-blue-600 underline text-sm" target="_blank" rel="noopener noreferrer">Job Posting</a>
              </div>
              <div className="flex gap-3 items-center">
                <select value={app.status} onChange={e => handleUpdateStatus(app._id, e.target.value)} className="border p-2 rounded-lg">
                  {STATUS_OPTIONS.map(status => <option key={status}>{status}</option>)}
                </select>
                <button onClick={() => handleDeleteApplication(app._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}