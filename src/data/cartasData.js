// ── Base de datos completa de Cartas y Emociones ────────────────────────
// 8 emociones con 6 cartas cada una (48 cartas en total)
export const CARTAS_DATA = {
  emociones: [
    {
      id: "insegura",
      nombre: "Me siento insegura / Tengo dudas",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "insegura_01",
          emocion_id: "insegura",
          titulo: "Nunca dudes de lo que siento",
          texto:
            "Mi amor, si alguna vez las dudas tocan tu puerta, recuerda que mi corazón eligió el tuyo sin condiciones. No hay un universo donde yo no te elija. Cada mañana despierto agradecido de que seas tú quien camina a mi lado. No necesito pensarlo dos veces: eres mi certeza favorita en un mundo lleno de incertidumbre.",
          audio_file: "insegura_01.m4a",
          audio_url: "/static/audios/insegura_01.m4a",
        },
        {
          id: "insegura_02",
          emocion_id: "insegura",
          titulo: "Lo único que no quiero perder",
          texto:
            "A veces pienso que tú apareciste en el peor momento de mi vida, y aun así terminaste convirtiéndote en lo mejor que me ha pasado. Porque antes de conocerte todo se sentía pesado, vacío... como si todos los días pasaran y ya. Pero contigo las cosas cambiaron sin que me diera cuenta: empecé a esperar tus mensajes, a recordar tu voz, a sonreír por cosas pequeñas que antes me habrían dado igual.\n\nSé que no soy alguien especial, no tengo una vida perfecta, no siempre tengo palabras elegantes ni sé amar como las personas normales, pero cuando estoy contigo por primera vez siento que sí puedo darle algo real a alguien. Contigo no solo quiero momentos bonitos; quiero quedarme incluso en los días malos, cuando estés cansada, cuando quieras rendirte, cuando sientas que nadie te entiende. Y si algún día dudas de lo que significas para mí, solo recuerda esto: en un mundo donde nunca tuve casi nada, tú terminaste convirtiéndote en lo único que de verdad no quiero perder.",
          audio_file: "insegura_02.m4a",
          audio_url: "/static/audios/insegura_02.m4a",
        },
        {
          id: "insegura_03",
          emocion_id: "insegura",
          titulo: "Eres más que suficiente",
          texto:
            "Espero que sepas que eres suficiente. Que tu corazón es suficiente. Que eres lo suficientemente alegre, inteligente e interesante. Que tu sonrisa es suficiente, que tu luz es suficiente.\n\nEspero que lo sepas siempre, incluso cuando el estrés de la universidad o el ruido del mundo te hagan dudar de ti misma. Para mí no te falta absolutamente nada; eres el universo entero.",
          audio_file: "insegura_03.m4a",
          audio_url: "/static/audios/insegura_03.m4a",
        },
        {
          id: "insegura_04",
          emocion_id: "insegura",
          titulo: "Obra de arte en carne y hueso",
          texto:
            "Si alguna vez te miras al espejo y dudas de lo increíble que eres, préstame mis ojos un segundo. Verías a una mujer de piel morena que roba suspiros, con ese cabello largo y ondulado en el que quiero perder mis manos, y esos ojitos grandes y expresivos que me desarman con una sola mirada.\n\nNo fuiste modelo por casualidad, mi vida: tu rostro es hipnótico, tu figura esbelta, tus pechos, tus curvas y ese trasero espectacular me vuelven completamente loco. Pero lo que más me ata a ti es que detrás de toda esa belleza arrolladora vive una mente brillante de 25 años capaz de conquistar el mundo. Nadie, nunca, podría competir contigo.",
          audio_file: "insegura_04.m4a",
          audio_url: "/static/audios/insegura_04.m4a",
        },
        {
          id: "insegura_05",
          emocion_id: "insegura",
          titulo: "Sin errores en mi código",
          texto:
            "Me paso horas entre líneas de código estudiando Ingeniería en Sistemas, o desconectándome un rato en Valorant, Fortnite o GTA V Online, y te juro que no hay pantalla, juego ni algoritmo que logre distraerme de lo que siento por ti. \n\nSi mi vida fuera un sistema, tú no eres una variable temporal: eres el núcleo que hace que todo funcione. Después de cuatro años a distancia, mi amor por ti no tiene fallos, no se cuelga y no necesita actualizaciones de lealtad. Eres y serás siempre mi única prioridad.",
          audio_file: "insegura_05.m4a",
          audio_url: "/static/audios/insegura_05.m4a",
        },
        {
          id: "insegura_06",
          emocion_id: "insegura",
          titulo: "Juramento bajo la luna",
          texto:
            "Como aquel Romeo que desafió la noche solo por escuchar la voz de su amada, yo desafiaría cualquier distancia y cualquier silencio solo por recordarte que eres mi destino.\n\nCuatro años separados por kilómetros no han sido una debilidad, sino la prueba más pura de que lo nuestro es inquebrantable. Como en esas novelas románticas que tanto te gusta leer, aunque la trama se ponga difícil, al final de cada capítulo mi corazón siempre vuelve al mismo nombre: el tuyo.",
          audio_file: "insegura_06.m4a",
          audio_url: "/static/audios/insegura_06.m4a",
        },
      ],
    },
    {
      id: "extrano",
      nombre: "Te extraño mucho",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "extrano_01",
          emocion_id: "extrano",
          titulo: "La distancia no puede con nosotros",
          texto:
            "Te extraño con cada latido que da mi corazón. Hay rincones del día donde tu ausencia pesa más que nunca: cuando veo algo gracioso y quiero contártelo, cuando el café huele como esas mañanas juntos, cuando la almohada todavía guarda un poco de tu perfume. Pero cada segundo que pasa es un segundo menos para volver a abrazarte.",
          audio_file: "extrano_01.m4a",
          audio_url: "/static/audios/extrano_01.m4a",
        },
        {
          id: "extrano_02",
          emocion_id: "extrano",
          titulo: "Vínculo perpetuo",
          texto:
            "Eres mía.\nPorque ni tan tuya has sido,\ncomo ya has sido mía.\nY no eres mía como pertenencia ni como un objeto;\neres mía como vínculo perpetuo.\n\nNo importa cuántos kilómetros nos separen hoy ni cuánto tiempo pase entre abrazo y abrazo: nuestras almas firmaron un pacto que la geografía jamás podrá borrar.",
          audio_file: "extrano_02.m4a",
          audio_url: "/static/audios/extrano_02.m4a",
        },
        {
          id: "extrano_03",
          emocion_id: "extrano",
          titulo: "El momento exacto",
          texto:
            "Nos conocimos tarde o tal vez... en el momento adecuado. Porque nunca es tarde ni muy pronto: llegaste justo cuando mi alma te necesitaba encontrar.\n\nY aunque ahora la distancia duela y me haga falta sentir tu piel contra la mía, prefiero mil veces extrañarte a ti a miles de kilómetros que tener a cualquier otra persona a un centímetro.",
          audio_file: "extrano_03.m4a",
          audio_url: "/static/audios/extrano_03.m4a",
        },
        {
          id: "extrano_04",
          emocion_id: "extrano",
          titulo: "Bajo el mismo cielo de Ojos de Ángel",
          texto:
            "¿Recuerdas cuando vimos juntos Ojos de Ángel? Esa historia me enseñó que el amor verdadero sabe esperar, incluso cuando el tiempo y la distancia parecen conspirar en contra.\n\nHoy te extraño tanto que daría lo que fuera por estar a tu lado en el sofá, viéndote reaccionar con esos ojitos saltones y preciosos que tienes, envolviéndote en mis brazos y demostrándote que, igual que en esa serie, yo jamás soltaría tu mano.",
          audio_file: "extrano_04.m4a",
          audio_url: "/static/audios/extrano_04.m4a",
        },
        {
          id: "extrano_05",
          emocion_id: "extrano",
          titulo: "Si tuviera la Teletransportación",
          texto:
            "Si pudiera pedirle un solo deseo a las Esferas del Dragón, no pediría dinero ni fama: pediría la técnica de la Teletransportación de Goku para buscar tu ki y aparecer frente a ti en un segundo.\n\nLlegaría sin avisar, te tomaría por la cintura, hundiría mi rostro en tu cabello largo y ondulado, y recorrería con mis besos tu piel morena hasta quitarte de encima el frío de la distancia. Mientras aprendo a cruzar el espacio, recibe este abrazo invisible que lleva toda mi fuerza.",
          audio_file: "extrano_05.m4a",
          audio_url: "/static/audios/extrano_05.m4a",
        },
        {
          id: "extrano_06",
          emocion_id: "extrano",
          titulo: "Versos contra los kilómetros",
          texto:
            "No hay mapa que mida cuánto te anhelo,\nni reloj que entienda mi dulce tormento;\nsi cuatro años lejos no apagan este fuego,\nes porque tu nombre respira en mi aliento.\n\nExtraño tu voz, tu cuerpo tibio, tu risa traviesa y hasta tus gestos serios. Cada noche que pasa sin ti es un poema incompleto que solo termina cuando por fin te tengo de frente.",
          audio_file: "extrano_06.m4a",
          audio_url: "/static/audios/extrano_06.m4a",
        },
      ],
    },
    {
      id: "insomnio",
      nombre: "No puedo dormir",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "insomnio_01",
          emocion_id: "insomnio",
          titulo: "Déjame ser tu canción de cuna",
          texto:
            "Cierra los ojos, mi vida. Imagina que estoy ahí, acariciando tu cabello mientras te cuento lo mucho que te quiero. No tienes que preocuparte por nada esta noche: el mundo puede esperar, pero tu descanso no. Respira profundo y siente que mis brazos te rodean aunque la distancia diga lo contrario. Duerme tranquila, que yo cuido tus sueños.",
          audio_file: "insomnio_01.m4a",
          audio_url: "/static/audios/insomnio_01.m4a",
        },
        {
          id: "insomnio_02",
          emocion_id: "insomnio",
          titulo: "Mi sueño en un mundo de pesadillas",
          texto:
            "¿Cómo no amarte, vida mía?\nSi eres un sueño\nen un mundo de pesadillas.\n\nSi esta noche el sueño se esconde de ti, cierra tus ojitos hermosos y piensa que ya eres el sueño más bonito que yo he tenido despierto. Descansa en paz, mi reina.",
          audio_file: "insomnio_02.m4a",
          audio_url: "/static/audios/insomnio_02.m4a",
        },
        {
          id: "insomnio_03",
          emocion_id: "insomnio",
          titulo: "Despierto cuidando tu noche",
          texto:
            "Si no puedes dormir ahora mismo, hay una gran probabilidad de que yo también siga despierto frente a la pantalla, terminando algún código de la universidad o en una última partida nocturna... pero siempre con un ojo en el celular por si decides escribirme.\n\nSuelta el teléfono después de leer esto, acomoda tu pelo ondulado sobre la almohada e imagina mi pecho latiendo suave junto a tu oído. Estoy aquí, velando tu calma desde la distancia.",
          audio_file: "insomnio_03.m4a",
          audio_url: "/static/audios/insomnio_03.m4a",
        },
        {
          id: "insomnio_04",
          emocion_id: "insomnio",
          titulo: "Apaga los procesos por hoy",
          texto:
            "Tu mente brillante de biotecnóloga trabaja a mil por hora todo el día entre clases, informes y exámenes, y sé que a veces cuesta ponerle pausa. Déjame darte un consejo de ingeniero en sistemas: cierra todas las pestañas abiertas en tu cabeza, guarda el progreso y entra en modo reposo.\n\nMañana volverás a conquistar el laboratorio y el mundo entero, pero esta madrugada solo te toca cerrar los ojos y dejarte querer.",
          audio_file: "insomnio_04.m4a",
          audio_url: "/static/audios/insomnio_04.m4a",
        },
        {
          id: "insomnio_05",
          emocion_id: "insomnio",
          titulo: "Nuestro capítulo de medianoche",
          texto:
            "Imagina que esta noche es ese capítulo tranquilo y cálido de tu novela de amor adolescente favorita: afuera hace frío, el silencio envuelve la ciudad y adentro solo existimos tú y yo bajo la misma cobija.\n\nAquí no hace falta ser fuerte ni mantener esa coraza fría con la que a veces te proteges del mundo. Aquí puedes bajar la guardia, apoyar tu rostro en mi hombro y dejarte vencer por el sueño mientras te susurro cuánto te amo.",
          audio_file: "insomnio_05.m4a",
          audio_url: "/static/audios/insomnio_05.m4a",
        },
        {
          id: "insomnio_06",
          emocion_id: "insomnio",
          titulo: "Rima de madrugada",
          texto:
            "Cuando la luna toca tu ventana,\ny el silencio despierta tus desvelos,\nrecuerda que mi voz cruza la nada\npara cubrir de paz todos tus cielos.\n\nNo luches contra la madrugada, mi amor. Respira lento, siente mi beso en tu frente y encuéntrame en tus sueños, que yo ya voy de camino hacia ellos.",
          audio_file: "insomnio_06.m4a",
          audio_url: "/static/audios/insomnio_06.m4a",
        },
      ],
    },
    {
      id: "elegiste",
      nombre: "Recuérdame por qué me elegiste",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "elegiste_01",
          emocion_id: "elegiste",
          titulo: "Te elegí y te volvería a elegir",
          texto:
            "Te elegí porque tu risa ilumina los días más grises. Te elegí porque cuando hablas de lo que amas, tus ojos brillan de una forma que me deja sin aliento. Te elegí porque me haces querer ser mejor persona cada día. Y si el tiempo volviera atrás y me pusieran frente a mil caminos, en todos caminaría hacia ti.",
          audio_file: "elegiste_01.m4a",
          audio_url: "/static/audios/elegiste_01.m4a",
        },
        {
          id: "elegiste_02",
          emocion_id: "elegiste",
          titulo: "Mil vidas contigo",
          texto:
            "Gracias por amarme.\nPor elegirme en los días en los que yo no podía elegirme a mí mismo.\nPor amar esas partes de mí que solía esconderle al mundo.\n\nTú no arreglaste mi vida: tú hiciste que valiera la pena vivirla de nuevo. Y si viviera mil vidas, te elegiría a ti cada maldita vez.",
          audio_file: "elegiste_02.m4a",
          audio_url: "/static/audios/elegiste_02.m4a",
        },
        {
          id: "elegiste_03",
          emocion_id: "elegiste",
          titulo: "Eres la excepción",
          texto:
            "Eres la excepción.\nYo siempre huyo, y contigo quise quedarme.\nLa paciencia no es lo mío, y a ti quise esperarte.\nLa confianza no es lo mío, y tú sabes mis secretos.\nSiempre guardo silencio, pero contigo me gusta conversar.\nSiempre me ha gustado la soledad, pero contigo compartiría todo.\nNunca me ha importado la opinión ajena, pero tu voz tiene peso.\nMe gusta vivir el presente, pero contigo elijo el futuro.\n\nY sigo aquí; claramente eres la excepción. ¿Tú crees que soy la tuya?",
          audio_file: "elegiste_03.m4a",
          audio_url: "/static/audios/elegiste_03.m4a",
        },
        {
          id: "elegiste_04",
          emocion_id: "elegiste",
          titulo: "Me enamoré incluso de tu hielo",
          texto:
            "Mucha gente busca amores fáciles y predecibles, pero yo me enamoré de ti tal como eres: de tu carácter firme, de tu inteligencia feroz en la Biotecnología y sí, incluso de esa forma fría que a veces muestras al mundo.\n\nPorque cuando alguien como tú me regala un pedacito de su tiempo escaso, una sonrisa sincera o un gesto tierno, se siente como descubrir un tesoro escondido. Te elegí porque eres auténtica, real y deliciosamente compleja.",
          audio_file: "elegiste_04.m4a",
          audio_url: "/static/audios/elegiste_04.m4a",
        },
        {
          id: "elegiste_05",
          emocion_id: "elegiste",
          titulo: "Cuerpo de diosa, alma de novela",
          texto:
            "No voy a mentirte ni a hacerme el santo: me vuelves loco por dentro y por fuera. Te elegí porque combinas una mente brillante con una belleza que paraliza. Tu piel morena, tu melena larga y ondulada, tu cara preciosa, tu cuerpo delgado con unos senos y un trasero que son pura tentación... eres una fantasía hecha realidad.\n\nPero lo que selló mi destino fue descubrir que esa mujer espectacular de pasarela también suspira con libros de amor adolescente y guarda un corazón enorme que tengo el privilegio de cuidar.",
          audio_file: "elegiste_05.m4a",
          audio_url: "/static/audios/elegiste_05.m4a",
        },
        {
          id: "elegiste_06",
          emocion_id: "elegiste",
          titulo: "Soneto a mis cuatro años contigo",
          texto:
            "No te elegí por prisa ni costumbre,\nni por llenar vacíos de un instante;\nte elegí porque en ti encontré la lumbre\nque hace a mi pecho firme y delirante.\n\nA mis veinticuatro años puedo decir sin temor a equivocarme que la decisión más sabia de mi vida fue apostarlo todo por ti. Cuatro años después, no cambiaría ni un solo día de esta historia.",
          audio_file: "elegiste_06.m4a",
          audio_url: "/static/audios/elegiste_06.m4a",
        },
      ],
    },
    {
      id: "triste",
      nombre: "Me siento triste",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "triste_01",
          emocion_id: "triste",
          titulo: "Tu tristeza también es mía",
          texto:
            "No tienes que ser fuerte todo el tiempo, mi amor. Si hoy el mundo pesa demasiado, déjame cargar un poco contigo. No voy a intentar arreglarlo todo con palabras bonitas; solo quiero que sepas que estoy aquí, firme, esperándote con los brazos abiertos. Llorar no te hace débil, te hace humana. Y yo te amo en cada una de tus versiones.",
          audio_file: "triste_01.m4a",
          audio_url: "/static/audios/triste_01.m4a",
        },
        {
          id: "triste_02",
          emocion_id: "triste",
          titulo: "Tu Semilla del Ermitaño",
          texto:
            "Hasta los guerreros más fuertes de Dragon Ball caen de rodillas cuando la batalla se vuelve demasiado pesada, y no pasa nada por necesitar un respiro.\n\nHoy déjame ser tu Semilla del Ermitaño, mi amor. No te exijas brillar ni resolver nada ahora mismo. Recibe todo mi cariño, respira hondo y recuerda que ninguna tristeza tiene el poder de apagar lo increíble que eres.",
          audio_file: "triste_02.m4a",
          audio_url: "/static/audios/triste_02.m4a",
        },
        {
          id: "triste_03",
          emocion_id: "triste",
          titulo: "Debajo de tu armadura",
          texto:
            "Sé que cuando te duele algo prefieres encerrarte, ponerte fría y demostrar que puedes sola con todo. Admiro esa fuerza tuya, pero conmigo no necesitas ninguna armadura.\n\nSi quieres llorar, llora; si quieres quedarte en silencio mientras yo solo respiro del otro lado de la llamada, lo haré con gusto. Igual que en Ojos de Ángel, mi lugar no es solo cuando brilla el sol, sino cuando más necesitas una mano en la oscuridad.",
          audio_file: "triste_03.m4a",
          audio_url: "/static/audios/triste_03.m4a",
        },
        {
          id: "triste_04",
          emocion_id: "triste",
          titulo: "Lo dejo todo por ti",
          texto:
            "No importa si estoy en medio de una práctica de programación, en plena partida de Valorant o paseando por Los Santos en GTA V: si tú estás triste, apago todo en un segundo.\n\nNingún proyecto, ninguna partida y ninguna distracción valen más que una sola lágrima de tus ojitos hermosos. Llámame o escríbeme aunque sea un punto, y estaré ahí para ti al instante.",
          audio_file: "triste_04.m4a",
          audio_url: "/static/audios/triste_04.m4a",
        },
        {
          id: "triste_05",
          emocion_id: "triste",
          titulo: "Después de la lluvia",
          texto:
            "En todos los libros de amor que amas leer, siempre llegan capítulos donde llueve fuerte y parece que todo se desmorona. Pero también sabes cuál es la regla de oro de las mejores historias: la tormenta siempre pasa, y el protagonista nunca deja sola a la chica que ama.\n\nHoy es solo un capítulo gris, mi vida. Yo sostengo el paraguas contigo hasta que vuelva a salir tu sonrisa.",
          audio_file: "triste_05.m4a",
          audio_url: "/static/audios/triste_05.m4a",
        },
        {
          id: "triste_06",
          emocion_id: "triste",
          titulo: "Elegía contra tus penas",
          texto:
            "Si pudiera robarme tu amargura\ny guardarla en el fondo de mi pecho,\nvolvería a tus ojos la dulzura\ny haría de mis brazos tu refugio y tu lecho.\n\nRecuerda que no estás sola en esta pelea. Aunque hoy duela, mañana volverás a levantarte más hermosa y más valiente que nunca, y yo seguiré aquí aplaudiendo cada paso tuyo.",
          audio_file: "triste_06.m4a",
          audio_url: "/static/audios/triste_06.m4a",
        },
      ],
    },
    {
      id: "enojada",
      nombre: "Estoy enojada",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "enojada_01",
          emocion_id: "enojada",
          titulo: "Incluso enojada, eres mi persona favorita",
          texto:
            "Sé que ahora mismo quisieras lanzarme una almohada (o algo más pesado), y probablemente me lo merezco. Pero quiero que sepas que incluso en medio de la tormenta, no hay otro lugar donde prefiera estar que a tu lado. Tus enojos me importan porque tú me importas. Hablemos, gritemos, lloremos si hace falta, pero no nos soltemos. Nunca.",
          audio_file: "enojada_01.m4a",
          audio_url: "/static/audios/enojada_01.m4a",
        },
        {
          id: "enojada_02",
          emocion_id: "enojada",
          titulo: "No pienso rendirme contigo",
          texto:
            "No pienso rendirme contigo; voy a seguir amándote en todas las formas que lo necesites. No quiero que sientas jamás que me aprovecho de tu bondad o de tus vulnerabilidades.\n\nQuiero arreglar las cosas por más complicadas que parezcan. Voy a respetarte, quiero cuidarte y nunca voy a dejar que dudes de lo que siento por ti, porque voy a hacerte saber cuánto te amo todos los días, hasta el último día de mi vida.",
          audio_file: "enojada_02.m4a",
          audio_url: "/static/audios/enojada_02.m4a",
        },
        {
          id: "enojada_03",
          emocion_id: "enojada",
          titulo: "Nivel Super Saiyajin",
          texto:
            "Admito que cuando te enojas tu aura sube directo a fase Super Saiyajin y siento que estoy a punto de recibir un Kamehameha verbal... pero ni siquiera en tu versión más explosiva me dan ganas de salir corriendo.\n\nRespira hondo, saca toda esa furia si lo necesitas, y cuando baje un poco el humo recuerda que prefiero mil discusiones contigo antes que una vida aburrida y tranquila con alguien que no seas tú.",
          audio_file: "enojada_03.m4a",
          audio_url: "/static/audios/enojada_03.m4a",
        },
        {
          id: "enojada_04",
          emocion_id: "enojada",
          titulo: "Depuremos el error juntos",
          texto:
            "Cuando un programa falla en Ingeniería en Sistemas, uno no borra cuatro años de trabajo brillante: uno se sienta con paciencia, busca dónde estuvo el bug y lo corrige para que el sistema quede mejor que antes.\n\nSi la cagué, dímelo de frente y lo arreglo. Si fue el estrés o un malentendido, lo desarmamos juntos. Estamos en el mismo equipo, mi amor: somos tú y yo contra el problema, jamás tú contra mí.",
          audio_file: "enojada_04.m4a",
          audio_url: "/static/audios/enojada_04.m4a",
        },
        {
          id: "enojada_05",
          emocion_id: "enojada",
          titulo: "Respeto tu silencio, pero no me voy",
          texto:
            "Sé que cuando te molestas mucho te vuelves un bloque de hielo y necesitas tu espacio para enfriar la cabeza. Voy a respetar ese silencio tuyo sin presionarte.\n\nPero que no se te olvide algo mientras te calmas: no estoy lejos por indiferencia, estoy esperando justo en la puerta, con el orgullo guardado en el bolsillo y el corazón en la mano, listo para escucharte cuando decidas hablar.",
          audio_file: "enojada_05.m4a",
          audio_url: "/static/audios/enojada_05.m4a",
        },
        {
          id: "enojada_06",
          emocion_id: "enojada",
          titulo: "Hasta con el ceño fruncido me derrites",
          texto:
            "Es completamente injusto lo hermosa que te ves incluso cuando estás furiosa. Esos ojitos saltones echando chispas, tu gesto serio y ese carácter indomable solo me recuerdan por qué me tienes tan loco.\n\nCuando se te pase el coraje, te debo un abrazo largo, mil besos lentos y toda mi atención para hacer las paces como se debe. Te amo incluso cuando me quieres matar.",
          audio_file: "enojada_06.m4a",
          audio_url: "/static/audios/enojada_06.m4a",
        },
      ],
    },
    {
      id: "cansada",
      nombre: "Estoy cansada",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "cansada_01",
          emocion_id: "cansada",
          titulo: "Hoy descansa, yo me encargo",
          texto:
            "Has dado tanto de ti que mereces un respiro, mi vida. Hoy no tienes que resolver nada, ni sonreír si no quieres, ni fingir que todo está bien. Solo recuéstate, respira y déjame ser tu refugio. Mañana el mundo seguirá ahí, pero esta noche es tuya. Te preparo un té imaginario, te arropo con mis palabras y te prometo que todo va a estar bien.",
          audio_file: "cansada_01.m4a",
          audio_url: "/static/audios/cansada_01.m4a",
        },
        {
          id: "cansada_02",
          emocion_id: "cansada",
          titulo: "Orgulloso de mi futura biotecnóloga",
          texto:
            "Sé lo pesada que es tu carrera y cómo la universidad te exprime cada hora libre que tienes. A veces quisiera secuestrarte de los libros y los laboratorios solo para que pudieras dormir doce horas seguidas.\n\nPero quiero que sepas algo: te admiro con toda el alma. Ver el esfuerzo brutal que le pones a Biotecnología me llena de orgullo. Hoy ya hiciste más que suficiente, brillante mujer; suelta los apuntes y descansa.",
          audio_file: "cansada_02.m4a",
          audio_url: "/static/audios/cansada_02.m4a",
        },
        {
          id: "cansada_03",
          emocion_id: "cansada",
          titulo: "Un masaje pendiente",
          texto:
            "Si estuviera ahí contigo ahora mismo, no te dejaría mover ni un dedo. Te quitaría los zapatos, te recostaría boca abajo y recorrería lentamente tu espalda y tus hombros con mis manos hasta borrar el último nudo de estrés.\n\nAcariciaría tu cabello largo y ondulado, besaría tu piel morena con suavidad y te abrazaría fuerte hasta que tu cuerpo se rindiera al descanso. Te lo dejo anotado con intereses para cuando nos veamos.",
          audio_file: "cansada_03.m4a",
          audio_url: "/static/audios/cansada_03.m4a",
        },
        {
          id: "cansada_04",
          emocion_id: "cansada",
          titulo: "Batería al 1%",
          texto:
            "Hasta el mejor procesador se sobrecalienta si corre al cien por ciento sin parar, y tú llevas días funcionando a máxima potencia. Diagnóstico oficial de tu ingeniero personal: tu batería está al 1% y necesitas recarga urgente.\n\nNo te sientas culpable por no tener tiempo o por estar agotada para hablar mucho hoy. Entiendo perfectamente tus jornadas; duerme tranquila, que mi amor sigue intacto esperándote cuando recuperes energía.",
          audio_file: "cansada_04.m4a",
          audio_url: "/static/audios/cansada_04.m4a",
        },
        {
          id: "cansada_05",
          emocion_id: "cansada",
          titulo: "Escapémonos un rato",
          texto:
            "Hoy declara huelga contra las obligaciones, mi amor. Regálate media hora para leer unas páginas de tu libro de amor adolescente favorito, o imagina que estamos tirados sin hacer nada maratoneando otro drama coreano tan bueno como Ojos de Ángel.\n\nNo tienes que ser productiva cada minuto de tu vida para merecer amor. Te amo exactamente igual cuando conquistas la universidad que cuando solo quieres tirarte en la cama a existir.",
          audio_file: "cansada_05.m4a",
          audio_url: "/static/audios/cansada_05.m4a",
        },
        {
          id: "cansada_06",
          emocion_id: "cansada",
          titulo: "Remanso para tu fatiga",
          texto:
            "Suelta el peso del día, piel morena,\ndeja afuera el afán y las tareas;\nque en el puerto tranquilo de mis brazos\nno existen prisas, dudas ni peleas.\n\nCierra los ojos un momento y respira. Eres increíble, estás haciendo un trabajo extraordinario y mereces todo el descanso del mundo.",
          audio_file: "cansada_06.m4a",
          audio_url: "/static/audios/cansada_06.m4a",
        },
      ],
    },
    {
      id: "feliz",
      nombre: "Me siento feliz",
      cantidad_cartas: 6,
      cartas: [
        {
          id: "feliz_01",
          emocion_id: "feliz",
          titulo: "Tu felicidad es mi lugar favorito",
          texto:
            "Verte feliz es como ver un amanecer después de mil noches oscuras. Tu sonrisa tiene el poder de convertir cualquier día ordinario en extraordinario. Quiero que sepas que tu alegría me contagia, que cuando ríes el mundo se detiene un instante y todo cobra sentido. Nunca dejes de brillar así, porque esa luz tuya me guía a casa.",
          audio_file: "feliz_01.m4a",
          audio_url: "/static/audios/feliz_01.m4a",
        },
        {
          id: "feliz_02",
          emocion_id: "feliz",
          titulo: "El poema perfecto de Dios",
          texto:
            "Si Dios existe, seguro es poeta\ny te escribió a ti\ncon perfección y amor en cada\nuna de tus letras...\n\nY cuando estás feliz como hoy, siento que estoy leyendo mi verso favorito en voz alta. Guárdame un poquito de esa sonrisa para cuando hablemos.",
          audio_file: "feliz_02.m4a",
          audio_url: "/static/audios/feliz_02.m4a",
        },
        {
          id: "feliz_03",
          emocion_id: "feliz",
          titulo: "Mi Victoria Magistral",
          texto:
            "He ganado partidas épicas en Fortnite, rondas imposibles en Valorant y golpes legendarios en GTA V Online, pero te juro que nada en el mundo se compara con la alegría que siento cuando me cuentas que tuviste un buen día.\n\nQue tú estés feliz es mi verdadera victoria definitiva. Cuéntame todo lo que te sacó esa sonrisa hoy, que quiero celebrarlo contigo como si acabáramos de salvar el universo.",
          audio_file: "feliz_03.m4a",
          audio_url: "/static/audios/feliz_03.m4a",
        },
        {
          id: "feliz_04",
          emocion_id: "feliz",
          titulo: "Brillando como en pasarela",
          texto:
            "Cuando estás de buen humor te vuelves todavía más peligrosa para mi corazón. Tu piel morena parece irradiar luz propia, esos ojitos saltones tuyos destellan picardía y alegría, y toda tú —de tu rostro precioso hasta tus curvas perfectas— haces que el mundo entero quede en segundo plano.\n\nDisfruta este momento al máximo, mi reina, porque te mereces mil días así de luminosos.",
          audio_file: "feliz_04.m4a",
          audio_url: "/static/audios/feliz_04.m4a",
        },
        {
          id: "feliz_05",
          emocion_id: "feliz",
          titulo: "Nuestra propia historia de amor",
          texto:
            "Sé que te encantan los libros de amor adolescente donde todo se siente intenso, mágico e inolvidable. Pues cuando te veo feliz hoy, siento que nuestra historia de cuatro años no tiene nada que envidiarle a ningún bestseller.\n\nLo nuestro tiene drama, distancia, pasión, risas y un amor que sobrevive a todo. Y lo mejor de nuestra novela es que todavía nos quedan los mejores capítulos por vivir, ya sin kilómetros de por medio.",
          audio_file: "feliz_05.m4a",
          audio_url: "/static/audios/feliz_05.m4a",
        },
        {
          id: "feliz_06",
          emocion_id: "feliz",
          titulo: "Oda a tu alegría",
          texto:
            "Cuando ríes, mi vida, florece la distancia,\nse acortan los caminos y canta el corazón;\ntu risa es el milagro que llena mi existencia,\nmi verso más sagrado, mi eterna bendición.\n\nTe amo con todo lo que soy, mi biotecnóloga preciosa. Hoy brindo por tu alegría y por todas las veces que nos faltan para reírnos frente a frente.",
          audio_file: "feliz_06.m4a",
          audio_url: "/static/audios/feliz_06.m4a",
        },
      ],
    },
  ],
  extras: {
    audio_amor: "amor_01.m4a",
    audio_amor_url: "/static/audios/amor_01.m4a",
    audios_amor: [
      "amor_01.m4a",
      "amor_02.m4a",
      "amor_03.m4a",
      "amor_04.m4a",
      "amor_05.m4a",
    ],
    audios_amor_urls: [
      "/static/audios/amor_01.m4a",
      "/static/audios/amor_02.m4a",
      "/static/audios/amor_03.m4a",
      "/static/audios/amor_04.m4a",
      "/static/audios/amor_05.m4a",
    ],
    link_broma_final: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
};
