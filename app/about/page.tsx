import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Content Section */}
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold mb-4 text-red-700">About Us</h2>
          <p className="text-lg mb-4">
            Trusthold Development Group is built on the foundations of trust and
            rooted in professional integrity. A private real-estate development
            firm, Trusthold invests in real-estate and develops high-end
            residential, commercial, and retail projects in Lebanon.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 lg:pl-8">
          <img src="/profile.jpg" alt="Image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default page;
