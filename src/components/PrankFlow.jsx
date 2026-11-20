import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, AlertTriangle } from "lucide-react";
import { getExtras } from "../api/client";

const HACK_LINES = [
  "> Iniciando protocolo de acceso remoto...",
  "> Conectando al dispositivo...",
  "> Acceso concedido.",
  "> Accediendo a la galería de fotos...",
  "> 1,247 archivos encontrados.",
  "> Escaneando conversaciones privadas...",
  "> Descargando chats secretos...",
  "████████████░░░░░░░░  58%",
  "██████████████████░░  89%",
  "████████████████████  100%  ✓",
  "> Empaquetando datos para envío...",
];

export default function PrankFlow({ onBack, onAccept }) {
  const [step, setStep] = useState("A"); // A | B | C
  const [lines, setLines] = useState([]);
  const [extras, setExtras] = useState(null);
  const timerRef = useRef(null);

  // Cargar extras al montar
  useEffect(() => {
    getExtras()
      .then(setExtras)
      .catch(() => {});
  }, []);

  // ── Paso B: logs progresivos ──
  useEffect(() => {
    if (step !== "B") return;

    let idx = 0;
    setLines([]);

    timerRef.current = setInterval(() => {
      if (idx < HACK_LINES.length) {
        setLines((prev) => [...prev, HACK_LINES[idx]]);
        idx++;
      } else {
        clearInterval(timerRef.current);
        // Después de un breve instante, pasar a C
        setTimeout(() => setStep("C"), 600);
      }
    }, 350);

    return () => clearInterval(timerRef.current);
  }, [step]);

  const handleFinal = () => {
    const link = extras?.link_broma_final;
    if (link) {
      window.open(link, "_blank", "noopener");
    }
  };

  // ── STEP A: Panel tierno ──
  if (step === "A") {
    return (
      <div className="flex min-h-dvh items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 text-center shadow-xl"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-durazno/30">
            <AlertTriangle className="h-7 w-7 text-rosa" />
          </div>
          <h2 className="font-playfair text-2xl font-bold text-texto">
            ¿Segura? Piénsalo bien 🥺
          </h2>
          <p className="mt-2 text-sm text-texto/60">
            Todavía estás a tiempo de cambiar de opinión...
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onAccept}
              className="rounded-full bg-rosa px-6 py-3 font-nunito font-semibold text-white shadow-md hover:bg-rosa-hover"
            >
              Está bien, sí te quiero
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep("B")}
              className="rounded-full border-2 border-rosa/30 px-6 py-3 font-nunito text-sm font-medium text-texto/70 hover:border-rosa/60"
            >
              No, sigo insistiendo
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── STEP B + C: Pantalla hacker ──
  return (
    <div className="relative flex min-h-dvh flex-col bg-black">
      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed text-green-400 sm:p-8 sm:text-sm"
      >
        <div className="mb-2 flex items-center gap-2 text-green-600">
          <ShieldAlert className="h-4 w-4" />
          <span>SISTEMA DE ACCESO REMOTO v3.1.4</span>
        </div>
        <div className="mb-4 border-b border-green-900 pb-2 text-green-700">
          ═══════════════════════════════════════
        </div>

        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className="mb-1"
          >
            {line}
          </motion.p>
        ))}

        {step === "B" && (
          <span className="animate-blink text-green-300">▌</span>
        )}
      </motion.div>

      {/* ── Overlay STEP C ── */}
      <AnimatePresence>
        {step === "C" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="mx-4 w-full max-w-sm rounded-2xl border border-green-800 bg-gray-950 p-8 text-center shadow-2xl"
            >
              <h2 className="font-playfair text-2xl font-bold text-green-400">
                ¿Muy segura?
              </h2>
              <p className="mt-2 text-sm text-green-600">
                Última oportunidad...
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onBack}
                  className="rounded-full bg-green-600 px-6 py-3 font-nunito font-semibold text-black shadow-md hover:bg-green-500"
                >
                  No, perdón, volvamos
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleFinal}
                  className="rounded-full border-2 border-green-700 px-6 py-3 font-nunito text-sm font-medium text-green-400 hover:border-green-500"
                >
                  Sí, muy segura
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
