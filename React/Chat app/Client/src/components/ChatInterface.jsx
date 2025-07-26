import React from "react";

const ChatInterface = () => {
  return (
    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 border-r border-base-300 flex flex-col">
        <div className="p-4 font-bold text-xl border-b border-base-300">Conversations</div>
        <ul className="flex-1 overflow-y-auto">
          {/* Example users */}
          <li className="p-4 hover:bg-base-300 cursor-pointer">User 1</li>
          <li className="p-4 hover:bg-base-300 cursor-pointer">User 2</li>
        </ul>
      </aside>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between p-4 bg-base-100 border-b border-base-300">
          <div className="flex items-center gap-2">
            <div className="avatar online">
              <div className="w-8 rounded-full">
                <img src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" alt="User" />
              </div>
            </div>
            <span className="font-semibold">Current User</span>
          </div>
          <button className="btn btn-sm btn-outline">Logout</button>
        </header>
        {/* Messages */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Example messages */}
          <div className="chat chat-start">
            <div className="chat-bubble">Hello!</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">Hi there!</div>
          </div>
        </main>
        {/* Input Box */}
        <form className="p-4 flex gap-2 border-t border-base-300 bg-base-100">
          <input type="text" placeholder="Type a message..." className="input input-bordered flex-1" />
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
