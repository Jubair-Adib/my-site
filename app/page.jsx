"use client";

import { useState } from "react";

export default function SalamiPage() {
  const correctPassword = "CSEDU";

  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
  ];

  const messages = [
    "Childhood Version of Jubair Ahammad Akter 🧒",
    "This cute little boy wants Salami this year. 💖",
    "He will pray for you with all his heart. 🤲",
    "A little Salami will make him very happy. 😊",
    "These precious childhood moments were captured by his beloved mom. 📸❤️",
    "Every photo holds love, care, and beautiful memories. ✨",
    "Eid Mubarak to all of you. 🎉",
    "Thanks for your time. Bye bye from the cute boy! 👋",
  ];

  const handleUnlock = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Wrong password. Try again.");
    }
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-yellow-100 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-pink-200">
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-3">
            Salami Secret Gate 🔐
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Enter the password to see the cute surprise.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-2xl transition"
            >
              Unlock
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-center mt-4 font-medium">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-200">
          <div className="p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-4">
              This cute little boy wants Salami this year. 💖
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              A small request with a lot of cuteness, love, and childhood memories.
            </p>

            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={prevImage}
                className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200"
              >
                ⬅ Prev
              </button>

              <div className="w-full max-w-md bg-pink-50 rounded-3xl p-4 shadow-inner">
                <img
                  src={images[currentImage]}
                  alt={`Young Jubair ${currentImage + 1}`}
                  className="w-full h-[420px] object-cover rounded-2xl"
                />
              </div>

              <button
                onClick={nextImage}
                className="px-4 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200"
              >
                Next ➡
              </button>
            </div>

            <div className="mb-8 space-y-2">
              <p className="text-sm text-gray-500">
                Photo {currentImage + 1} of {images.length}
              </p>
              <p className="text-base text-pink-600 font-medium">
                Captured with love by my beloved mom. 💕
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-2xl p-5 text-gray-800 font-medium shadow"
                >
                  {msg}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl">
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                Bkash Number (Send Money)
              </h2>
              <p className="text-3xl font-extrabold text-green-800 tracking-wide">
                01791569553
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-lg text-gray-700 font-medium">
                Thanks for your time. Bye bye from the cute boy! 👋💙
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 max-w-xl mx-auto">
                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Developer Details
                </h3>
                <p className="text-gray-800 font-medium">
                  Developed by: Jubair Ahammad Akter
                </p>
                <p className="text-gray-600">Project: Salami Asking Website</p>
                <p className="text-gray-600">
                  Made with love, memories, and a cute childhood story. 💙
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}