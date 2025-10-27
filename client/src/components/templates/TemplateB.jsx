import React from "react";
export default function TemplateB({ data }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-[Inter]">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-700 to-purple-700 py-10 text-center shadow-md">
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-lg mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-200 text-lg mt-1">{data.title}</p>
        <p className="text-indigo-200 mt-2 max-w-xl mx-auto">{data.tagline}</p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-3 text-purple-400">About Me</h2>
        <p className="text-gray-300 leading-relaxed">{data.bio}</p>

        {/* Contact Info */}
        <div className="mt-6 text-sm text-gray-400 space-y-1">
          <p><b className="text-gray-200">📍 Location:</b> {data.location}</p>
          <p><b className="text-gray-200">📧 Email:</b> {data.email}</p>
          <p><b className="text-gray-200">📞 Phone:</b> {data.phone}</p>
          {data.socials && (
            <p>
              <b className="text-gray-200">🌐 Socials:</b> {data.socials}
            </p>
          )}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {data.skills?.split(",").map((skill, i) => (
            <span
              key={i}
              className="bg-gray-800 border border-purple-600 px-3 py-1 rounded-full text-sm hover:bg-purple-700 transition"
            >
              {skill.trim()}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[data.service1, data.service2, data.service3].map(
            (service, idx) =>
              service && (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-purple-500 transition"
                >
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">
                    Service {idx + 1}
                  </h3>
                  <p className="text-gray-300">{service}</p>
                </div>
              )
          )}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[data.project1, data.project2, data.project3].map(
            (project, idx) =>
              project && (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition"
                >
                  <img
                    src={`https://picsum.photos/400?random=${idx + 1}`}
                    alt="project"
                    className="w-full h-36 object-cover rounded-md mb-3"
                  />
                  <h4 className="text-lg font-semibold text-purple-300">
                    {project}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">
                    A sample project description for {project}.
                  </p>
                </div>
              )
          )}
        </div>
      </section>

      {/* Testimonials */}
      {data.testimonial && (
        <section className="max-w-3xl mx-auto mt-16 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Testimonial
          </h2>
          <blockquote className="italic text-gray-300 border-l-4 border-purple-500 pl-4">
            "{data.testimonial}"
          </blockquote>
        </section>
      )}

      {/* Contact / Footer */}
      <footer className="mt-16 bg-gray-800 py-6 text-center">
        <h3 className="text-lg font-semibold text-purple-300">Contact Me</h3>
        <p className="text-gray-400">{data.contactMsg || "Let's connect!"}</p>
        <p className="mt-2 text-sm text-gray-500">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
