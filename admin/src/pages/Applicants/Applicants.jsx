import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Applicants.css";

import { toast } from "react-toastify";

const Applicants = ({ url }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  // Fetch all applicants
  const fetchApplicants = async (jobCategoryFilter = "") => {
    try {
      const query = jobCategoryFilter ? `?jobCategory=${jobCategoryFilter}` : "";
      const res = await axios.get(`${url}/api/cv/list${query}`);
      if (res.data.success) {
        setApplicants(res.data.data || []);
      } else {
        console.error("Failed to fetch applicants");
        toast.error("failed to fetch applicants")
      }
    } catch (error) {
      console.error("Error fetching applicants:", error);
      toast.error("Error fetching applicants:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete applicant
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this applicant?");
    if (!confirmDelete) return;

    try {
      const res = await axios.post(`${url}/api/cv/remove`, { id });
      if (res.data.success) {
        toast.success("Applicant removed successfully ✅");
        fetchApplicants(filter); // Refresh list with current filter
      } else {
        toast.error("Failed to remove applicant ❌");
      }
    } catch (error) {
      console.error("Error deleting applicant:", error);
      toast.error("Error deleting applicant ❌");
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  if (loading) return <p className="loading">Loading applicants...</p>;

  return (
    <div className="applicants-page scrollable-div">
      <h2>All Applicants</h2>

      <div className="filter-section">
        <label htmlFor="jobCategoryFilter">Filter by Job Category: </label>
        <select
          id="jobCategoryFilter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setLoading(true);
            fetchApplicants(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="IT">IT</option>
          <option value="guard">Guard</option>
          <option value="housekeeping">Housekeeping</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>

      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        <div className="applicant-list">
          {applicants.map((applicant) => (
            <div key={applicant._id} className="applicant-card">
              <div className="applicant-info">
                <h3>{applicant.name}</h3>
                <p><strong>Email:</strong> {applicant.email}</p>
                <p><strong>Address:</strong> {applicant.address || "N/A"}</p>
                <p><strong>Mobile:</strong> {applicant.mobileNo}</p>
                <p><strong>Job Category:</strong> {applicant.jobCategory}</p>
              </div>

              <div className="applicant-buttons">
                {applicant.resume?.url ? (
                  <a
                    href={`${url}/${applicant.resume.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                  >
                    View Resume
                  </a>
                ) : (
                  <button className="disabled-btn" disabled>
                    No Resume
                  </button>
                )}

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(applicant._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applicants;
