import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Heart } from "lucide-react";
import { getCarta, resolveUrl } from "../api/client";
import AudioPlayer from "./AudioPlayer";

export default function LetterModal({ carta: cartaInicial, onClose }) {
  const [carta, setCarta] = useState(cartaInicial);
  const [loading, setLoading] = useState(false);

  // Si la carta no trae el texto completo, cargarlo
  useEffect(() => {
    if (carta.texto || carta.contenido) return;
    setLoading(true);
    getCarta(carta.id)
      .then((c) => {
        if (c) setCarta(c);
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, [carta]);

  const textoCarta = carta.texto || carta.contenido || "";
  const audioUrl = resolveUrl(carta.audio_url || carta.audio);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      {/* Botón volver */}
      <motion.button
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClose}
        className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#F2E2DC] bg-white/70 px-4 py-2 font-nunito text-xs font-semibold text-[#4A3B3C]/80 shadow-xs backdrop-blur-xs transition-colors hover:bg-white hover:text-[#4A3B3C]"
      >
        <ArrowLeft className="h-3.5 w-3.5 text-[#D88C9A]" />
        Volver a las cartas
      </motion.button>

      {/* Carta desplegada estilo papelería fina */}
      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        className="overflow-hidden rounded-3xl border border-[#F2E2DC] bg-white shadow-[0_16px_40px_-12px_rgba(74,59,60,0.12)]"
      >
        {/* Cabecera del sobre / carta */}
        <div className="flex items-center justify-between border-b border-[#F2E2DC] bg-gradient-to-r from-[#FDF8F5] via-[#FDECEF]/60 to-[#FDF8F5] px-6 py-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#D88C9A]" />
            <span className="font-playfair text-xs italic text-[#8E7B7D]">
              De mi corazón para el tuyo
            </span>
          </div>
          <Heart className="h-4 w-4 text-[#D88C9A]" fill="#D88C9A" />
        </div>

        {/* Cuerpo de la carta */}
        <div className="px-6 py-8 sm:px-12 sm:py-10">
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#D88C9A] border-t-transparent" />
            </div>
          ) : (
            <>
              {/* Título de la carta */}
              {carta.titulo && (
                <h2 className="mb-6 text-center font-playfair text-2xl font-bold leading-snug text-[#4A3B3C] sm:text-3xl">
                  {carta.titulo}
                </h2>
              )}

              {/* Línea decorativa dorada / suave */}
              <div className="mx-auto mb-8 h-px w-20 bg-gradient-to-r from-transparent via-[#D88C9A]/40 to-transparent" />

              {/* Texto de la carta */}
              <div className="font-nunito text-base leading-relaxed text-[#4A3B3C]/90 sm:text-lg sm:leading-8">
                {textoCarta}
              </div>

              {/* Despedida y firma */}
              <div className="mt-10 border-t border-[#F2E2DC]/60 pt-6 text-right">
                <p className="font-vibes text-2xl text-[#D88C9A] sm:text-3xl">
                  Con todo mi amor, siempre
                </p>
                <p className="font-nunito text-xs tracking-wider uppercase text-[#8E7B7D]/70">
                  Tu futuro esposo Michael ♡
                </p>
              </div>
            </>
          )}
        </div>

        {/* Reproductor de audio integrado */}
        <div className="border-t border-[#F2E2DC] bg-[#FDF8F5]/80 px-6 py-5 sm:px-12">
          <AudioPlayer url={audioUrl} />
        </div>
      </motion.div>
    </div>
  );
}
