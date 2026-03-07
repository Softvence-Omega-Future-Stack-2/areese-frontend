import React, { useState } from "react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email!");
    alert(`Subscribed with ${email}`);
    setEmail("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">DON'T FORGET</h2>
        <p className="flex items-center font-semibold text-center mb-2">
          <span className="mr-2 text-green-500">✓</span>
          DON'T FORGET TO SIGN UP NOW
        </p>

        <p className="text-center text-gray-600 mb-4">
          Stay updated with our latest features and never miss important
          updates!
        </p>

        <div className="flex rounded-lg overflow-hidden border border-border">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="bg-today-accent hover:bg-late-accent text-white px-4 py-3 font-semibold cursor-pointer transition-all"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
