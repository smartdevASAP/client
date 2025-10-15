import { useState } from "react";
import { Send, Search, MessageSquare } from "lucide-react";

type User = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  messages: { from: string; text: string; time: string }[];
};

const mockUsers: User[] = [
  {
    id: 1,
    name: "Ava Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Hey, how’s the project going?",
    time: "10:24 AM",
    messages: [
      { from: "them", text: "Hey, how’s the project going?", time: "10:24 AM" },
      {
        from: "me",
        text: "Going great! Just polishing the UI ✨",
        time: "10:26 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Liam Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Can you send the file?",
    time: "9:15 AM",
    messages: [
      { from: "them", text: "Can you send the file?", time: "9:15 AM" },
      { from: "me", text: "Yup, sending in a sec!", time: "9:16 AM" },
    ],
  },
  {
    id: 3,
    name: "Sophia Lee",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "That’s awesome 😄",
    time: "Yesterday",
    messages: [
      { from: "me", text: "Just shipped the update!", time: "Yesterday" },
      { from: "them", text: "That’s awesome 😄", time: "Yesterday" },
    ],
  },
];

export default function Chats() {
  const [selectedUser, setSelectedUser] = useState<User | null>(mockUsers[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim() || !selectedUser) return;
    const updated = { ...selectedUser };
    updated.messages.push({ from: "me", text: newMessage, time: "Now" });
    setSelectedUser(updated);
    setNewMessage("");
  };

  return (
    <div className="flex h-[85vh] bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Users Sidebar */}
      <div className="hidden md:flex flex-col w-1/3 border-r border-gray-100">
        <div className="p-3 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-700">Chats</h2>
          <Search className="text-gray-400" size={18} />
        </div>

        <div className="overflow-y-auto">
          {mockUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition ${
                selectedUser?.id === user.id ? "bg-blue-50" : ""
              }`}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-800 text-sm">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">
                  {user.lastMessage}
                </p>
              </div>
              <span className="text-[10px] text-gray-400">{user.time}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-3 border-b border-gray-100">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-800 text-sm">
                  {selectedUser.name}
                </h2>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {selectedUser.messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                      msg.from === "me"
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-white border border-gray-200 text-gray-700 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                    <div className="text-[10px] mt-1 text-gray-300 text-right">
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-gray-100 flex items-center gap-2 bg-white">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
              >
                <Send size={16} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-full text-gray-400">
            <MessageSquare size={40} className="mb-2" />
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}
