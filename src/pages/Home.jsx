import { Link } from "react-router-dom";

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
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to RDB Services Review</h1>
      <p className="mb-6 text-gray-600">
        Choose a service below to leave your review.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Link
            key={index}
            to={`/review/${encodeURIComponent(service)}`}
            className="bg-blue-500 text-white p-6 rounded-2xl shadow hover:bg-blue-600 transition"
          >
            {service}
          </Link>
        ))}
      </div>
    </div>
  );
}
