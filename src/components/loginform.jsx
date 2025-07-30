import React from "react";

const LoginForm = () => {
  return (
    <form className="bg-white shadow-md rounded px-6 pt-4 pb-6 w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="border rounded w-full py-1.5 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input
          className="border rounded w-full py-1.5 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
