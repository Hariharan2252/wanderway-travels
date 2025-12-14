import React from "react";
import { Link, useParams } from "react-router-dom";

export default function BookingSuccess() {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg">
        
        <h1 className="text-3xl font-bold text-green-700">🎉 Booking Confirmed!</h1>
        
        <p className="mt-4 text-gray-700">
          Your booking has been successfully recorded.
        </p>

        <p className="mt-2 font-semibold text-gray-900">
          Booking ID: <span className="text-indigo-600">{id}</span>
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}
