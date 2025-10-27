import React from "react";
export default function TemplateA({ data }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 font-[Inter]">
      {/* ---------- HERO ---------- */}
      <header className="text-center py-16 px-6">
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
        />
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-blue-600 text-lg mt-1">{data.title}</p>
        {data.tagline && (
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">{data.tagline}</p>
        )}
      </header>

      {/* ---------- ABOUT ---------- */}
      <section className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-sm rounded-2xl">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">About Me</h2>
        <p className="text-gray-700 leading-relaxed">{data.bio}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
          <p><b>Email:</b> {data.email}</p>
          <p><b>Phone:</b> {data.phone}</p>
          <p><b>Location:</b> {data.location}</p>
          {data.socials && <p><b>Socials:</b> {data.socials}</p>}
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section className="max-w-4xl mx-auto mt-10 px-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {data.skills?.split(",").map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[data.service1, data.service2, data.service3].map(
            (srv, idx) =>
              srv && (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">
                    Service {idx + 1}
                  </h3>
                  <p className="text-gray-700">{srv}</p>
                </div>
              )
          )}
        </div>
      </section>

      {/* ---------- PROJECTS ---------- */}
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[data.project1, data.project2, data.project3].map(
            (project, idx) =>
              project && (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition"
                >
                  <img
                    src={`https://picsum.photos/seed/${idx + 1}/400/250`}
                    alt="project"
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-semibold text-gray-800 mb-1">
                    {project}
                  </h4>
                  <p className="text-sm text-gray-600">
                    A sample project called {project} showcasing my skills.
                  </p>
                </div>
              )
          )}
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      {data.testimonial && (
        <section className="max-w-3xl mx-auto mt-16 px-6 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Testimonial
          </h2>
          <blockquote className="italic text-gray-700 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg">
            "{data.testimonial}"
          </blockquote>
        </section>
      )}

      {/* ---------- CONTACT / FOOTER ---------- */}
      <footer className="mt-16 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-8">
        <h3 className="text-lg font-semibold">Get In Touch</h3>
        <p className="text-sm mt-1">{data.contactMsg || "Let’s work together!"}</p>
        <p className="mt-3 text-xs opacity-80">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

