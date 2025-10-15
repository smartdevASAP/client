import { useState } from "react";
import { Bell, Lock, Moon, User, Trash2, LogOut } from "lucide-react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);

  const handleLogout = () => {
    alert("You have been logged out!");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmDelete) alert("Account deleted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-700">Settings</h1>

      {/* Account Section */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <User size={18} /> Account
        </h2>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Private Account</span>
          <input
            type="checkbox"
            checked={privateAccount}
            onChange={() => setPrivateAccount(!privateAccount)}
            className="toggle-checkbox"
          />
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Change Password</span>
          <button className="text-blue-500 text-sm hover:underline">
            Update
          </button>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Email</span>
          <button className="text-blue-500 text-sm hover:underline">
            Edit
          </button>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Bell size={18} /> Notifications
        </h2>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">Push Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="toggle-checkbox"
          />
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Email Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="toggle-checkbox"
          />
        </div>
      </section>

      {/* App Preferences Section */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Moon size={18} /> App Preferences
        </h2>

        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="toggle-checkbox"
          />
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Lock size={18} /> Security
        </h2>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">
            Two-Factor Authentication
          </span>
          <button className="text-blue-500 text-sm hover:underline">
            Enable
          </button>
        </div>

        <div className="flex justify-between items-center py-2">
          <span className="text-sm text-gray-600">Device Management</span>
          <button className="text-blue-500 text-sm hover:underline">
            View
          </button>
        </div>
      </section>

      {/* Danger Zone */}
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <h2 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
          Danger Zone
        </h2>

        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600"
          >
            <LogOut size={16} /> Log Out
          </button>
        </div>

        <div className="flex justify-between items-center py-2">
          <button
            onClick={handleDeleteAccount}
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
          >
            <Trash2 size={16} /> Delete Account
          </button>
        </div>
      </section>
    </div>
  );
}
