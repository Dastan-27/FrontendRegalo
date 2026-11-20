import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MailOpen, Shuffle, Sparkles, Heart } from "lucide-react";
import { getCartasPorEmocion, getCartaAleatoria } from "../api/client";

export default function LetterList({ emocion, onOpenCarta, onBack }) {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const [randomLoading, setRandomLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCartasPorEmocion(emocion.id)
      .then((data) => setCartas(Array.isArray(data) ? data : []))
      .catch(() => setCartas([]))
      .finally(() => setLoading(false));
  }, [emocion.id]);

  const handleRandomEmocion = async () => {
    setRandomLoading(true);
    try {
      const carta = await getCartaAleatoria(emocion.id);
      if (carta) onOpenCarta(carta);
    } catch {
      // silenciar
    } finally {
      setRandomLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-4xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-14">
      {/* ── Cabecera con Botón Volver y Título ── */}
      <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.08, x: -2 }}
            whileTap={{ scale: 0.94 }}
            onClick={onBack}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-[#F2E2DC] bg-white/90 text-[#4A3B3C] shadow-[0_4px_14px_rgba(74,59,60,0.06)] backdrop-blur-sm transition-all hover:border-[#D88C9A] hover:bg-white hover:text-[#D88C9A]"
            aria-label="Volver al menú de emociones"
          >
            <ArrowLeft className="h-5 w-5 text-[#D88C9A]" />
          </motion.button>
          <div>
            <span className="font-dancing text-xl text-[#D88C9A]">
              Palabras para tu corazón
            </span>
            <h2 className="font-playfair text-2xl font-extrabold text-[#4A3B3C] sm:text-3xl">
              {emocion.nombre}
            </h2>
            <p className="font-nunito text-xs text-[#8E7B7D]">
              {cartas.length} {cartas.length === 1 ? "mensaje preparado con amor" : "mensajes preparados con amor"}
            </p>
          </div>
        </div>

        {/* Botón aleatorio para esta emoción */}
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleRandomEmocion}
          disabled={randomLoading}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D88C9A]/40 bg-white/85 px-6 py-2.5 font-nunito text-xs font-bold text-[#D88C9A] shadow-[0_6px_20px_rgba(216,140,154,0.18)] backdrop-blur-md transition-all hover:border-[#D88C9A] hover:bg-[#D88C9A] hover:text-white hover:shadow-[0_10px_28px_rgba(216,140,154,0.35)] disabled:opacity-60"
        >
          <Shuffle className="h-3.5 w-3.5" />
          <span>{randomLoading ? "Buscando..." : "Elegir una al azar"}</span>
        </motion.button>
      </div>

      {/* ── Lista de sobres en 2 columnas ── */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#D88C9A] border-t-transparent" />
        </div>
      ) : cartas.length === 0 ? (
        <div className="rounded-3xl border border-[#F2E2DC] bg-white/70 p-12 text-center shadow-sm backdrop-blur-sm">
          <Heart className="mx-auto mb-3 h-10 w-10 text-[#D88C9A]/60" />
          <p className="font-playfair text-base font-semibold text-[#4A3B3C]">
            Aún no hay cartas para esta emoción 🌸
          </p>
          <p className="mt-1 font-nunito text-xs text-[#8E7B7D]">
            Pronto escribiré algo especial para este momento.
          </p>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          {cartas.map((carta) => {
            const isHovered = hoveredId === carta.id;
            const previewText =
              carta.preview ||
              carta.texto ||
              carta.contenido ||
              "Toca para abrir y leer esta carta 💌";

            return (
              <motion.button
                key={carta.id}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredId(carta.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onOpenCarta(carta)}
                className="group relative flex cursor-pointer items-center gap-5 rounded-3xl border border-[#F2E2DC] bg-white/95 p-6 sm:p-7 text-left shadow-[0_6px_22px_-6px_rgba(74,59,60,0.06)] transition-all duration-300 hover:border-[#D88C9A]/60 hover:shadow-[0_16px_36px_-8px_rgba(216,140,154,0.3)]"
              >
                {/* Icono de sobre interactivo */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FDECEF] shadow-[0_4px_14px_rgba(216,140,154,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D88C9A] group-hover:text-white">
                  {isHovered ? (
                    <MailOpen className="h-7 w-7 text-[#D88C9A] group-hover:text-white transition-colors" />
                  ) : (
                    <Mail className="h-7 w-7 text-[#D88C9A] group-hover:text-white transition-colors" />
                  )}
                </div>

                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="truncate font-playfair text-base sm:text-lg font-bold text-[#4A3B3C] transition-colors group-hover:text-[#D88C9A]">
                    {carta.titulo || `Carta especial #${carta.id}`}
                  </h3>
                  <p className="mt-1 line-clamp-2 font-nunito text-xs leading-relaxed text-[#8E7B7D]">
                    {previewText}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 font-nunito text-[11px] font-semibold text-[#D88C9A]">
                    <span>Abrir carta</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
