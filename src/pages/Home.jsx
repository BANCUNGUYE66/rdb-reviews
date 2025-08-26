import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    { name: "Name Reservation", description: "Secure your business name efficiently.", color: "bg-orange-100" },
    { name: "Business Registration", description: "Register your new business quickly and easily.", color: "bg-green-100" },
    { name: "Add New Branch", description: "Expand your operations with a new branch.", color: "bg-purple-100" },
    { name: "Amendment", description: "Make changes to your existing business details.", color: "bg-rose-100" },
    { name: "Annual Return", description: "File your annual business returns.", color: "bg-red-100" },
    { name: "Good Standing", description: "Obtain a certificate of good standing.", color: "bg-blue-100" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] flex flex-col items-center justify-center text-white overflow-hidden bg-blue-900"
        style={{ backgroundImage: `url('/hero.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }}
      >
        {/* Logo at the top-left corner of the hero section */}
        <div className="absolute top-0 left-0 p-8 z-20">
            <img
                src="/rdb-logo.png"
                alt="RDB Logo"
                className="h-8 w-auto"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/32x32/fcd34d/1e3a8a?text=RDB" }}
            />
        </div>

        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
      </div>

      {/* Services Section */}
      <section className="container mx-auto p-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Services</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Click on a service below to leave your feedback and contribute to a better business environment.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                backgroundColor: '#fff3cd' // The color for bg-yellow-100
              }}
              className={`p-8 rounded-2xl shadow-md transition-all duration-300 cursor-pointer ${service.color}`}
            >
              <Link
                to={`/review/${encodeURIComponent(service.name)}`}
                className="text-xl font-semibold text-gray-800 block"
              >
                {service.name}
              </Link>
              <p className="text-gray-600 mt-2 text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
