import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GuideListPage.css";

const GuideListPage = () => {
  const [guides, setGuides] = useState([]);

  // Use the environment variable for the backend URL
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    // Corrected axios call to use the environment variable
    axios.get(`${backendUrl}/api/guides`)
      .then(res => setGuides(res.data))
      .catch(error => {
        console.error("There was an error fetching the guides!", error);
      });
  }, [backendUrl]); // Added backendUrl to the dependency array

  return (
    <div className="guide-list-public">
      <h2>Cyber Safety Tips & Guides</h2>
      <div className="guide-list-cards">
        {guides.map(guide => (
          // Use guide._id as the key, as it's the standard for MongoDB
          <div key={guide._id} className="guide-public-card">
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
