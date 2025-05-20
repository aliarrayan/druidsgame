import { use, useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - 15,
        y: position.y - 15,
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{ width: "40px", height: "40px" }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

const Character = () => {
  // Track which Avatar is Selected
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");

  // simplfied Avatar Data
  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrable: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrable: 70,
      portable: 60,
      stars: 4,
    },
  };

  // Get current Avatar Data
  const currenAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full h-screen overflow-hidden mb-[10%]">
      {/* Section Title*/}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest md:-mb-14 mb-8"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255,0.7" }}
        >
          SOLDIERS
        </h1>
      </div>

      {/* Main Content Arena*/}
      <div className="relatize-10 flex md:flex-row flex-col items-center w-full h-full p-4">
        {/* Left Side - Avatar Info And Selection*/}
        <div className="w-full md:w2/4 flex flex-col md:ml-10">
          {/* Selected Avatar Info Card*/}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(255, 255, 255, 0.2)]">
            {/* Avatar Statistics*/}
            <div className="space-y-4 mb-16">
              {/* Power Statistics*/}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Power</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currenAvatar.power}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currenAvatar.power}</span>
              </div>

              {/* Stable Statistics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Stable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currenAvatar.stable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currenAvatar.stable}</span>
              </div>

              {/* Penetrable Statistics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Penetrable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currenAvatar.penetrable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currenAvatar.penetrable}</span>
              </div>

              {/* Portable Statistics */}
              <div className="flex items-center">
                <span className="w-24 text-gray-400">Portable</span>

                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-white"
                    style={{ width: `${currenAvatar.portable}%` }}
                  ></div>
                </div>
                <span className="ml-2">{currenAvatar.portable}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 trasition-all duration-300">
                Porficient
              </button>

              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 trasition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Selection*/}
          <div className="grid grid-cols-2 gap-4">
            {/* VIKI CARD */}
            <div
              className="relative vg-gray-900/70 bacdrop-blur-sm rounded-lg p-3 border flex lg:flex:row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
              onClick={() => setSelectedAvatar("VIKI")}
            >
              <div className="text-lg mb-2">Viki</div>

              {/* Avatar Virtual Placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/VIKI.png" alt="VIKI-IMG" />
              </div>
              {/* Star Rating */}
              <div className="flex">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-violet-400 text-violet-500"
                  />
                ))}
              </div>
              {/* Highlight For Selected Avatar*/}
              {selectedAvatar === "VIKI" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>

            {/* EVACARD */}
            <div
              className="relative vg-gray-900/70 bacdrop-blur-sm rounded-lg p-3 border flex lg:flex:row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300"
              onClick={() => setSelectedAvatar("EVA")}
            >
              <div className="text-lg mb-2">Eva</div>

              {/* Avatar Virtual Placeholder */}
              <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                <img src="/images/EVA.png" alt="EVA-IMG" />
              </div>
              {/* Star Rating */}
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-violet-400 text-violet-500"
                  />
                ))}
              </div>
              {/* Highlight For Selected Avatar*/}
              {selectedAvatar === "EVA" && (
                <div className="absolute inset-0 border-2 rounded-lg pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - 3D Model */}
        <div className="relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {selectedAvatar == "VIKI" ? (
              <motion.div
                key="VIKI"
                className="absolute input-0"
                initial={{ x: "100" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <img src="/images/VIKI.png" alt="" />
              </motion.div>
            ) : (
              <motion.div
                key="EVA"
                className="absolute input-0"
                initial={{ x: "100" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              >
                <Spline scene="https://prod.spline.design/BBHsXIvQ9Kj66DHE/scene.splinecode" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Character;
