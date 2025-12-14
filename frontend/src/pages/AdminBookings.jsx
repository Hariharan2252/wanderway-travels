import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadBookings() {
    const snap = await getDocs(collection(db, "bookings"));
    setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    setLoading(false);
  }

  useEffect(() => {
    loadBookings();
  }, []);

  async function removeBooking(id) {
    await deleteDoc(doc(db, "bookings", id));
    loadBookings();
  }

  async function updateStatus(id, status) {
    await updateDoc(doc(db, "bookings", id), { status });
    loadBookings();
  }

  if (loading) return <div className="p-10 text-center">Loading bookings...</div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Admin: All Bookings</h1>

      <div className="space-y-6">
        {bookings.map((b) => (
          <div key={b.id} className="p-6 bg-white rounded-xl shadow border">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-lg">{b.packageTitle}</p>
                <p className="text-sm text-gray-600">Travelers: {b.travelers}</p>
                <p className="text-sm text-gray-600">Date: {b.date}</p>
                <p className="font-semibold text-indigo-600">
                  Total: ₹{b.totalPrice?.toLocaleString()}
                </p>
                <p className="mt-2 text-gray-800">Name: {b.name}</p>
                <p className="text-gray-500">{b.email}</p>
                <p className="text-gray-500">{b.phone}</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => updateStatus(b.id, "approved")}
                  className="px-4 py-2 rounded bg-green-600 text-white"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(b.id, "pending")}
                  className="px-4 py-2 rounded bg-yellow-500 text-white"
                >
                  Mark Pending
                </button>

                <button
                  onClick={() => removeBooking(b.id)}
                  className="px-4 py-2 rounded bg-red-600 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
