import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-[350px]"
      >
        <h1 className="text-3xl font-semibold text-white text-center mb-6">
          Admin Login
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <p className="text-red-500 text-sm text-center hidden">
            {/* Error message placeholder */}
          </p>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all duration-200"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}
