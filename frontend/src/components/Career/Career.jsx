import React, { useState } from "react";
import './Career.css';

const Career = ({url}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    mobileNo: "",
    jobCategory: "",
    resume: null,
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("address", formData.address);
    data.append("mobileNo", formData.mobileNo);
    data.append("jobCategory", formData.jobCategory);
    if (formData.resume) data.append("resume", formData.resume);

    try {
      const res = await fetch(`${url}/api/cv/add`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log(result);
      
      if (result.success) {
        setMessage("Application submitted successfully ✅");
        setFormData({
          name: "",
          email: "",
          address: "",
          mobileNo: "",
          jobCategory: "",
          resume: null,
        });
      } else {

        
        setMessage(`${result.message} ❌`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting application ❌");
    }
  };

  return (
    <div className="career-form">
      <h2>Apply for a Career</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobileNo"
            required
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Job Category</label>
          <select
            name="jobCategory"
            required
            value={formData.jobCategory}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="IT">IT</option>
            <option value="guard">Guard</option>
            <option value="housekeeping">Housekeeping</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label>Upload Resume</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={handleFileChange}
          />
        </div>

        <button type="submit">Apply</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Career;
