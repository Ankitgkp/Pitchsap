import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Send, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Chat() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [inputText, setInputText] = useState("");
  const ws = useRef(null);
  const scrollRef = useRef(null);

  const currentUserId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://pitchsapapi.1forge.in/api/users");
        setUsers(res.data.filter(u => u._id !== currentUserId));
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();

    const connectWS = () => {
      if (ws.current?.readyState === WebSocket.OPEN) return;

      ws.current = new WebSocket("wss://pitchsapapi.1forge.in");

      ws.current.onopen = () => {
        ws.current.send(JSON.stringify({ type: "auth", userId: currentUserId }));
      };

      ws.current.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.from) {
          setMessages(prev => ({
            ...prev,
            [data.from]: [...(prev[data.from] || []), { text: data.text, sentByMe: false }]
          }));
        }
      };

      ws.current.onclose = () => {
        setTimeout(connectWS, 3000);
      };
    };

    connectWS();

    return () => {
      if (ws.current) {
        ws.current.onclose = null;
        ws.current.close();
      }
    };
  }, [currentUserId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedUser]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!selectedUser || !currentUserId) return;
      try {
        const res = await axios.get(`https://pitchsapapi.1forge.in/api/messages/${currentUserId}/${selectedUser._id}`);
        const historicalMessages = res.data.map(m => ({
          text: m.text,
          sentByMe: m.sender === currentUserId
        }));
        setMessages(prev => ({
          ...prev,
          [selectedUser._id]: historicalMessages
        }));
      } catch (err) {
        console.error("Failed to fetch history", err);
      }
    };
    fetchHistory();
  }, [selectedUser, currentUserId]);

  const sendMessage = () => {
    if (!inputText.trim() || !selectedUser) return;
    if (ws.current?.readyState !== WebSocket.OPEN) return;

    ws.current.send(JSON.stringify({ type: "message", to: selectedUser._id, text: inputText }));

    setMessages(prev => ({
      ...prev,
      [selectedUser._id]: [...(prev[selectedUser._id] || []), { text: inputText, sentByMe: true }]
    }));

    setInputText("");
  };

  return (
    <main className="bg-bg text-white h-screen flex overflow-hidden">

      {/* Sidebar */}
      <div className={`
        flex flex-col w-full md:w-80
        border-r border-white/10 bg-white/5
        ${selectedUser ? "hidden md:flex" : "flex"}
      `}>
        <div className="p-5 border-b border-white/10">
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Conversations
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {users.map(user => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`w-full p-4 flex items-center gap-3 transition-colors hover:bg-white/10 ${
                selectedUser?._id === user._id
                  ? "bg-white/10 border-l-4 border-primary"
                  : "border-l-4 border-transparent"
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold shrink-0">
                {user.email[0].toUpperCase()}
              </div>
              <p className="text-sm font-medium truncate text-left">{user.email}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className={`
        flex-1 flex flex-col bg-bg
        ${selectedUser ? "flex" : "hidden md:flex"}
      `}>
        {selectedUser ? (
          <>
            {/* Header with back button on mobile */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
              <button
                className="md:hidden text-zinc-400 hover:text-white mr-1"
                onClick={() => setSelectedUser(null)}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                {selectedUser.email[0].toUpperCase()}
              </div>
              <h3 className="font-medium truncate">{selectedUser.email}</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {(messages[selectedUser._id] || []).map((msg, i) => (
                <div key={i} className={`flex ${msg.sentByMe ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] md:max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                    msg.sentByMe
                      ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10"
                      : "bg-white/10 text-white rounded-tl-none border border-white/10"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={scrollRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <Input
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                  className="bg-white/5 border-white/10 focus:border-primary text-sm"
                />
                <Button onClick={sendMessage} className="bg-primary hover:bg-primary/90 px-4 shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 hidden md:flex items-center justify-center text-zinc-600 text-sm">
            Select a conversation
          </div>
        )}
      </div>
    </main>
  );
}
