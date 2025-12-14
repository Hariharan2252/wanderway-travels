import React, { useEffect, useState } from "react";
import { auth, logoutUser } from "../firebase/auth";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUser(u));
    return () => unsub();
  }, []);

  if (!user)
    return (
      <div className="p-10 text-center text-gray-600">
        Please login first.
      </div>
    );

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow rounded-xl mt-12">
      <h1 className="text-3xl font-bold">Your Profile</h1>

      <p className="mt-4">
        <strong>Email:</strong> {user.email}
      </p>

      <button
        onClick={logoutUser}
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
