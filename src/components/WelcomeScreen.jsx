import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FUNNY_TEXTS = [
  "No, no me interesa",
  "¿En serio?",
  "Piénsalo bien...",
];

// Corazones de fondo lentos y sutiles
const AMBIENT_HEARTS = [
  { id: 1, left: "8%", size: 14, duration: 24, delay: 0, opacity: 0.05 },
  { id: 2, left: "22%", size: 20, duration: 28, delay: 6, opacity: 0.07 },
  { id: 3, left: "38%", size: 12, duration: 22, delay: 12, opacity: 0.04 },
  { id: 4, left: "55%", size: 18, duration: 26, delay: 3, opacity: 0.06 },
  { id: 5, left: "72%", size: 16, duration: 30, delay: 8, opacity: 0.05 },
  { id: 6, left: "88%", size: 22, duration: 25, delay: 15, opacity: 0.06 },
  { id: 7, left: "15%", size: 10, duration: 20, delay: 10, opacity: 0.04 },
  { id: 8, left: "82%", size: 14, duration: 27, delay: 18, opacity: 0.05 },
];

export default function WelcomeScreen({ onYes, onPrank }) {
  const [noClicks, setNoClicks] = useState(0);
  const [noScale, setNoScale] = useState(1);
  const [isEvading, setIsEvading] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const noBtnRef = useRef(null);

  // Mover botón evasivo a cualquier coordenada de la pantalla
  const evade = useCallback(() => {
    const btnWidth = 190;
    const btnHeight = 44;
    const padding = 24;

    const maxX = Math.max(20, window.innerWidth - btnWidth - padding);
    const maxY = Math.max(20, window.innerHeight - btnHeight - padding);

    const randomX = Math.floor(padding + Math.random() * (maxX - padding));
    const randomY = Math.floor(padding + Math.random() * (maxY - padding));

    setIsEvading(true);
    setNoPos({ x: randomX, y: randomY });
  }, []);

  const handleNoClick = useCallback(
    (e) => {
      e.stopPropagation();
      const nextClicks = noClicks + 1;
      setNoClicks(nextClicks);

      if (nextClicks === 1) {
        setNoScale(0.85);
      } else if (nextClicks === 2) {
        setNoScale(0.7);
      } else if (nextClicks >= 3) {
        onPrank();
        return;
      }
      evade();
    },
    [noClicks, evade, onPrank]
  );

  const buttonText = FUNNY_TEXTS[Math.min(noClicks, FUNNY_TEXTS.length - 1)];

  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden">
      {/* ── 1. Fondo gradiente suave: crema → rosa muy pálido → lavanda claro ── */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#FDF8F5] via-[#FDECEF] to-[#F4ECF7]" />

      {/* ── Textura de ruido de papel ── */}
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[1]" />

      {/* ── Ilustración botánica minimalista de fondo (trazo fino suave) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed right-[-60px] bottom-[-40px] z-[2] h-[360px] w-[360px] stroke-[#D88C9A] opacity-[0.06] sm:h-[480px] sm:w-[480px]"
        viewBox="0 0 200 200"
        fill="none"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M100 180 C90 120 120 80 150 40 C140 70 120 110 120 180" />
        <path d="M125 110 C145 95 165 98 175 110 C160 120 140 120 125 110" />
        <path d="M110 135 C85 125 75 105 85 95 C98 105 105 120 110 135" />
        <path d="M135 75 C150 60 170 65 175 75 C165 85 145 85 135 75" />
      </svg>

      <svg
        aria-hidden="true"
        className="pointer-events-none fixed left-[-50px] top-[-30px] z-[2] h-[320px] w-[320px] stroke-[#D88C9A] opacity-[0.05] sm:h-[420px] sm:w-[420px]"
        viewBox="0 0 200 200"
        fill="none"
        strokeWidth="1.2"
        strokeLinecap="round"
      >
        <path d="M100 20 C110 80 80 120 50 160 C60 130 80 90 80 20" />
        <path d="M75 90 C55 105 35 102 25 90 C40 80 60 80 75 90" />
        <path d="M90 65 C115 75 125 95 115 105 C102 95 95 80 90 65" />
      </svg>

      {/* ── Corazones flotantes lentos y sutiles ── */}
      {AMBIENT_HEARTS.map((h) => (
        <div
          key={h.id}
          className="pointer-events-none fixed animate-float-bg-heart select-none text-[#D88C9A]"
          style={{
            left: h.left,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </div>
      ))}

      {/* ── Contenedor principal con entrada escalonada ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center px-6 py-12 text-center">
        {/* Detalle superior sutil */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mb-6 font-nunito text-[11px] font-medium tracking-[0.25em] uppercase text-[#8E7B7D]/60"
        >
          Hecho solo para Lourdes Zuñiga ♡
        </motion.p>

        {/* ── 2. Corazón protagonista 3D soft con resplandor (glow) y latido ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            type: "spring",
            stiffness: 140,
            damping: 18,
          }}
          className="relative mb-8"
        >
          {/* Resplandor cálido difuso (Glow) */}
          <div className="absolute -inset-6 rounded-full bg-[#D88C9A]/20 blur-2xl" />
          <div className="absolute -inset-2 rounded-full bg-[#F2D0A9]/30 blur-xl" />

          {/* SVG Corazón Ilustrado 3D Soft */}
          <div className="animate-heartbeat relative flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="h-28 w-28 drop-shadow-[0_12px_24px_rgba(216,140,154,0.45)] sm:h-36 sm:w-36"
            >
              <defs>
                {/* Gradiente principal suave 3D */}
                <linearGradient id="heartGradient" x1="15%" y1="10%" x2="85%" y2="90%">
                  <stop offset="0%" stopColor="#FDE3E7" />
                  <stop offset="25%" stopColor="#ECA5B2" />
                  <stop offset="70%" stopColor="#D88C9A" />
                  <stop offset="100%" stopColor="#C47382" />
                </linearGradient>

                {/* Sombra y luz interna */}
                <radialGradient id="heartSpecular" cx="38%" cy="30%" r="35%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Silueta del corazón */}
              <path
                d="M60 102 C30 78 8 58 8 36 C8 18 20 6 36 6 C47 6 55 12 60 21 C65 12 73 6 84 6 C100 6 112 18 112 36 C112 58 90 78 60 102 Z"
                fill="url(#heartGradient)"
              />

              {/* Reflejo / Brillo 3D suave */}
              <ellipse
                cx="42"
                cy="30"
                rx="14"
                ry="18"
                transform="rotate(-25 42 30)"
                fill="url(#heartSpecular)"
              />

              {/* Brillo sutil en el lóbulo derecho */}
              <ellipse
                cx="78"
                cy="28"
                rx="8"
                ry="11"
                transform="rotate(20 78 28)"
                fill="white"
                opacity="0.22"
              />
            </svg>
          </div>
        </motion.div>

        {/* ── 3. Tipografía jerárquica refinada ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="flex flex-col items-center">
            <span className="font-vibes text-4xl leading-tight text-[#4A3B3C] sm:text-5xl md:text-6xl">
              Bienvenida mi niña
            </span>
            <span className="mt-1 font-nunito text-lg font-light tracking-[0.3em] uppercase text-[#D88C9A] sm:text-xl">
              Preciosa
            </span>
          </h1>
        </motion.div>

        {/* Pregunta más pequeña en cursiva suave */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="font-playfair text-lg italic text-[#8E7B7D] sm:text-xl"
        >
          ¿Me sigues amando?
        </motion.p>

        {/* ── 4. Botón Principal Romántico ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 w-full max-w-xs"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onYes}
            className="group relative w-full cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-[#D88C9A] via-[#E098A6] to-[#C67685] px-8 py-4 font-nunito text-base font-bold text-white shadow-[0_10px_28px_-6px_rgba(216,140,154,0.55)] transition-all hover:shadow-[0_16px_36px_-6px_rgba(216,140,154,0.7)]"
          >
            {/* Brillo suave al hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
            <span className="relative tracking-wide">
              Claro que te amo tontito
            </span>
          </motion.button>
        </motion.div>

        {/* ── Botón "No" en su posición inicial (antes de activarse la evasión) ── */}
        {!isEvading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
            className="mt-5"
          >
            <motion.button
              ref={noBtnRef}
              animate={{ scale: noScale }}
              whileTap={{ scale: noScale * 0.95 }}
              onMouseEnter={evade}
              onClick={handleNoClick}
              className="cursor-pointer rounded-full border border-[#4A3B3C]/10 bg-white/40 px-6 py-2.5 font-nunito text-xs font-light text-[#8E7B7D]/60 backdrop-blur-xs transition-colors hover:border-[#4A3B3C]/20 hover:text-[#8E7B7D]"
            >
              {buttonText}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ── Botón "No" evasivo por TODA la pantalla ── */}
      {isEvading && (
        <motion.button
          ref={noBtnRef}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            x: noPos.x,
            y: noPos.y,
            scale: noScale,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 24,
            mass: 0.8,
          }}
          whileTap={{ scale: noScale * 0.94 }}
          onMouseEnter={evade}
          onClick={handleNoClick}
          className="fixed top-0 left-0 z-50 cursor-pointer rounded-full border border-[#4A3B3C]/15 bg-white/85 px-6 py-2.5 font-nunito text-xs font-light text-[#8E7B7D] shadow-[0_8px_20px_-4px_rgba(74,59,60,0.15)] backdrop-blur-md transition-colors hover:border-[#D88C9A]/30"
          style={{ willChange: "transform" }}
        >
          {buttonText}
        </motion.button>
      )}
    </div>
  );
}
