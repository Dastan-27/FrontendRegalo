import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Headphones, Volume2, Sparkles } from "lucide-react";
import { getExtras, resolveUrl } from "../api/client";
import { playHeartTap } from "../utils/soundEffects";

export default function FloatingAmorButton() {
  const [extras, setExtras] = useState(null);
  const [showHearts, setShowHearts] = useState(false);
  const [toast, setToast] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const lastPlayedUrlRef = useRef(null);

  useEffect(() => {
    getExtras()
      .then(setExtras)
      .catch(() => { });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleClick = useCallback(() => {
    playHeartTap(0.25);

    // Obtener la lista de audios disponibles
    const pool = extras?.audios_amor_urls?.length
      ? extras.audios_amor_urls
      : extras?.audio_amor_url
        ? [extras.audio_amor_url]
        : [];

    if (!pool || pool.length === 0) {
      setToast(true);
      setTimeout(() => setToast(false), 3200);
      return;
    }

    // Seleccionar uno al azar asegurando que no repita el inmediatamente anterior (si hay > 1)
    const available =
      pool.length > 1
        ? pool.filter((u) => u !== lastPlayedUrlRef.current)
        : pool;
    const nextUrl =
      available.length > 0
        ? available[Math.floor(Math.random() * available.length)]
        : pool[0];

    lastPlayedUrlRef.current = nextUrl;

    // Si ya había un audio reproduciéndose o cargado, lo detenemos para iniciar el nuevo
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    const audio = new Audio(nextUrl);
    audioRef.current = audio;

    audio.addEventListener("ended", () => setIsPlaying(false));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("error", () => {
      setIsPlaying(false);
      setToast(true);
      setTimeout(() => setToast(false), 3200);
    });

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
        setToast(true);
        setTimeout(() => setToast(false), 3200);
      });

    // Lanzar partículas / corazones animados
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 2000);
  }, [extras]);

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end">
      {/* ── Toast tierno si el audio aún no existe ── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-3 w-64 rounded-2xl border border-[#F2E2DC] bg-white/95 p-3.5 text-center shadow-[0_12px_30px_-6px_rgba(216,140,154,0.35)] backdrop-blur-md"
          >
            <p className="font-playfair text-xs font-semibold text-[#4A3B3C]">
              Aquí sonará mi voz recordándote que te amo 💛
            </p>
            <p className="mt-1 font-nunito text-[11px] text-[#8E7B7D]">
              (Audio listo para grabar muy pronto)
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lluvia de corazones y notas flotantes al pulsar ── */}
      <AnimatePresence>
        {showHearts &&
          Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 0,
                x: (Math.random() - 0.5) * 120,
                y: -140 - Math.random() * 80,
                scale: 1.2 + Math.random() * 0.4,
                rotate: (Math.random() - 0.5) * 40,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.4 + Math.random() * 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute bottom-12 right-6 select-none"
              style={{ fontSize: `${16 + Math.random() * 12}px` }}
            >
              {i % 3 === 0 ? "🎵" : i % 3 === 1 ? "💖" : "✨"}
            </motion.span>
          ))}
      </AnimatePresence>

      {/* ── Botón Redondo con Corazón + Auriculares + Glow Rosado ── */}
      <div className="relative group">
        {/* Glow rosado pulsante */}
        <div className="absolute -inset-2.5 rounded-full bg-[#D88C9A]/35 blur-lg transition-all duration-500 group-hover:bg-[#D88C9A]/50 group-hover:blur-xl animate-pulse" />
        <div className="absolute -inset-1 rounded-full bg-[#F2D0A9]/30 blur-md pointer-events-none" />

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={handleClick}
          aria-label="Escuchar mensaje de amor"
          className="relative flex h-16 w-16 sm:h-18 sm:w-18 cursor-pointer items-center justify-center rounded-full bg-gradient-to-tr from-[#C46A7A] via-[#D88C9A] to-[#F2B5C0] text-white shadow-[0_12px_32px_rgba(216,140,154,0.65)] transition-all"
        >
          {/* Corazón latiendo */}
          <div className="animate-heartbeat flex items-center justify-center">
            <Heart className="h-8 w-8 drop-shadow-sm" fill="white" stroke="white" />
          </div>

          {/* Badge de auriculares con micro-interacción */}
          <span className="absolute -bottom-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/80 bg-[#4A3B3C] text-white shadow-md">
            {isPlaying ? (
              <Volume2 className="h-3.5 w-3.5 text-[#F2D0A9] animate-bounce" />
            ) : (
              <Headphones className="h-3 w-3 text-white" />
            )}
          </span>

          {/* Micro-etiqueta flotante "AMOR!!!" */}
          <span className="absolute -top-2 -right-2 rounded-full border border-white/90 bg-white px-2 py-0.5 font-nunito text-[10px] font-extrabold tracking-wider text-[#D88C9A] shadow-md uppercase">
            AMOR!!!
          </span>
        </motion.button>
      </div>
    </div>
  );
}
