import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Family Task Tracker</h1>
      <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded">
        Parent Login
      </Link>
    </div>
  );
}
