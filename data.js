/* ============================================================
   data.js — ESTRUCTURA DEL ÁLBUM + TRADUCCIONES
   Este es el ÚNICO archivo que editas para cargar los datos.
   Estructura oficial FIFA World Cup 2026:
   48 equipos × 20 (1 foto + 1 escudo + 18 jugadores) + 20 extras = 980
   Los nombres oficiales los cargas tú desde tu álbum/checklist.
   ============================================================ */

window.PER_TEAM = 20;
window.PLAYERS_PER_TEAM = 18;
window.EXTRAS = 20;

/* Las 48 selecciones, EN EL ORDEN DEL ÁLBUM.
   Renombra y reordena según tu álbum oficial. code = sigla, es/en = nombre. */
window.DEFAULT_TEAMS = (function () {
  const teams = [
    { code: "MEX", es: "México", en: "Mexico" },
    { code: "CAN", es: "Canadá", en: "Canada" },
    { code: "USA", es: "Estados Unidos", en: "United States" }
  ];
  // Relleno hasta 48 con placeholders editables
  for (let i = teams.length + 1; i <= 48; i++) {
    const n = String(i).padStart(2, "0");
    teams.push({ code: "T" + n, es: "Equipo " + n, en: "Team " + n });
  }
  return teams;
})();

/* Traducciones de la interfaz (los nombres propios no se traducen) */
window.I18N = {
  es: {
    appTitle: "Álbum Tracker", stickers: "cromos", missing: "Faltan", dupes: "Repetidas", specials: "Especiales",
    fAll: "Todos", fMissing: "Faltan", fOwned: "Pegados", fDup: "Repetidas", fSpecial: "Especiales",
    searchPh: "Buscar jugador, equipo o número...", settings: "Ajustes y datos", offlineNote: "Funciona sin conexión",
    actFill: "Cargar jugadores (CSV)", actFillSub: "Importa nombres por número de cromo",
    actTeams: "Editar equipos", actTeamsSub: "Nombres y orden de las 48 selecciones",
    actExport: "Exportar respaldo", actExportSub: "Guarda tu colección en un archivo .json",
    actImport: "Importar respaldo", actImportSub: "Restaura desde un .json",
    actReset: "Reiniciar colección", actResetSub: "Borra todo el progreso",
    apply: "Aplicar", cancel: "Cancelar",
    instHint: "Esta app trae la estructura del álbum (48 equipos × 20 + extras = 980). Llena los nombres oficiales desde tu propio álbum o checklist con «Cargar jugadores».",
    tEmpty: "Sin resultados.", confirmReset: "¿Borrar todo el progreso?", done: "Listo",
    ioFillTitle: "Cargar jugadores (CSV)", ioFillSub: "Una línea por cromo. Formato:",
    ioFillHint: "Formato: <code>numero,nombre</code> (opcional una 3.ª columna <code>1</code> para marcar especial). Ej:<br><code>3,L. Messi</code><br><code>4,J. Álvarez,1</code>",
    ioTeamsTitle: "Editar equipos", ioTeamsSub: "JSON: lista de 48 equipos en orden del álbum.",
    ioTeamsHint: 'Cada equipo: <code>{"code":"ARG","es":"Argentina","en":"Argentina"}</code>. Al guardar se reconstruye el álbum conservando tu progreso por número.',
    typePhoto: "Foto", typeBadge: "Escudo", typePlayer: "Jugador", typeExtra: "Extra", sectionExtras: "Extras / Especiales"
  },
  en: {
    appTitle: "Album Tracker", stickers: "stickers", missing: "Missing", dupes: "Duplicates", specials: "Specials",
    fAll: "All", fMissing: "Missing", fOwned: "Collected", fDup: "Duplicates", fSpecial: "Specials",
    searchPh: "Search player, team or number...", settings: "Settings & data", offlineNote: "Works offline",
    actFill: "Load players (CSV)", actFillSub: "Import names by sticker number",
    actTeams: "Edit teams", actTeamsSub: "Names and order of the 48 teams",
    actExport: "Export backup", actExportSub: "Save your collection to a .json file",
    actImport: "Import backup", actImportSub: "Restore from a .json",
    actReset: "Reset collection", actResetSub: "Erase all progress",
    apply: "Apply", cancel: "Cancel",
    instHint: "This app ships the album structure (48 teams × 20 + extras = 980). Fill in the official names from your own album or checklist via “Load players”.",
    tEmpty: "No results.", confirmReset: "Erase all progress?", done: "Done",
    ioFillTitle: "Load players (CSV)", ioFillSub: "One line per sticker. Format:",
    ioFillHint: "Format: <code>number,name</code> (optional 3rd column <code>1</code> to mark as special). e.g.:<br><code>3,L. Messi</code><br><code>4,J. Álvarez,1</code>",
    ioTeamsTitle: "Edit teams", ioTeamsSub: "JSON: list of 48 teams in album order.",
    ioTeamsHint: 'Each team: <code>{"code":"ARG","es":"Argentina","en":"Argentina"}</code>. Saving rebuilds the album keeping your progress by number.',
    typePhoto: "Photo", typeBadge: "Badge", typePlayer: "Player", typeExtra: "Extra", sectionExtras: "Extras / Specials"
  }
};
