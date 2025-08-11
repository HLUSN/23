import React, { useEffect, useState } from "react";
import axios from "axios";
import './CrudPage.css';

function CrudPage() {
  const [guides, setGuides] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", gifUrl: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const backendUrl = "https://cyber-safety-guide-backend-production.up.railway.app";

  const fetchGuides = () => {
    axios.get(`${backendUrl}/api/guides`)
      .then(res => setGuides(res.data))
      .catch(() => setError("Failed to fetch entries."));
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (editingId) {
      axios.put(`${backendUrl}/api/guides/${editingId}`, form)
        .then(() => {
          setForm({ title: "", content: "", gifUrl: "" });
          setEditingId(null);
          setMessage("Entry updated successfully!");
          fetchGuides();
        })
        .catch(() => setError("Failed to update entry."));
    } else {
      axios.post(`${backendUrl}/api/guides`, form)
        .then(() => {
          setForm({ title: "", content: "", gifUrl: "" });
          setMessage("Entry added successfully!");
          fetchGuides();
        })
        .catch(() => setError("Failed to add entry."));
    }
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  };

  const handleEdit = guide => {
    setForm({ title: guide.title, content: guide.content, gifUrl: guide.gifUrl });
    setEditingId(guide.id);
  };

  const handleDelete = id => {
    setError("");
    setMessage("");
    axios.delete(`${backendUrl}/api/guides/${id}`)
      .then(() => {
        setMessage("Entry deleted successfully!");
        fetchGuides();
      })
      .catch(() => setError("Failed to delete entry."));
    setTimeout(() => {
      setMessage("");
      setError("");
    }, 3000);
  };

  return (
    <div className="crud-container">
      <h2>Cyber Safe Guide Entries</h2>
      <form onSubmit={handleSubmit} className="crud-form">
        <input id="title" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea id="content" name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <input id="gifUrl" name="gifUrl" placeholder="Site URL" value={form.gifUrl} onChange={handleChange} />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}
      </form>
      <div className="guide-list">
        {guides.map(guide => (
          <div key={guide.id} className="guide-card animate__animated animate__fadeInUp">
            <h3>{guide.title}</h3>
            <p>{guide.content}</p>
            {guide.gifUrl && (
              <img src={process.env.PUBLIC_URL + '/5.gif'} alt="Guide GIF" className="guide-gif" />
            )}
            <button onClick={() => handleEdit(guide)}>Edit</button>
            <button onClick={() => handleDelete(guide.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CrudPage;