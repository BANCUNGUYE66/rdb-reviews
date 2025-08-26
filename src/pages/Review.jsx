import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Review() {
  const { service } = useParams();
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the review to a database here
    setSubmitted(true);
  };

  return (
    <motion.div
      className="max-w-xl mx-auto p-8 my-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center text-gray-900"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Review for: <span className="text-blue-600">{decodeURIComponent(service)}</span>
      </motion.h2>

      <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="comment" className="block text-lg font-medium text-gray-700 mb-2">
                Your Feedback
              </label>
              <textarea
                id="comment"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-y"
                rows="6"
                placeholder="Write your constructive feedback here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Review
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl text-green-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big mx-auto"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Review Submitted!</h3>
            <p className="text-gray-600 mt-2">Thank you for your valuable feedback. It helps us improve our services.</p>
            <Link to="/" className="inline-block mt-6 text-blue-600 hover:text-blue-800 transition-colors duration-200">
              Go back to Home
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
