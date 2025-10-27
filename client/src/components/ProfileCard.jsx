import { Link } from "react-router-dom";
import React from "react";
export default function ProfileCard({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 text-center">
      <img src={data.profileImage} alt={data.name} className="w-24 h-24 mx-auto rounded-full object-cover mb-3" />
      <h3 className="text-xl font-semibold">{data.name}</h3>
      <p className="text-gray-600">{data.title}</p>
      <div className="flex justify-center gap-2 flex-wrap my-2">
        {data.skills?.split(",").map((s, i) => (
          <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">{s.trim()}</span>
        ))}
      </div>
      <Link
        to={`/portfolio/${data.id}`}
        className="inline-block mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        View Portfolio
      </Link>
    </div>
  );
}
