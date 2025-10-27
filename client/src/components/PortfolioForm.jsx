import React ,{ useState } from "react";
import { addPortfolio } from "../api/portfolioAPI";

export default function PortfolioForm({ template, onAdd }) {
  const [form, setForm] = useState({
    name: "",
    title: "",
    tagline: "",
    profileImage: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    socials: "",
    skills: "",
    service1: "",
    service2: "",
    service3: "",
    project1: "",
    project2: "",
    project3: "",
    testimonial: "",
    blogTitle: "",
    blogSummary: "",
    contactMsg: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPortfolio({ ...form, template });
    onAdd();
    alert("Portfolio created successfully!");
  };

  // Label to show selected template visually
  const themeLabel =
    template === "A" ? "Minimal Light Template" : "Dark Professional Template";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 mt-8 max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {themeLabel}
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Fill out your information to generate the portfolio.
      </p>

      {/* HERO SECTION */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Hero Section</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded-md"
          required
        />
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Role / Title (e.g. Web Developer)"
          className="border p-2 rounded-md"
          required
        />
        <input
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          placeholder="Short tagline (e.g. I build modern web apps)"
          className="border p-2 rounded-md col-span-2"
        />
        <input
          name="profileImage"
          value={form.profileImage}
          onChange={handleChange}
          placeholder="Profile Image URL"
          className="border p-2 rounded-md col-span-2"
          required
        />
      </div>

      {/* ABOUT ME */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">About Me</h3>
      <textarea
        name="bio"
        value={form.bio}
        onChange={handleChange}
        placeholder="Write a short bio"
        className="border p-2 rounded-md w-full mb-3"
        rows="4"
        required
      />

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded-md"
          required
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-2 rounded-md"
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded-md"
        />
        <input
          name="socials"
          value={form.socials}
          onChange={handleChange}
          placeholder="Social links (optional)"
          className="border p-2 rounded-md"
        />
      </div>

      {/* SKILLS */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Skills</h3>
      <input
        name="skills"
        value={form.skills}
        onChange={handleChange}
        placeholder="Comma-separated skills (e.g. React, Node.js, MongoDB)"
        className="border p-2 rounded-md w-full mb-4"
        required
      />

      {/* SERVICES (common for both templates) */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Services</h3>
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          name="service1"
          value={form.service1}
          onChange={handleChange}
          placeholder="Service 1"
          className="border p-2 rounded-md"
        />
        <input
          name="service2"
          value={form.service2}
          onChange={handleChange}
          placeholder="Service 2"
          className="border p-2 rounded-md"
        />
        <input
          name="service3"
          value={form.service3}
          onChange={handleChange}
          placeholder="Service 3"
          className="border p-2 rounded-md"
        />
      </div>

      {/* PROJECTS */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Projects</h3>
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        <input
          name="project1"
          value={form.project1}
          onChange={handleChange}
          placeholder="Project 1 Title"
          className="border p-2 rounded-md"
        />
        <input
          name="project2"
          value={form.project2}
          onChange={handleChange}
          placeholder="Project 2 Title"
          className="border p-2 rounded-md"
        />
        <input
          name="project3"
          value={form.project3}
          onChange={handleChange}
          placeholder="Project 3 Title"
          className="border p-2 rounded-md"
        />
      </div>

      {/* TEMPLATE-SPECIFIC SECTIONS */}
      {template === "B" && (
        <>
          <h3 className="text-lg font-semibold text-purple-600 mb-2">
            Blog Section (Dark Template only)
          </h3>
          <input
            name="blogTitle"
            value={form.blogTitle}
            onChange={handleChange}
            placeholder="Blog Title"
            className="border p-2 rounded-md w-full mb-3"
          />
          <textarea
            name="blogSummary"
            value={form.blogSummary}
            onChange={handleChange}
            placeholder="Blog Summary"
            className="border p-2 rounded-md w-full mb-4"
            rows="3"
          />
        </>
      )}

      {/* TESTIMONIAL */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">Testimonial</h3>
      <textarea
        name="testimonial"
        value={form.testimonial}
        onChange={handleChange}
        placeholder="Client testimonial or quote"
        className="border p-2 rounded-md w-full mb-4"
        rows="3"
      />

      {/* CONTACT SECTION */}
      <h3 className="text-lg font-semibold text-blue-600 mb-2">
        Contact Message
      </h3>
      <input
        name="contactMsg"
        value={form.contactMsg}
        onChange={handleChange}
        placeholder="Footer message (e.g. Let's work together!)"
        className="border p-2 rounded-md w-full mb-4"
      />

      {/* SUBMIT */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-xl hover:opacity-90 transition"
        >
          Save Portfolio
        </button>
      </div>
    </form>
  );
}
