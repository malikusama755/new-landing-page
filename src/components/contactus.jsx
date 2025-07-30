import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="bg-gray-900 text-white py-2 rounded-lg shadow-lg w-full text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-2">Phone: <a href="tel:+923341111199" className="text-blue-400 hover:underline">+92 334 111 1199</a></p>
      <p className="mb-4">Email: <a href="mailto:contact@chakorventures.com" className="text-blue-400 hover:underline">contact@chakorventures.com</a></p>
      <p>Get full project details, floor plans, and payment options today.</p>
    </div>
  );
};

export default ContactUs;