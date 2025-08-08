import { useState } from "react";
import QRCode from "react-qr-code";
import { toast, Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function SupportMe() {
  const [amount, setAmount] = useState(5);
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState("usdt");
  const [isLoading, setIsLoading] = useState(false);
  const [isThankYou, setIsThankYou] = useState(false);
  const [usdtNetwork, setUsdtNetwork] = useState("TRC20");

  const addresses = {
    usdt: {
      TRC20: "TSxhEVNKRtkBpD2byEC5pbxAudg7HiojpC",
      ERC20: "0x682d86b2015f113f1f2a8b177a7e272f46909265",
      BEP20: "0x682d86b2015f113f1f2a8b177a7e272f46909265",
    },
  };

  const getSelectedAddress = () => {
    return addresses.usdt[usdtNetwork];
  };

  const handleCopy = () => {
    const selectedAddress = getSelectedAddress();
    navigator.clipboard.writeText(selectedAddress);
    toast.success(
      <div>
        <p className="font-semibold text-white">
          ✅ {usdtNetwork} Address Copied:
        </p>
        <p className="mt-1 text-sm break-all text-white">{selectedAddress}</p>
      </div>,
      {
        duration: 4000,
        style: {
          background: "#10B981",
          color: "#fff",
          padding: "16px",
          borderRadius: "12px",
          fontSize: "14px",
        },
      }
    );
  };

  const handleSupport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsThankYou(true);
    }, 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {!isThankYou ? (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-2xl border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            ☕ Support My Work
          </h2>
          <p className="text-sm text-gray-600 text-center mb-6">
            Choose a USDT network below and send your support ❤️
          </p>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose an Amount
            </label>
            <div className="flex gap-3 flex-wrap">
              {[3, 5, 10].map((amt) => (
                <motion.button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    amount === amt
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ${amt}
                </motion.button>
              ))}
              <input
                type="number"
                min={1}
                className="w-24 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Custom"
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
          </div>

          {/* USDT Network Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              USDT Network
            </label>
            <select
              value={usdtNetwork}
              onChange={(e) => setUsdtNetwork(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white"
            >
              <option value="TRC20">TRC20 (Tron)</option>
              <option value="ERC20">ERC20 (Ethereum)</option>
              <option value="BEP20">BEP20 (Binance Smart Chain)</option>
            </select>
          </div>

          {/* QR Code & Copy */}
          <motion.div
            key={usdtNetwork}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <div className="p-4 bg-white rounded-2xl shadow-md">
              <QRCode value={getSelectedAddress()} size={160} />
            </div>
            <p className="text-gray-600 text-sm font-mono text-center break-all px-4">
              {getSelectedAddress()}
            </p>
            <motion.button
              onClick={handleCopy}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Copy Address
            </motion.button>
          </motion.div>

          {/* How to Send USDT */}
          <div className="bg-yellow-50 text-yellow-800 border border-yellow-200 p-4 rounded-xl text-sm mb-6">
            <strong>How to Send USDT:</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Open Binance or Trust Wallet.</li>
              <li>Go to <b>Send</b>, select <b>USDT</b>.</li>
              <li>Choose network: <b>{usdtNetwork}</b>.</li>
              <li>Paste the copied address.</li>
              <li>Enter ${amount} and confirm.</li>
            </ul>
          </div>

          {/* Optional Message */}
          <textarea
            className="w-full p-4 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6 resize-none"
            placeholder="Leave a kind message (optional)"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Submit Button */}
          <motion.button
            disabled={isLoading}
            onClick={handleSupport}
            whileHover={{ scale: isLoading ? 1 : 1.05 }}
            whileTap={{ scale: isLoading ? 1 : 0.95 }}
            className={`w-full py-3 text-white rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
            }`}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Processing...
              </>
            ) : (
              `I Have Sent $${amount}`
            )}
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          key="thankyou"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center p-10 rounded-3xl shadow-xl bg-white border border-gray-100 min-h-screen mt-12"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h2>
          <p className="text-gray-700 text-sm mb-4">
            Your support means a lot. You've just helped me keep building awesome things!
          </p>
          <p className="text-gray-500 text-xs mt-2">My Personal Email: abdullahluqmanbro9@gmail.com</p>
        </motion.div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </AnimatePresence>
  );
}
