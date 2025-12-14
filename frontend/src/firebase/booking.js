import { db } from "./firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export const createBooking = async (bookingData) => {
  try {
    const ref = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: Timestamp.now()
    });

    return { success: true, id: ref.id };
  } catch (err) {
    return { success: false, error: err.message };
  }
};
