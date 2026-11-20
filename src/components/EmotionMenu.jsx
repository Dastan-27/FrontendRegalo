import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ShieldQuestion,
  Moon,
  Frown,
  Flame,
  Coffee,
  Smile,
  HeartCrack,
  Stars,
  Sparkles,
  RefreshCw,
  WifiOff,
  ArrowRight,
  MailOpen,
} from "lucide-react";
import { getEmociones, getCartaAleatoria } from "../api/client";

// Paleta pastel armonizada (estilo acuarela suave, sin colores estridentes)
const EMOTION_CONFIG = {
  insegura: {
    icon: ShieldQuestion,
    iconBg: "bg-[#F5EEFF] text-[#9B6BCC]",
    hoverBorder: "hover:border-[#D9C2F0]",
    accentBg: "group-hover:bg-[#FAF6FF]",
  },
  extrano: {
    icon: HeartCrack,
    iconBg: "bg-[#FDECF1] text-[#D86C8C]",
    hoverBorder: "hover:border-[#F3C2D2]",
    accentBg: "group-hover:bg-[#FFF7FA]",
  },
  insomnio: {
    icon: Moon,
    iconBg: "bg-[#EEF2FF] text-[#6B7FD7]",
    hoverBorder: "hover:border-[#C7D2FE]",
    accentBg: "group-hover:bg-[#F7F9FF]",
  },
  elegiste: {
    icon: Stars,
    iconBg: "bg-[#FEF6E4] text-[#D4943A]",
    hoverBorder: "hover:border-[#F5D89B]",
    accentBg: "group-hover:bg-[#FFFBF2]",
  },
  triste: {
    icon: Frown,
    iconBg: "bg-[#EAF6FC] text-[#5B9EC4]",
    hoverBorder: "hover:border-[#BDE0F2]",
    accentBg: "group-hover:bg-[#F5FBFE]",
  },
  enojada: {
    icon: Flame,
    iconBg: "bg-[#FEEEEE] text-[#D96B6B]",
    hoverBorder: "hover:border-[#F5C2C2]",
    accentBg: "group-hover:bg-[#FFF7F7]",
  },
  cansada: {
    icon: Coffee,
    iconBg: "bg-[#F3EFEA] text-[#8C7A6B]",
    hoverBorder: "hover:border-[#DCD2C7]",
    accentBg: "group-hover:bg-[#FAF8F5]",
  },
  feliz: {
    icon: Smile,
    iconBg: "bg-[#FEF9E7] text-[#C99A2E]",
    hoverBorder: "hover:border-[#F4E19C]",
    accentBg: "group-hover:bg-[#FFFDF4]",
  },
};

export default function EmotionMenu({ onSelectEmocion, onOpenCarta }) {
  const [emociones, setEmociones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [randomLoading, setRandomLoading] = useState(false);

  const fetchEmociones = useCallback(() => {
    setLoading(true);
    setError(false);
    getEmociones()
      .then((data) => {
        const list = Array.isArray(data) ? data : data.emociones || [];
        setEmociones(list);
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchEmociones();
  }, [fetchEmociones]);

  const handleRandomGlobal = async () => {
    setRandomLoading(true);
    try {
      const carta = await getCartaAleatoria();
      if (carta) onOpenCarta(carta);
    } catch {
      // silenciar error
    } finally {
      setRandomLoading(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[100dvh] w-full max-w-4xl flex-col justify-center px-5 py-12 sm:px-8 sm:py-16">
      {/* ── Encabezado con aire y jerarquía clara ── */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-10 text-center sm:mb-12"
      >
        <p className="font-dancing text-2xl font-semibold text-[#D88C9A] sm:text-3xl">
          Para los momentos donde me necesitas
        </p>

        <h1 className="mt-3 font-playfair text-3xl font-bold tracking-tight text-[#4A3B3C] sm:text-4xl md:text-[44px] md:leading-tight">
          ¿Cómo te sientes hoy, mi amor?
        </h1>

        <p className="mx-auto mt-4 max-w-md font-nunito text-sm text-[#8E7B7D] sm:text-base">
          Abre el sobre que necesites ahora mismo o deja que el destino elija uno por ti.
        </p>

        {/* Botón destacado de carta aleatoria */}
        <div className="mt-7 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleRandomGlobal}
            disabled={randomLoading}
            className="group inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D88C9A] to-[#CA7A8A] px-7 py-3 font-nunito text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(216,140,154,0.55)] transition-all hover:shadow-[0_12px_28px_-6px_rgba(216,140,154,0.7)] disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            <span>
              {randomLoading ? "Buscando tu carta..." : "Un mensaje para este instante"}
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* ── Estado: Cargando ── */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#D88C9A] border-t-transparent" />
        </div>
      )}

      {/* ── Estado: Error ── */}
      {!loading && error && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-sm rounded-3xl border border-[#F2E2DC] bg-white/90 p-8 text-center shadow-sm"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FDF2F0]">
            <WifiOff className="h-6 w-6 text-[#D88C9A]" />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#4A3B3C]">
            No pudimos conectar con el servidor
          </h3>
          <p className="mt-2 font-nunito text-xs text-[#8E7B7D]">
            Verifica que el backend esté activo en{" "}
            <code className="text-[#D88C9A]">localhost:8000</code>
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={fetchEmociones}
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#D88C9A] px-6 py-2.5 font-nunito text-xs font-semibold text-white shadow-sm hover:bg-[#C67685]"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </motion.button>
        </motion.div>
      )}

      {/* ── Rejilla de Emociones estilo Papelería ── */}
      {!loading && emociones.length > 0 && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        >
          {emociones.map((emocion) => {
            const config = EMOTION_CONFIG[emocion.id] || EMOTION_CONFIG.feliz;
            const IconComponent = config.icon || MailOpen;
            const cantidad =
              emocion.cantidad_cartas ?? emocion.total_cartas ?? emocion.cartas?.length;

            return (
              <motion.button
                key={emocion.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => onSelectEmocion(emocion)}
                className={`group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl border border-[#F2E2DC]/90 bg-white/85 p-5 text-left shadow-[0_4px_20px_-8px_rgba(74,59,60,0.06)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_28px_-10px_rgba(216,140,154,0.22)] ${config.hoverBorder} ${config.accentBg}`}
              >
                <div className="flex min-w-0 items-center gap-4">
                  {/* Icono circular suave */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${config.iconBg}`}
                  >
                    <IconComponent className="h-5 w-5" strokeWidth={1.9} />
                  </div>

                  {/* Título + subtítulo sutil */}
                  <div className="min-w-0">
                    <h3 className="font-playfair text-[17px] font-semibold leading-snug text-[#4A3B3C] transition-colors group-hover:text-[#B86575]">
                      {emocion.nombre}
                    </h3>
                    <p className="mt-0.5 font-nunito text-xs text-[#9C888A]">
                      {cantidad
                        ? `${cantidad} ${cantidad === 1 ? "carta guardada" : "cartas guardadas"}`
                        : "Abrir sobre"}
                    </p>
                  </div>
                </div>

                {/* Flecha discreta a la derecha */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#C4AEB0] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#D88C9A]">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}