import React, { useState } from "react";
import { StarRating } from "../src/StarRating";

function App() {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(3.5);
  const [rating3, setRating3] = useState(4);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        React Star Rating Component Demo
      </h1>

      <div className="space-y-8">
        {/* Basic Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Basic Interactive Rating
          </h2>
          <StarRating
            rating={rating1}
            onRatingChange={setRating1}
            maxRating={5}
          />
          <p className="mt-2 text-gray-600">Current rating: {rating1}</p>
        </div>

        {/* Advanced Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Advanced Features</h2>
          <StarRating
            rating={rating2}
            onRatingChange={setRating2}
            maxRating={5}
            size="lg"
            fillColor="#ffd700"
            emptyColor="#e5e7eb"
            hoverColor="#fbbf24"
            allowHalf={true}
            showRating={true}
            showTooltip={true}
            tooltipLabels={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
            animationDuration={200}
          />
          <p className="mt-2 text-gray-600">Current rating: {rating2}</p>
        </div>

        {/* Read-only Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Read-only Display</h2>
          <StarRating
            rating={rating3}
            interactive={false}
            showRating={true}
            allowHalf={true}
            size="xl"
          />
        </div>

        {/* Custom Colors Example */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Custom Colors</h2>
          <StarRating
            rating={3}
            fillColor="#ff6b6b"
            emptyColor="#f8f9fa"
            hoverColor="#ff5252"
            size="lg"
            showRating={true}
          />
        </div>

        {/* Different Sizes */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Different Sizes</h2>
          <div className="space-y-4">
            <div>
              <span className="inline-block w-16 text-sm">Extra Small:</span>
              <StarRating rating={4} size="xs" />
            </div>
            <div>
              <span className="inline-block w-16 text-sm">Small:</span>
              <StarRating rating={4} size="sm" />
            </div>
            <div>
              <span className="inline-block w-16 text-sm">Medium:</span>
              <StarRating rating={4} size="md" />
            </div>
            <div>
              <span className="inline-block w-16 text-sm">Large:</span>
              <StarRating rating={4} size="lg" />
            </div>
            <div>
              <span className="inline-block w-16 text-sm">Extra Large:</span>
              <StarRating rating={4} size="xl" />
            </div>
            <div>
              <span className="inline-block w-16 text-sm">Custom (48px):</span>
              <StarRating rating={4} size={48} />
            </div>
          </div>
        </div>

        {/* Disabled State */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
          <StarRating rating={4} disabled={true} showRating={true} size="lg" />
        </div>
      </div>
    </div>
  );
}

export default App;
