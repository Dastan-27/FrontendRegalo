import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Volume1,
  Music,
  Sliders,
  Play,
  Pause,
  X,
  Sparkles,
} from "lucide-react";
import fondoAudioUrl from "../assets/Fondo.mp3";
import { playCutePop } from "../utils/soundEffects";

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("bg_music_volume");
    return saved !== null ? parseFloat(saved) : 0.35;
  });
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Inicialización del audio con loop infinito
  useEffect(() => {
    const audio = new Audio(fondoAudioUrl);
    audio.loop = true;
    audio.volume = isMuted ? 0 : volume;
    audioRef.current = audio;

    // Intentar reproducción automática
    const startAudio = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay bloqueado por políticas del navegador: esperar primera interacción
          const unlockAudio = () => {
            audio
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
            document.removeEventListener("pointerdown", unlockAudio);
            document.removeEventListener("keydown", unlockAudio);
          };
          document.addEventListener("pointerdown", unlockAudio, { once: true });
          document.addEventListener("keydown", unlockAudio, { once: true });
        });
    };

    startAudio();

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Actualizar volumen del elemento de audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      localStorage.setItem("bg_music_volume", volume.toString());
    }
  }, [volume, isMuted]);

  // Alternar Silencio (Mute)
  const toggleMute = useCallback(() => {
    playCutePop(0.15);
    setIsMuted((prev) => {
      const next = !prev;
      if (audioRef.current) {
        audioRef.current.muted = next;
        audioRef.current.volume = next ? 0 : volume;
      }
      return next;
    });
  }, [volume]);

  // Alternar Play/Pausa manual
  const togglePlay = useCallback(() => {
    playCutePop(0.15);
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  }, [isPlaying]);

  // Cambio de barra de volumen
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (isMuted && newVol > 0) {
      setIsMuted(false);
    }
  };

  const volumePercent = Math.round((isMuted ? 0 : volume) * 100);

  // Icono dinámico según estado de volumen
  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-6 z-50">
      {/* ── Botón Redondo de Configuración de Música en Todas las Pantallas ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          playCutePop(0.15);
          setIsOpen((prev) => !prev);
        }}
        title="Ajustes de música de fondo"
        aria-label="Configuración de música"
        className="relative flex h-11 w-11 sm:h-12 sm:w-12 cursor-pointer items-center justify-center rounded-full border border-[#F2E2DC] bg-white/85 text-[#4A3B3C] shadow-[0_6px_20px_rgba(216,140,154,0.22)] backdrop-blur-md transition-colors hover:border-[#D88C9A] hover:text-[#D88C9A]"
      >
        {/* Halo de animación suave cuando la música suena */}
        {isPlaying && !isMuted && (
          <span className="absolute -inset-1 rounded-full bg-[#D88C9A]/20 animate-pulse pointer-events-none" />
        )}

        <VolumeIcon className="h-5 w-5 transition-transform duration-300" />

        {/* Micro-indicador musical */}
        {isPlaying && !isMuted && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D88C9A] text-[9px] text-white">
            ♪
          </span>
        )}
      </motion.button>

      {/* ── Panel Desplegable de Ajustes de Audio ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop invisible para cerrar al hacer clic afuera */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute right-0 top-14 z-50 w-72 sm:w-80 rounded-3xl border border-[#F2E2DC] bg-white/95 p-5 shadow-[0_16px_40px_-8px_rgba(74,59,60,0.18)] backdrop-blur-xl"
            >
              {/* Cabecera del panel */}
              <div className="flex items-center justify-between border-b border-[#F2E2DC]/70 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDECEF] text-[#D88C9A]">
                    <Music className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-sm font-bold text-[#4A3B3C]">
                      Música de fondo
                    </h3>
                    <p className="font-nunito text-[11px] text-[#8E7B7D]">
                      {isPlaying ? (isMuted ? "Silenciada" : "Reproduciendo suave") : "Pausada"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 text-[#8E7B7D] hover:bg-[#FDF8F5] hover:text-[#4A3B3C]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Controles */}
              <div className="mt-4 flex flex-col gap-4">
                {/* 1. Botón para Silenciar / Activar */}
                <div className="flex items-center justify-between gap-3">
                  <span className="font-nunito text-xs font-semibold text-[#4A3B3C]">
                    Estado de sonido
                  </span>
                  <button
                    onClick={toggleMute}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 font-nunito text-xs font-bold transition-all ${
                      isMuted
                        ? "border border-[#F2E2DC] bg-[#FDF8F5] text-[#8E7B7D] hover:border-[#D88C9A]"
                        : "bg-[#D88C9A] text-white shadow-xs hover:bg-[#C67685]"
                    }`}
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="h-3.5 w-3.5" />
                        <span>Silenciado</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="h-3.5 w-3.5" />
                        <span>Sonando</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. Barra de Estado / Slider para Aumentar o Disminuir Volumen */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-nunito font-semibold text-[#4A3B3C]">
                      Volumen
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#D88C9A]">
                      {volumePercent}%
                    </span>
                  </div>

                  <div className="relative flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.02"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#F2E2DC] accent-[#D88C9A] transition-all"
                      style={{
                        background: `linear-gradient(to right, #D88C9A ${volumePercent}%, #F2E2DC ${volumePercent}%)`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between font-nunito text-[10px] text-[#8E7B7D]/70">
                    <span>Mín</span>
                    <span>Máx</span>
                  </div>
                </div>

                {/* 3. Botón para Pausar / Reanudar totalmente */}
                <div className="border-t border-[#F2E2DC]/60 pt-3">
                  <button
                    onClick={togglePlay}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl border border-[#F2E2DC] bg-[#FFF8FA] py-2 font-nunito text-xs font-semibold text-[#4A3B3C] transition-colors hover:border-[#D88C9A] hover:bg-white hover:text-[#D88C9A]"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-3.5 w-3.5 text-[#D88C9A]" />
                        <span>Pausar canción</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3.5 w-3.5 text-[#D88C9A]" />
                        <span>Reanudar canción</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
