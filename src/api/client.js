// ── Conexión al backend FastAPI ───────────────────────────────
export const API_BASE_URL = "https://backendregalo.onrender.com/";

/**
 * Resuelve URLs relativas del backend.
 * Si la URL ya es absoluta la deja intacta; si es relativa le antepone API_BASE_URL.
 */
export function resolveUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${API_BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

// ── Datos de respaldo si el backend aún no se ha encendido ──────
const BACKUP_DATA = {
  emociones: [
    {
      id: "insegura",
      nombre: "Me siento insegura / Tengo dudas",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "insegura_01",
          emocion_id: "insegura",
          titulo: "Nunca dudes de lo que siento",
          texto:
            "Mi amor, si alguna vez las dudas tocan tu puerta, recuerda que mi corazón eligió el tuyo sin condiciones. No hay un universo donde yo no te elija. Cada mañana despierto agradecido de que seas tú quien camina a mi lado. No necesito pensarlo dos veces: eres mi certeza favorita en un mundo lleno de incertidumbre.",
          audio_file: "insegura_01.mp3",
          audio_url: "/static/audios/insegura_01.mp3",
        },
      ],
    },
    {
      id: "extrano",
      nombre: "Te extraño mucho",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "extrano_01",
          emocion_id: "extrano",
          titulo: "La distancia no puede con nosotros",
          texto:
            "Te extraño con cada latido que da mi corazón. Hay rincones del día donde tu ausencia pesa más que nunca: cuando veo algo gracioso y quiero contártelo, cuando el café huele como esas mañanas juntos, cuando la almohada todavía guarda un poco de tu perfume. Pero cada segundo que pasa es un segundo menos para volver a abrazarte.",
          audio_file: "extrano_01.mp3",
          audio_url: "/static/audios/extrano_01.mp3",
        },
      ],
    },
    {
      id: "insomnio",
      nombre: "No puedo dormir",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "insomnio_01",
          emocion_id: "insomnio",
          titulo: "Déjame ser tu canción de cuna",
          texto:
            "Cierra los ojos, mi vida. Imagina que estoy ahí, acariciando tu cabello mientras te cuento lo mucho que te quiero. No tienes que preocuparte por nada esta noche: el mundo puede esperar, pero tu descanso no. Respira profundo y siente que mis brazos te rodean aunque la distancia diga lo contrario. Duerme tranquila, que yo cuido tus sueños.",
          audio_file: "insomnio_01.mp3",
          audio_url: "/static/audios/insomnio_01.mp3",
        },
      ],
    },
    {
      id: "elegiste",
      nombre: "Recuérdame por qué me elegiste",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "elegiste_01",
          emocion_id: "elegiste",
          titulo: "Te elegí y te volvería a elegir",
          texto:
            "Te elegí porque tu risa ilumina los días más grises. Te elegí porque cuando hablas de lo que amas, tus ojos brillan de una forma que me deja sin aliento. Te elegí porque me haces querer ser mejor persona cada día. Y si el tiempo volviera atrás y me pusieran frente a mil caminos, en todos caminaría hacia ti.",
          audio_file: "elegiste_01.mp3",
          audio_url: "/static/audios/elegiste_01.mp3",
        },
      ],
    },
    {
      id: "triste",
      nombre: "Me siento triste",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "triste_01",
          emocion_id: "triste",
          titulo: "Tu tristeza también es mía",
          texto:
            "No tienes que ser fuerte todo el tiempo, mi amor. Si hoy el mundo pesa demasiado, déjame cargar un poco contigo. No voy a intentar arreglarlo todo con palabras bonitas; solo quiero que sepas que estoy aquí, firme, esperándote con los brazos abiertos. Llorar no te hace débil, te hace humana. Y yo te amo en cada una de tus versiones.",
          audio_file: "triste_01.mp3",
          audio_url: "/static/audios/triste_01.mp3",
        },
      ],
    },
    {
      id: "enojada",
      nombre: "Estoy enojada",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "enojada_01",
          emocion_id: "enojada",
          titulo: "Incluso enojada, eres mi persona favorita",
          texto:
            "Sé que ahora mismo quisieras lanzarme una almohada (o algo más pesado), y probablemente me lo merezco. Pero quiero que sepas que incluso en medio de la tormenta, no hay otro lugar donde prefiera estar que a tu lado. Tus enojos me importan porque tú me importas. Hablemos, gritemos, lloremos si hace falta, pero no nos soltemos. Nunca.",
          audio_file: "enojada_01.mp3",
          audio_url: "/static/audios/enojada_01.mp3",
        },
      ],
    },
    {
      id: "cansada",
      nombre: "Estoy cansada",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "cansada_01",
          emocion_id: "cansada",
          titulo: "Hoy descansa, yo me encargo",
          texto:
            "Has dado tanto de ti que mereces un respiro, mi vida. Hoy no tienes que resolver nada, ni sonreír si no quieres, ni fingir que todo está bien. Solo recuéstate, respira y déjame ser tu refugio. Mañana el mundo seguirá ahí, pero esta noche es tuya. Te preparo un té imaginario, te arropo con mis palabras y te prometo que todo va a estar bien.",
          audio_file: "cansada_01.mp3",
          audio_url: "/static/audios/cansada_01.mp3",
        },
      ],
    },
    {
      id: "feliz",
      nombre: "Me siento feliz",
      cantidad_cartas: 1,
      cartas: [
        {
          id: "feliz_01",
          emocion_id: "feliz",
          titulo: "Tu felicidad es mi lugar favorito",
          texto:
            "Verte feliz es como ver un amanecer después de mil noches oscuras. Tu sonrisa tiene el poder de convertir cualquier día ordinario en extraordinario. Quiero que sepas que tu alegría me contagia, que cuando ríes el mundo se detiene un instante y todo cobra sentido. Nunca dejes de brillar así, porque esa luz tuya me guía a casa.",
          audio_file: "feliz_01.mp3",
          audio_url: "/static/audios/feliz_01.mp3",
        },
      ],
    },
  ],
  extras: {
    audio_amor: "amor.mp3",
    audio_amor_url: "/static/audios/amor.mp3",
    link_broma_final: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
};

