import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

// ================== SAMPLE DATA ===================

// 1️⃣ DESTINATIONS
const destinations = [
  {
    id: "bali",
    title: "Bali, Indonesia",
    subtitle: "Beaches & Culture",
    price: 34999,
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop",
    description: "A tropical escape filled with beaches, temples, and local adventures."
  },
  {
    id: "swiss",
    title: "Swiss Alps",
    subtitle: "Mountains & Ski",
    price: 59999,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    description: "Experience beautiful snowy peaks, luxurious stays, and skiing adventures."
  },
  {
    id: "paris",
    title: "Paris, France",
    subtitle: "Romance & Art",
    price: 49999,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    description: "The city of love — Eiffel Tower views, cafés, museums and scenic tours."
  }
];

// 2️⃣ OFFERS
const offers = [
  {
    title: "Early Bird -10%",
    desc: "Book 60+ days in advance",
    color: "from-rose-400 to-red-500"
  },
  {
    title: "Family Pack",
    desc: "Kids travel free on select dates",
    color: "from-green-400 to-teal-400"
  },
  {
    title: "Weekend Getaways",
    desc: "Short trips under 3 days",
    color: "from-yellow-300 to-orange-400"
  }
];

// 3️⃣ TESTIMONIALS
const testimonials = [
  {
    name: "Priya R",
    text: "Best travel experience — WanderWay made our honeymoon perfect!",
    city: "Chennai"
  },
  {
    name: "Arjun M",
    text: "Seamless booking and excellent guides.",
    city: "Bengaluru"
  },
  {
    name: "Sara L",
    text: "Curated packages for family trips. Highly recommend!",
    city: "Mumbai"
  }
];

// 4️⃣ PACKAGES (linked to destinations)
const packages = [
  {
    id: "bali-basic",
    destination: "bali",
    title: "Bali 7-Day Explorer",
    days: 7,
    price: 34999,
    highlights: ["Beaches", "Waterfalls", "Temple tours"],
  },
  {
    id: "swiss-winter",
    destination: "swiss",
    title: "Swiss Alps Winter Experience",
    days: 5,
    price: 59999,
    highlights: ["Skiing", "Snow huts", "Mountain view hotels"],
  },
  {
    id: "paris-romantic",
    destination: "paris",
    title: "Paris Romantic Getaway",
    days: 6,
    price: 49999,
    highlights: ["Eiffel Tower", "City Cruise", "French cuisine"],
  }
];

// ================== SEED FUNCTION ===================

export async function seedAllData() {
  try {
    // DESTINATIONS
    for (let d of destinations) {
      await addDoc(collection(db, "destinations"), d);
      console.log("Destination added:", d.title);
    }

    // OFFERS
    for (let o of offers) {
      await addDoc(collection(db, "offers"), o);
      console.log("Offer added:", o.title);
    }

    // TESTIMONIALS
    for (let t of testimonials) {
      await addDoc(collection(db, "testimonials"), t);
      console.log("Testimonial added:", t.name);
    }

    // PACKAGES
    for (let p of packages) {
      await addDoc(collection(db, "packages"), p);
      console.log("Package added:", p.title);
    }

    alert("🔥 All data inserted successfully!");
  } catch (err) {
    console.error("Error inserting data:", err);
    alert("Error inserting data — check console.");
  }
}
