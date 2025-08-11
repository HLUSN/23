import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuideListPage.css";

const GuideListPage = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/guides")
      .then(res => setGuides(res.data));
  }, []);

  return (
    <div className="guide-list-public">
      <h2>Cyber Safety Tips & Guides</h2>
      <div className="guide-list-cards">
        {guides.map(guide => (
          <div key={guide.id} className="guide-public-card">
            <h3>{guide.title}</h3>
            <p>{guide.content}</p>
            {guide.gifUrl && (
              <a href={guide.gifUrl} target="_blank" rel="noopener noreferrer" className="guide-link">
                {guide.gifUrl}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideListPage;