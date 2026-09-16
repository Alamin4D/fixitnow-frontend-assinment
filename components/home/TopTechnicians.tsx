import React from 'react'
// ... your other imports (Card, Avatar, Button, etc.)

// 1️⃣ Declare the structure of the technician prop
interface TechnicianCardProps {
  technician: {
    location: string;
    rating: number;
    user: {
      name: string;
    };
    // add experience, price or any other fields if you are passing them directly
    experience?: string;
    price?: number;
  };
}

// 2️⃣ Assign the Props interface to the component function and destructure it
export default function TechnicianCard({ technician }: TechnicianCardProps) {
  return (
    // Now you can safely use the `technician` object inside your JSX!
    <div className="border p-4 rounded-xl">
      <h3>{technician.user.name}</h3>
      <p>{technician.location}</p>
      <span>⭐ {technician.rating}</span>
    </div>
  );
}
