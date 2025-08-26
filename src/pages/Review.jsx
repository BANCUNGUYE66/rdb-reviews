import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Review() {
  const { service } = useParams();
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{decodeURIComponent(service)} Review</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            rows="5"
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold">✅ Thank you for your review!</p>
      )}
    </div>
  );
}
