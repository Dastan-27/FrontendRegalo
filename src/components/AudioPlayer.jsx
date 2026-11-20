import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Heart } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ url }) {
  const containerRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(false);
  const [ready, setReady] = useState(false);

  const cleanup = useCallback(() => {
    if (wavesurferRef.current) {
      try {
        wavesurferRef.current.destroy();
      } catch {
        // ya destruido
      }
      wavesurferRef.current = null;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setReady(false);
    setError(false);
  }, []);

  useEffect(() => {
    if (!url || !containerRef.current) {
      setError(true);
      return;
    }

    cleanup();

    // Suprimir errores de consola por 404
    const originalError = console.error;
    const originalWarn = console.warn;
    console.error = (...args) => {
      const msg = args[0]?.toString?.() || "";
      if (msg.includes("404") || msg.includes("Failed to fetch") || msg.includes("MediaError")) return;
      originalError(...args);
    };
    console.warn = (...args) => {
      const msg = args[0]?.toString?.() || "";
      if (msg.includes("404") || msg.includes("audio")) return;
      originalWarn(...args);
    };

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: "#F2E2DC",
      progressColor: "#D88C9A",
      cursorColor: "#C67685",
      cursorWidth: 2,
      barWidth: 3,
      barGap: 2,
      barRadius: 3,
      height: 48,
      responsive: true,
      normalize: true,
      backend: "WebAudio",
    });

    wavesurferRef.current = ws;

    ws.on("ready", () => {
      setDuration(ws.getDuration());
      setReady(true);
    });

    ws.on("audioprocess", () => {
      setCurrentTime(ws.getCurrentTime());
    });

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("finish", () => setIsPlaying(false));

    ws.on("error", () => {
      setError(true);
    });

    ws.load(url).catch(() => {
      setError(true);
    });

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      cleanup();
    };
  }, [url, cleanup]);

  const togglePlay = () => {
    if (wavesurferRef.current && ready) {
      wavesurferRef.current.playPause();
    }
  };

  const rewind10 = () => {
    if (wavesurferRef.current && ready) {
      const ws = wavesurferRef.current;
      const newTime = Math.max(0, ws.getCurrentTime() - 10);
      ws.seekTo(newTime / ws.getDuration());
    }
  };

  // ── Fallback amigable si no hay audio ──
  if (error || !url) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-full bg-durazno/20 px-4 py-2.5">
        <span className="text-base">🎙️</span>
        <span className="font-nunito text-sm text-texto/60">
          Audio listo para grabar pronto
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Wavesurfer container */}
      <div ref={containerRef} className="w-full rounded-xl" />

      {/* Controles */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Retroceder 10s */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={rewind10}
            disabled={!ready}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-texto/60 shadow-sm hover:text-texto disabled:opacity-40"
            title="Retroceder 10s"
          >
            <RotateCcw className="h-4 w-4" />
          </motion.button>

          {/* Play / Pausa */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={togglePlay}
            disabled={!ready}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-rosa text-white shadow-md hover:bg-rosa-hover disabled:opacity-40"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5 pl-0.5" />
            )}
          </motion.button>

          {/* Corazón latiendo */}
          <Heart
            className={`h-5 w-5 text-rosa transition-transform ${
              isPlaying ? "animate-heartbeat" : ""
            }`}
            fill={isPlaying ? "#D88C9A" : "none"}
          />
        </div>

        {/* Tiempo */}
        <span className="font-mono text-xs text-texto/50">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}
