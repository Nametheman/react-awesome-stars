import { useState } from "react";
import { StarRating } from "../../src/StarRating";
import "../../src/StarRating.css";

export default function App() {
  const [rating1, setRating1] = useState(3.5);
  const [rating2, setRating2] = useState(2);
  const [rating3, setRating3] = useState(4);

  return (
    <div
      style={{
        padding: 32,
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Star Rating Examples</h2>

      {/* Basic Interactive */}
      <section style={{ marginBottom: 32 }}>
        <h3>1. Basic Interactive</h3>
        <StarRating rating={rating1} onRatingChange={setRating1} showRating />
        <p style={{ marginTop: 8 }}>Current rating: {rating1}</p>
      </section>

      {/* Half-Star Support */}
      <section style={{ marginBottom: 32 }}>
        <h3>2. Half-Star Support</h3>
        <StarRating
          rating={rating1}
          onRatingChange={setRating1}
          allowHalf
          showRating
        />
        <p style={{ marginTop: 8 }}>Try selecting a half star!</p>
      </section>

      {/* Read-Only Display */}
      <section style={{ marginBottom: 32 }}>
        <h3>3. Read-Only Display</h3>
        <StarRating rating={4.5} interactive={false} showRating allowHalf />
        <p style={{ marginTop: 8 }}>This is a read-only rating.</p>
      </section>

      {/* Custom Colors */}
      <section style={{ marginBottom: 32 }}>
        <h3>4. Custom Colors</h3>
        <StarRating
          rating={rating2}
          onRatingChange={setRating2}
          fillColor="#ff6b6b"
          emptyColor="#f8f9fa"
          hoverColor="#ff5252"
          showRating
        />
        <p style={{ marginTop: 8 }}>Custom color scheme.</p>
      </section>

      {/* Large Size with Tooltips */}
      <section style={{ marginBottom: 32 }}>
        <h3>5. Large Size with Tooltips</h3>
        <StarRating
          rating={rating3}
          onRatingChange={setRating3}
          size="xl"
          showTooltip
          tooltipLabels={["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
          allowHalf
          showRating
        />
        <p style={{ marginTop: 8 }}>Hover to see tooltips.</p>
      </section>

      {/* Disabled State */}
      <section style={{ marginBottom: 32 }}>
        <h3>6. Disabled State</h3>
        <StarRating rating={3} disabled showRating />
        <p style={{ marginTop: 8 }}>This rating is disabled.</p>
      </section>
    </div>
  );
}
