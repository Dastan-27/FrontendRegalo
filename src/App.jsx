import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import PrankFlow from "./components/PrankFlow";
import EmotionMenu from "./components/EmotionMenu";
import LetterList from "./components/LetterList";
import LetterModal from "./components/LetterModal";
import FloatingAmorButton from "./components/FloatingAmorButton";
import BackgroundMusic from "./components/BackgroundMusic";

// Partículas y corazones ambientales de fondo que unifican toda la app
const GLOBAL_AMBIENT_HEARTS = [
  { id: 1, left: "6%", size: 14, duration: 26, delay: 0, opacity: 0.04 },
  { id: 2, left: "18%", size: 22, duration: 32, delay: 5, opacity: 0.06 },
  { id: 3, left: "34%", size: 12, duration: 24, delay: 11, opacity: 0.03 },
  { id: 4, left: "52%", size: 18, duration: 28, delay: 2, opacity: 0.05 },
  { id: 5, left: "68%", size: 15, duration: 34, delay: 9, opacity: 0.04 },
  { id: 6, left: "84%", size: 20, duration: 27, delay: 14, opacity: 0.06 },
  { id: 7, left: "94%", size: 12, duration: 30, delay: 7, opacity: 0.03 },
];

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [selectedEmocion, setSelectedEmocion] = useState(null);
  const [selectedCarta, setSelectedCarta] = useState(null);

  // ── Navegación ────────────────────────────
  const goWelcome = useCallback(() => {
    setScreen("welcome");
    setSelectedEmocion(null);
    setSelectedCarta(null);
  }, []);

  const goMenu = useCallback(() => {
    setScreen("menu");
    setSelectedEmocion(null);
    setSelectedCarta(null);
  }, []);

  const goPrank = useCallback(() => setScreen("prank"), []);

  const goLetters = useCallback((emocion) => {
    setSelectedEmocion(emocion);
    setScreen("letters");
  }, []);

  const openCarta = useCallback((carta) => {
    setSelectedCarta(carta);
    setScreen("letter");
  }, []);

  const closeCarta = useCallback(() => {
    if (selectedEmocion) {
      setScreen("letters");
    } else {
      setScreen("menu");
    }
    setSelectedCarta(null);
  }, [selectedEmocion]);

  // Mostrar botón AMOR flotante en menú, lista de cartas y modal
  const showAmor = screen === "menu" || screen === "letters" || screen === "letter";

  return (
    <div className="relative min-h-dvh overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_#FFFBF9_0%,_#FDF2F4_40%,_#F6E9F6_80%,_#EFE2F0_100%)]">
      {/* ── Textura de ruido de papel global ── */}
      <div className="noise-overlay pointer-events-none fixed inset-0 z-0" />

      {/* ── Corazones flotantes lentos y sutiles unificados ── */}
      {GLOBAL_AMBIENT_HEARTS.map((h) => (
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

      {/* ── Contenido interactivo con transiciones suaves ── */}
      <div className="relative z-10 flex min-h-dvh flex-col justify-center">
        <AnimatePresence mode="wait">
          {screen === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45 }}
            >
              <WelcomeScreen onYes={goMenu} onPrank={goPrank} />
            </motion.div>
          )}

          {screen === "prank" && (
            <motion.div
              key="prank"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PrankFlow onBack={goWelcome} onAccept={goMenu} />
            </motion.div>
          )}

          {screen === "menu" && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex min-h-dvh w-full items-center justify-center py-6 sm:py-10"
            >
              <EmotionMenu
                onSelectEmocion={goLetters}
                onOpenCarta={openCarta}
              />
            </motion.div>
          )}

          {screen === "letters" && selectedEmocion && (
            <motion.div
              key="letters"
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.98 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="flex min-h-dvh w-full items-center justify-center py-6 sm:py-10"
            >
              <LetterList
                emocion={selectedEmocion}
                onOpenCarta={openCarta}
                onBack={goMenu}
              />
            </motion.div>
          )}

          {screen === "letter" && selectedCarta && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.38, ease: "easeInOut" }}
              className="flex min-h-dvh w-full items-center justify-center py-6 sm:py-10"
            >
              <LetterModal carta={selectedCarta} onClose={closeCarta} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Música de Fondo y Control de Volumen Global ── */}
      <BackgroundMusic />

      {/* ── Botón flotante AMOR!!! protagonista con glow y audio ── */}
      <AnimatePresence>
        {showAmor && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ delay: 0.3, duration: 0.35, type: "spring" }}
          >
            <FloatingAmorButton />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
