import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  "Name Reservation",
  "Business Registration",
  "Add New Branch",
  "Amendment",
  "Annual Return",
  "Good Standing",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-gray-900">
        <img
          src="/hero.jpg"
          alt="RDB Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to RDB Services Review
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Share your feedback and help us improve Rwanda’s business services.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Link
                to={`/review/${encodeURIComponent(service)}`}
                className="text-lg font-semibold text-blue-700 hover:underline"
              >
                {service}
              </Link>
              <p className="text-gray-500 mt-2 text-sm">
                Leave a review and share your experience with {service}.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
