import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    graduation: "",
    otherGraduation: "",
    profileType: "",
    carrierDetails: "",
    technology: "",
    resume: null,
  });

  const graduationOptions = [
    "BSc",
    "B.Com",
    "B.Tech",
    "MCA",
    "M.Tech",
    "Other",
  ];
  const technologyOptions = [
    "Node.js",
    "React.js",
    "Next js",
    "Java",
    "Python",
    "JavaScript",
    "C++",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGraduationChange = (e) => {
    setFormData({
      ...formData,
      graduation: e.target.value,
      otherGraduation: "",
    });
  };

  const handleTechnologyChange = (e) => {
    setFormData({ ...formData, technology: e.target.value });
  };

  const handleResumeUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-8  p-4 shadow-lg shadow-black font-mono">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none  focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Mobile No:</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Graduation:</label>
          <select
            name="graduation"
            value={formData.graduation}
            onChange={handleGraduationChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select</option>
            {graduationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formData.graduation === "Other" && (
            <input
              type="text"
              name="otherGraduation"
              value={formData.otherGraduation}
              onChange={handleChange}
              placeholder="Specify other"
              className="w-full mt-2 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          )}
        </div>
        <div>
          <label className="block mb-1">Profile Type:</label>
          <select
            name="profileType"
            value={formData.profileType}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Career Details:</label>
          <textarea
            name="carrierDetails"
            value={formData.carrierDetails}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div>
          <label className="block mb-1">Technology:</label>
          <select
            name="technology"
            value={formData.technology}
            onChange={handleTechnologyChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select</option>
            {technologyOptions.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1">Resume Upload:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