/**
 * Fetch wrapper con manejo de errores limpio.
 */
async function request(endpoint) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 2500);

  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

// ── Emociones ──────────────────────────────────────────
export async function getEmociones() {
  try {
    const data = await request("/api/emociones");
    const rawList = Array.isArray(data) ? data : data.emociones || [];
    return rawList.map((em) => ({
      ...em,
      cantidad: em.cantidad_cartas ?? em.cantidad ?? 1,
    }));
  } catch (e) {
    // Si el backend no responde, usar datos locales sin romper la UI
    return BACKUP_DATA.emociones.map((em) => ({
      id: em.id,
      nombre: em.nombre,
      cantidad: em.cartas.length,
      cantidad_cartas: em.cartas.length,
    }));
  }
}

// ── Cartas ─────────────────────────────────────────────
export async function getCartasPorEmocion(emocionId) {
  try {
    const data = await request(`/api/cartas?emocion_id=${emocionId}`);
    const rawList = Array.isArray(data) ? data : data.cartas || [];
    return rawList.map((c) => ({
      ...c,
      contenido: c.contenido || c.texto,
      audio_url: resolveUrl(c.audio_url || c.audio),
    }));
  } catch (e) {
    const em = BACKUP_DATA.emociones.find((x) => x.id === emocionId);
    if (em) {
      return em.cartas.map((c) => ({
        ...c,
        contenido: c.texto,
        audio_url: resolveUrl(c.audio_url),
      }));
    }
    return [];
  }
}

export async function getCartaAleatoria(emocionId = null) {
  try {
    const query = emocionId ? `?emocion_id=${emocionId}` : "";
    const carta = await request(`/api/cartas/aleatoria${query}`);
    return {
      ...carta,
      contenido: carta.contenido || carta.texto,
      audio_url: resolveUrl(carta.audio_url || carta.audio),
    };
  } catch (e) {
    let pool = [];
    if (emocionId) {
      const em = BACKUP_DATA.emociones.find((x) => x.id === emocionId);
      if (em) pool = em.cartas;
    } else {
      pool = BACKUP_DATA.emociones.flatMap((x) => x.cartas);
    }
    const carta = pool[Math.floor(Math.random() * pool.length)];
    return {
      ...carta,
      contenido: carta.texto,
      audio_url: resolveUrl(carta.audio_url),
    };
  }
}

export async function getCarta(cartaId) {
  try {
    const carta = await request(`/api/cartas/${cartaId}`);
    return {
      ...carta,
      contenido: carta.contenido || carta.texto,
      audio_url: resolveUrl(carta.audio_url || carta.audio),
    };
  } catch (e) {
    for (const em of BACKUP_DATA.emociones) {
      const c = em.cartas.find((x) => x.id === cartaId);
      if (c) {
        return {
          ...c,
          contenido: c.texto,
          audio_url: resolveUrl(c.audio_url),
        };
      }
    }
    return null;
  }
}

// ── Extras (audio AMOR, link broma) ────────────────────
export async function getExtras() {
  try {
    const extras = await request("/api/extras");
    return {
      ...extras,
      audio_amor_url: resolveUrl(extras.audio_amor_url),
    };
  } catch (e) {
    return {
      ...BACKUP_DATA.extras,
      audio_amor_url: resolveUrl(BACKUP_DATA.extras.audio_amor_url),
    };
  }
}
