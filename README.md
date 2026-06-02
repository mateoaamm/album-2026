# Álbum Tracker 2026 ⚽

App offline (PWA) para llevar el control de tu álbum de cromos: marca pegados, repetidas y especiales, con progreso por equipo y global. Bilingüe **ES / EN**, funciona **sin conexión** en Android y iPhone, y guarda todo en el dispositivo (IndexedDB).

## Estructura del álbum

La app genera automáticamente la estructura oficial: **48 equipos × 20 cromos** (1 foto + 1 escudo + 18 jugadores) **+ 20 extras = 980 cromos**.

> **Importante:** la app **no** incluye los nombres oficiales de jugadores ni el orden exacto del checklist de Panini (es contenido propietario). Tú cargas esos datos desde tu propio álbum o checklist mediante la opción *Cargar jugadores*.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Interfaz, estilos y lógica de la app |
| `data.js` | **El que editas:** estructura, 48 equipos y traducciones ES/EN |
| `sw.js` | Service worker (caché offline) |
| `.nojekyll` | Evita que GitHub Pages procese los archivos |
| `ejemplo-jugadores.csv` | Ejemplo del formato para *Cargar jugadores* |

---

## 1) Subir a GitHub

1. Crea un repositorio nuevo (ej. `album-2026`), público.
2. Sube **todos los archivos a la raíz** del repo (sin carpetas).
3. Ve a **Settings → Pages**.
4. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guarda.
5. En 1–2 minutos tendrás la URL: `https://TU_USUARIO.github.io/album-2026/`

## 2) Instalar en iPhone (iOS)

1. Abre la URL en **Safari** (en iOS solo Safari instala PWAs).
2. Botón **Compartir** → **Agregar a inicio** → **Agregar**.
3. Abre la app una vez **con internet** (para que `sw.js` guarde todo en caché).
4. Listo: funciona **offline**, a pantalla completa.

## 3) Instalar en Android

1. Abre la URL en **Chrome**.
2. Aparecerá *Instalar app* (o menú ⋮ → *Instalar aplicación*).

---

## Cargar los datos del álbum

- **⚙ → Cargar jugadores:** pega una línea por cromo en formato `numero,nombre`. Una tercera columna `1` lo marca como especial.
  ```
  3,L. Messi
  4,J. Álvarez,1
  ```
- **⚙ → Editar equipos:** JSON con las 48 selecciones en el orden del álbum:
  ```json
  [{ "code": "ARG", "es": "Argentina", "en": "Argentina" }]
  ```
  Al guardar se reconstruye el álbum **conservando tu progreso por número**.

## Uso

- Toca un cromo → lo marca **pegado**.
- Tócalo de nuevo → suma **repetida** (`×2`, `×3`...).
- Mantén presionado → resta.
- Filtros: Todos / Faltan / Pegados / Repetidas / Especiales.
- Buscador por jugador, equipo o número.

## Respaldo

**⚙ → Exportar respaldo** genera un `.json` con toda tu colección. Hazlo de vez en cuando: iOS puede borrar el almacenamiento de una PWA si el teléfono se queda sin espacio. Restaura con **Importar respaldo**.

## Actualizar la app después de publicada

Si cambias `index.html` o `data.js`, sube la versión en `sw.js` (`album26-v1` → `album26-v2`) y vuelve a subir los archivos. Los dispositivos tomarán la nueva versión al reabrir.

---

## Licencia

Código bajo licencia MIT (ver `LICENSE`). Las marcas, nombres de jugadores y datos oficiales del álbum pertenecen a sus respectivos titulares y no se incluyen en este proyecto.
