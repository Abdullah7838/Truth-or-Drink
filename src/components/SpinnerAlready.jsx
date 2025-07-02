import React, { useState, useRef, useEffect } from "react";
import { CirclePlus, RotateCw, CircleX, Pin } from "lucide-react";

const SpinnerAlready = () => {
  const [items, setItems] = useState([
    "10 pushups",
    "Take a shot",
    "What's your secret?",
    "Drink water",
    "Tell a crush name",
    "Dance for 10 sec",
    "Say a lie you told",
    "Sip your drink",
    "Embarrassing moment?",
    "Take s aip 🥃",
  ]);
  const [inputValue, setInputValue] = useState(items);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const wheelRef = useRef(null);
  const canvasRef = useRef(null);

  // Modern gradient colors for wheel slices
  const solidColors = [
    "#667eea",
    "#f5576c",
    "#00f2fe",
    "#38f9d7",
    "#fee140",
    "#fed6e3",
    "#fecfef",
    "#fcb69f",
    "#ffab91",
    "#aed581",
  ];

  const showToastMessage = (title, description, type = "default") => {
    setShowToast({ title, description, type });
    setTimeout(() => setShowToast(null), 3000);
  };

  const addItem = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      showToastMessage(
        "Invalid Input",
        "Please enter a valid challenge item.",
        "error"
      );
      return;
    }
    if (items.includes(trimmedValue)) {
      showToastMessage(
        "Duplicate Item",
        "This challenge already exists in your wheel.",
        "error"
      );
      return;
    }
    if (items.length >= 10) {
      showToastMessage(
        "Maximum Reached",
        "You can only have up to 10 challenges on the wheel.",
        "error"
      );
      return;
    }
    setItems([...items, trimmedValue]);
    setInputValue("");
    showToastMessage(
      "Challenge Added!",
      `"${trimmedValue}" has been added to your spinner wheel.`
    );
  };

  const removeItem = (index) => {
    if (items.length <= 2) {
      showToastMessage(
        "Cannot Remove",
        "You need at least 2 items to spin the wheel.",
        "error"
      );
      return;
    }
    const removedItem = items[index];
    setItems(items.filter((_, i) => i !== index));
    showToastMessage(
      "Challenge Removed",
      `"${removedItem}" has been removed from your wheel.`
    );
  };

  const spin = () => {
    if (items.length < 2 || isSpinning) return;
    setIsSpinning(true);
    setSelectedItem(null);
    setShowConfetti(false);

    // Calculate the angle for each slice
    const sliceAngle = 360 / items.length;

    // Generate random spins between 5-10 full rotations
    const minSpins = 5;
    const maxSpins = 10;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const baseRotation = spins * 360;

    // Add random offset within a slice for more randomness
    const randomOffset = Math.random() * sliceAngle;
    const totalRotation = baseRotation + randomOffset;

    // Calculate final rotation from current position
    const finalRotation = currentRotation + totalRotation;

    // Determine which item will be selected based on final rotation
    // The pointer is at the top, so we need to calculate which slice it points to
    const normalizedRotation = (360 - (finalRotation % 360)) % 360;
    const selectedIndex =
      Math.floor(normalizedRotation / sliceAngle) % items.length;

    console.log("Spin calculation:", {
      sliceAngle,
      totalRotation,
      finalRotation,
      normalizedRotation,
      selectedIndex,
      selectedItem: items[selectedIndex],
    });

    wheelRef.current.style.transition =
      "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
    wheelRef.current.style.transform = `rotate(${finalRotation}deg)`;

    setCurrentRotation(finalRotation);

    showToastMessage("🎲 Spinning...", "Let's see what challenge awaits you!");

    setTimeout(() => {
      const winningItem = items[selectedIndex];
      setSelectedItem(winningItem);
      setIsSpinning(false);
      setShowConfetti(true);

      showToastMessage(
        "🎉 Challenge Selected!",
        `Your challenge is: ${winningItem}`
      );
      setTimeout(() => setShowConfetti(false), 3000);
    }, 4000);
  };

  const drawWheel = () => {
    const canvas = canvasRef.current;
    if (!canvas || items.length === 0) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 20;
    const sliceAngle = (2 * Math.PI) / items.length;

    ctx.clearRect(0, 0, width, height);

    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 10;

    items.forEach((item, i) => {
      // Start from top (12 o'clock position) by subtracting PI/2
      const startAngle = i * sliceAngle - Math.PI / 2;
      const endAngle = (i + 1) * sliceAngle - Math.PI / 2;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.fillStyle = solidColors[i % solidColors.length];
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.shadowColor = "transparent";

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 16px Inter, system-ui, sans-serif";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      const maxWidth = radius - 30;
      const words = item.split(" ");
      if (words.length > 1 && ctx.measureText(item).width > maxWidth) {
        words.forEach((word, index) => {
          ctx.fillText(word, radius - 15, index * 20 - (words.length - 1) * 10);
        });
      } else {
        ctx.fillText(item, radius - 15, 0);
      }
      ctx.restore();
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "#667eea";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.stroke();
  };

  useEffect(() => {
    drawWheel();
  }, [items]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md transition-all duration-300 ${
            showToast.type === "error"
              ? "bg-red-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          <div className="font-semibold">{showToast.title}</div>
          <div className="text-sm opacity-90">{showToast.description}</div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400 to-cyan-600 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl w-full space-y-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
            🎯 Challenge Spinner
          </h1>
          <p className="text-xl text-white/80 font-medium">
            Add your challenges and let fate decide your next adventure!
          </p>
        </div>

        {/* Input Section */}

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Wheel Section */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div
                  ref={wheelRef}
                  className="w-full h-full rounded-full shadow-2xl overflow-hidden transform transition-transform"
                  style={{ transform: `rotate(${currentRotation}deg)` }}
                >
                  <canvas
                    ref={canvasRef}
                    width={384}
                    height={384}
                    className="w-full h-full rounded-full"
                  />
                </div>

                {/* Pin Bar with Spinner Icon */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                  {/* Pin Bar */}
                  <div className="bg-gradient-to-b from-yellow-400 to-orange-500 w-2 h-16 rounded-full shadow-lg"></div>

                  {/* Pin Icon */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-red-500 rounded-full p-2 shadow-lg border-2 border-white">
                      <Pin
                        className={`w-4 h-4 text-white ${
                          isSpinning ? "animate-spin" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Pointer Triangle */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[16px] border-l-transparent border-r-transparent border-t-orange-500 drop-shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spin Button */}
            <button
              onClick={spin}
              disabled={items.length < 2 || isSpinning}
              className={`px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                items.length < 2 || isSpinning
                  ? "bg-gray-500/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-2xl"
              }`}
            >
              <RotateCw
                className={`w-5 h-5 ${isSpinning ? "animate-spin" : ""}`}
              />
              {isSpinning ? "Spinning..." : "Spin the Wheel!"}
            </button>

            {/* Result Display */}
            {selectedItem && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 backdrop-blur-lg border border-green-300/30 shadow-2xl rounded-lg p-6 text-center animate-scale-in">
                <div className="text-2xl font-bold text-white mb-2">
                  🎉 Your Challenge:
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {selectedItem}
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              🎲 Challenges ({items.length}/10)
            </h2>
            <div
              className="space-y-3 max-h-80 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.3) rgba(255,255,255,0.1)",
              }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{
                        backgroundColor: solidColors[i % solidColors.length],
                      }}
                    ></div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    disabled={isSpinning || items.length <= 2}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-400 hover:text-red-300 hover:bg-red-500/20 p-1 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <CircleX className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {items.length === 0 && (
                <div className="text-white/60 text-center py-8">
                  No challenges added yet. Add some to get started!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinnerAlready;
