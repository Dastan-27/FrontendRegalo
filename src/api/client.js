import { CARTAS_DATA } from "../data/cartasData";

// ── Conexión al backend FastAPI ───────────────────────────────
// Puedes usar tu URL de Render o localhost:8000
export const API_BASE_URL =
  (typeof window !== "undefined" && window.__API_URL__) ||
  "https://backendregalo.onrender.com";

/**
 * Normaliza la URL base quitando barras finales.
 */
function getCleanBaseUrl() {
  return API_BASE_URL.replace(/\/+$/, "");
}

/**
 * Resuelve URLs relativas del backend.
 * Si la URL ya es absoluta la deja intacta; si es relativa le antepone API_BASE_URL sin barras dobles.
 */
export function resolveUrl(url) {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = getCleanBaseUrl();
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${base}${path}`;
}

/**
 * Fetch wrapper con timeout controlado y manejo de errores limpio.
 */
async function request(endpoint) {
  const base = getCleanBaseUrl();
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;

  const controller = new AbortController();
  // 4 segundos para permitir conexión rápida si el backend está activo
  const timeoutId = setTimeout(() => controller.abort(), 4000);

  try {
    const res = await fetch(`${base}${path}`, {
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

// ── 1. Emociones ──────────────────────────────────────────
export async function getEmociones() {
  try {
    const data = await request("/api/emociones");
    const rawList = Array.isArray(data) ? data : data.emociones || [];
    if (rawList.length > 0) {
      return rawList.map((em) => {
        // Encontrar cuántas cartas tiene esta emoción en el dataset completo
        const backupEm = CARTAS_DATA.emociones.find((x) => x.id === em.id);
        const count =
          em.cantidad_cartas ??
          em.total_cartas ??
          backupEm?.cartas?.length ??
          6;
        return {
          ...em,
          cantidad: count,
          cantidad_cartas: count,
        };
      });
    }
  } catch (e) {
    // Si la API no responde o está en reposo (Render spin down), usar las 8 emociones completas
  }

  // Respaldo completo: 8 emociones con sus 6 cartas cada una
  return CARTAS_DATA.emociones.map((em) => ({
    id: em.id,
    nombre: em.nombre,
    cantidad: em.cartas.length,
    cantidad_cartas: em.cartas.length,
  }));
}

// ── 2. Cartas por emoción (devuelve las 6 cartas completas) ──
export async function getCartasPorEmocion(emocionId) {
  try {
    const data = await request(`/api/cartas?emocion_id=${emocionId}`);
    const rawList = Array.isArray(data) ? data : data.cartas || [];
    // Si la API devuelve cartas válidas y completas
    if (rawList.length >= 6) {
      return rawList.map((c) => ({
        ...c,
        contenido: c.contenido || c.texto,
        audio_url: resolveUrl(c.audio_url || c.audio),
      }));
    }
  } catch (e) {
    // Silencioso: pasará a usar el dataset completo de 6 cartas
  }

  // Dataset local completo garantizado con las 6 cartas
  const em = CARTAS_DATA.emociones.find((x) => x.id === emocionId);
  if (em) {
    return em.cartas.map((c) => ({
      ...c,
      contenido: c.texto,
      audio_url: resolveUrl(c.audio_url || `/static/audios/${c.audio_file}`),
    }));
  }
  return [];
}

// ── 3. Carta aleatoria (global o por emoción) ─────────────
export async function getCartaAleatoria(emocionId = null) {
  try {
    const query = emocionId ? `?emocion_id=${emocionId}` : "";
    const carta = await request(`/api/cartas/aleatoria${query}`);
    if (carta && carta.id) {
      return {
        ...carta,
        contenido: carta.contenido || carta.texto,
        audio_url: resolveUrl(carta.audio_url || carta.audio),
      };
    }
  } catch (e) {
    // fallback
  }

  // Selección aleatoria sobre todas las cartas disponibles
  let pool = [];
  if (emocionId) {
    const em = CARTAS_DATA.emociones.find((x) => x.id === emocionId);
    if (em) pool = em.cartas;
  } else {
    pool = CARTAS_DATA.emociones.flatMap((x) => x.cartas);
  }

  if (pool.length === 0) pool = CARTAS_DATA.emociones[0].cartas;
  const carta = pool[Math.floor(Math.random() * pool.length)];

  return {
    ...carta,
    contenido: carta.texto,
    audio_url: resolveUrl(carta.audio_url || `/static/audios/${carta.audio_file}`),
  };
}

// ── 4. Carta por ID ───────────────────────────────────────
export async function getCarta(cartaId) {
  try {
    const carta = await request(`/api/cartas/${cartaId}`);
    if (carta && carta.id) {
      return {
        ...carta,
        contenido: carta.contenido || carta.texto,
        audio_url: resolveUrl(carta.audio_url || carta.audio),
      };
    }
  } catch (e) {
    // fallback
  }

  for (const em of CARTAS_DATA.emociones) {
    const c = em.cartas.find((x) => x.id === cartaId);
    if (c) {
      return {
        ...c,
        contenido: c.texto,
        audio_url: resolveUrl(c.audio_url || `/static/audios/${c.audio_file}`),
      };
    }
  }
  return null;
}

// ── 5. Extras (audio AMOR, link broma) ────────────────────
export async function getExtras() {
  try {
    const extras = await request("/api/extras");
    if (extras && extras.audio_amor_url) {
      return {
        ...extras,
        audio_amor_url: resolveUrl(extras.audio_amor_url),
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    ...CARTAS_DATA.extras,
    audio_amor_url: resolveUrl(CARTAS_DATA.extras.audio_amor_url),
  };
}
