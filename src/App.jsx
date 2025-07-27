import React, { useState } from "react";

const mockProfiles = [
  { id: 1, name: "Alice", bio: "AI Enthusiast" },
  { id: 2, name: "Bob", bio: "Blockchain Investor" },
];

function App() {
  const [profiles, setProfiles] = useState(mockProfiles);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Tinder Swipe Mock</h2>
      {profiles.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <p>{p.bio}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
