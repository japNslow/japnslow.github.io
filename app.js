// Complete repository database for japNslow (Миша)
const REPOS_DATA = [
  {
    name: "KirillOS",
    titleRu: "KirillOS v0.2 — Собственная 32-битная ОС (x86 Protected Mode)",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Полностью разработан с нуля на языках Си и x86 Ассемблер.",
    descRu: "Полноценная 32-битная монолитная операционная система для архитектуры IA-32. Написана с чистого листа без использования сторонних библиотек и BIOS в Protected Mode. Включает собственный двухстадийный загрузчик MBR (kboot), драйвер контроллера прерываний PIC 8259A и таблицы дескрипторов прерываний IDT, драйвер аппаратной клавиатуры (IRQ1), собственную дисковую файловую систему KirillFS для ATA-накопителей, графический видеорежим VGA Mode 13h (320x200, 256 цветов напрямую через регистры CRTC/Sequencer), аудиодрайвер Intel AC'97 с поддержкой DMA Bus-Mastering и PC Speaker, интерактивный двухпанельный hex-редактор Kdhe с возможностью редактирования секторов LBA диска, текстовый редактор Kano (полноценный клон GNU nano с аппаратным курсором), музыкальный трекер Kmidi с виртуальной фортепианной клавиатурой, а также собственный двухстадийный компилятор KHEXD для кастомного языка программирования K!",
    category: ["author", "flagship", "lowlevel"],
    primaryLang: "C",
    langBreakdown: { "C": "368 KB", "Assembly": "8 KB", "Batch": "6 KB", "Python": "2 KB", "Linker": "1 KB" },
    sizeKB: 205,
    createdAt: "2026-09-24",
    pushedAt: "2026-09-26",
    tags: ["x86 Protected Mode", "OS Development", "VGA Mode 13h", "Intel AC'97", "KirillFS", "Kano (nano)", "Kdhe Hex", "Kmidi Tracker", "KHEXD Compiler", "C", "ASM"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/KirillOS",
    icon: "💻"
  },
  {
    name: "64-raycasting",
    titleRu: "C64 3D Raycasting Engine (Multicolor Bitmap Mode 160x200)",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Собственный движок трехмерной графики для 8-битного ретро-компьютера Commodore 64.",
    descRu: "Высокооптимизированный псевдотрехмерный графический движок (в стиле Wolfenstein 3D и DOOM) для культового домашнего компьютера Commodore 64 (микропроцессор MOS 6510 на тактовой частоте всего 1.0 МГц и 64 КБ памяти). Полный отказ от медленного текстового режима PETSCII в пользу полноценного растрового режима 160x200 Multicolor Bitmap Mode с прямой записью в видеопамять чипа VIC-II ($6000–$7F3F) и Color RAM ($D800). Оснащен текстурированием стен (стальные бронелисты DOOM Steel Wall с заклепками, герметичные шлюзовые двери DOOM AirLock, синий замковый камень с золотым медальоном, красный кирпич и деревянные панели), перспективным текстурированным полом, directional shading (затенение стен по осям X/Y для глубины) и полноценным управлением с аппаратного джойстика в Port 2 с поддержкой стрейфа.",
    category: ["author", "flagship", "lowlevel", "retro", "gamedev"],
    primaryLang: "C",
    langBreakdown: { "C": "30 KB", "Python": "6 KB", "Makefile": "1 KB", "Batch": "1 KB" },
    sizeKB: 51,
    createdAt: "2026-09-25",
    pushedAt: "2026-09-25",
    tags: ["Commodore 64", "MOS 6510 @ 1MHz", "VIC-II Bitmap", "Raycasting 3D", "DOOM Textures", "Port 2 Joystick", "Retro Engineering", "C", "Python Tables"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/64-raycasting",
    icon: "🕹️"
  },
  {
    name: "doom-ios-port",
    titleRu: "DOOM Classic Native iOS Port & Toolchain",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Адаптация, сборка движка id Software DOOM и генерация готового пакета Doom.ipa.",
    descRu: "Нативный порт и среда сборки легендарного шутера id Software DOOM под мобильную операционную систему Apple iOS. Проект включает адаптацию исходного кода оригинального движка на языках C, C++ и Objective-C/C++ под требования современных компиляторов LLVM/Clang и iOS SDK, набор служебных инструментов конвертации ресурсов doomtool, а также собранный готовый к установке на устройства файл Doom.ipa объемом более 11 МБ с полноценными WAD-файлами и поддержкой сенсорного ввода.",
    category: ["author", "flagship", "lowlevel", "retro", "gamedev"],
    primaryLang: "C++",
    langBreakdown: { "C++": "5.0 MB", "C": "700 KB", "Objective-C": "61 KB", "Objective-C++": "17 KB", "Makefile": "3 KB" },
    sizeKB: 11825,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-27",
    tags: ["DOOM", "iOS Native", "Doom.ipa (11MB)", "C++", "C", "Objective-C", "Game Engine Port", "Retro Gaming"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/doom-ios-port",
    icon: "🔥"
  },
  {
    name: "AppleII-webemu",
    titleRu: "Apple II Vintage Computer Web Emulator (JavaScript Canvas)",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Собственный веб-эмулятор винтажного Apple II на чистом Canvas без сторонних библиотек.",
    descRu: "Полноценный браузерный эмулятор винтажного микрокомпьютера Apple II на чистом JavaScript и HTML5 Canvas. Включает потактовую программную эмуляцию 8-битного процессора MOS Technology 6502, точную репликацию всех видеорежимов (Text 40x24, Lo-Res 40x48 цветной, Hi-Res 280x192 цветной с артефактными цветами NTSC), эмуляцию контроллера дисковода Disk II с возможностью монтирования образов дисков .dsk, генерацию звука системного динамика через Web Audio API, встроенную клавиатуру и набор тестовых программ. Развернут и доступен для интерактивной работы на GitHub Pages!",
    category: ["author", "pages", "flagship", "lowlevel", "retro", "gamedev"],
    primaryLang: "JavaScript",
    langBreakdown: { "JavaScript": "105 KB", "CSS": "12 KB", "HTML": "9 KB" },
    sizeKB: 325,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-26",
    tags: ["Apple II", "MOS 6502 CPU", "Disk II (.dsk)", "Hi-Res Graphics", "Web Audio API", "HTML5 Canvas", "Live on GitHub Pages"],
    isFlagship: true,
    isAbandoned: false,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/AppleII-webemu/",
    repoUrl: "https://github.com/japNslow/AppleII-webemu",
    icon: "🍏"
  },
  {
    name: "learn-gdscript",
    titleRu: "Курс GDScript (Godot 4) — Полный перевод на русский язык",
    authorship: "translation",
    authorshipLabel: "🇷🇺 Полный перевод на русский от Миши",
    authorshipNote: "Форк проекта GDQuest: Миша полностью локализовал курс на русский язык и развернул его на Pages.",
    descRu: "Интерактивная браузерная платформа для изучения языка программирования GDScript игрового движка Godot Engine 4 с нуля. Проект является форком популярного курса от GDQuest, в котором Миша проделал колоссальную работу по ПОЛНОМУ переводу на русский язык: переведены все текстовые уроки, терминология, практические задания, интерактивные мини-игры и интерфейс пользователя. Миша интегрировал переводы в движок через TranslationManager Godot 4, настроил конфигурацию экспорта и создал CI/CD пайплайн сборки Godot Web, благодаря чему русскоязычный интерактивный учебник работает онлайн прямо в браузере на GitHub Pages!",
    category: ["translation", "pages", "fork", "gamedev"],
    primaryLang: "GDScript",
    langBreakdown: { "GDScript": "752 KB", "BBCode": "295 KB", "Python": "30 KB", "CSS": "4 KB", "HTML": "2 KB" },
    sizeKB: 302115,
    createdAt: "2026-09-27",
    pushedAt: "2026-09-27",
    tags: ["Полная русская локализация", "Godot 4", "GDScript", "Интерактивное обучение", "TranslationManager", "WebAssembly", "Live на Pages"],
    isFlagship: true,
    isAbandoned: false,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/learn-gdscript/",
    repoUrl: "https://github.com/japNslow/learn-gdscript",
    icon: "🤖"
  },
  {
    name: "kymis-puzzle",
    titleRu: "«Кумыс Пазл» — Японские пятнашки 3x3 с наградой кумысом",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Авторская мини-игра мая 2026 года на чистом HTML5 и JavaScript.",
    descRu: "Оригинальная браузерная головоломка в формате пятнашек 3x3 (Slider Puzzle). Выполнена с восточным колоритом и добрым юмором: при перемещении плиток формируется выигрышная комбинация, а после победы игрок получает случайную генерацию выпитых целебных литров кумыса. Алгоритм игры использует обратный цикл перестановок для гарантии 100% разрешимости поля при каждом старте. Написана на чистом JavaScript без фреймворков и доступна на GitHub Pages.",
    category: ["author", "pages", "gamedev", "abandoned"],
    primaryLang: "HTML",
    langBreakdown: { "HTML / JS": "16 KB" },
    sizeKB: 6,
    createdAt: "2026-05-28",
    pushedAt: "2026-05-28",
    tags: ["Авторская игра", "Кумыс", "Пятнашки 3x3", "JavaScript", "HTML5 Canvas/DOM", "Гарантированная разрешимость"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/kymis-puzzle/",
    repoUrl: "https://github.com/japNslow/kymis-puzzle",
    icon: "🐎"
  },
  {
    name: "game",
    titleRu: "Кликер реакции на 3 секунды («Я тебя люблю»)",
    authorship: "author",
    authorshipLabel: "👑 Авторский проект Миши",
    authorshipNote: "Авторская игра-шутка на проверку предельной скорости нажатий.",
    descRu: "Забавная мини-игра на экстремальную скорость пальцев и реакцию: пользователю дается таймер всего в 3.0 секунды, за которые нужно успеть ввести имя и совершить 5 быстрых кликов по пульсирующей кнопке. В случае успеха открывается праздничный экран победы, а в случае поражения игра шутливо блокирует контекстное меню и мышь. Написана на чистом HTML5/JS и работает на GitHub Pages.",
    category: ["author", "pages", "gamedev", "abandoned"],
    primaryLang: "HTML",
    langBreakdown: { "HTML / JS": "7 KB" },
    sizeKB: 3,
    createdAt: "2026-05-29",
    pushedAt: "2026-05-29",
    tags: ["Авторский кликер", "Тест реакции", "Таймер 3 сек", "HTML5", "JavaScript", "Шуточная игра"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/game/",
    repoUrl: "https://github.com/japNslow/game",
    icon: "⚡"
  },
  {
    name: "zcb3",
    titleRu: "zcb3 — Geometry Dash Clickbot (Резервная копия / Форк)",
    authorship: "fork",
    authorshipLabel: "🔱 Форк / Резервная копия",
    authorshipNote: "Форк стороннего проекта. Миша сохранил его в свой GitHub как бэкап на всякий случай.",
    descRu: "Форк открытого кликбота для популярной ритм-игры Geometry Dash, написанного на языке программирования Rust сообществом zcb3. Проект предназначен для воспроизведения макросов с точным звуковым сопровождением кликов мыши и клавиш. Миша не является автором исходного кода этого кликбота — репозиторий был форкнут и сохранен в профиле в качестве резервной копии «на всякий случай». Имеет страницу на GitHub Pages.",
    category: ["fork", "pages", "abandoned"],
    primaryLang: "Rust",
    langBreakdown: { "Rust": "492 KB", "HTML": "3 KB" },
    sizeKB: 33949,
    createdAt: "2026-06-23",
    pushedAt: "2026-06-23",
    tags: ["Форк / Бэкап", "Rust (492 KB)", "Geometry Dash", "Clickbot", "Резервная копия"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/zcb3/",
    repoUrl: "https://github.com/japNslow/zcb3",
    icon: "🦀"
  },
  {
    name: "LayoutGenerator",
    titleRu: "LayoutGenerator — Процедурный генератор для GD (Форк / Бэкап)",
    authorship: "fork",
    authorshipLabel: "🔱 Форк / Резервная копия",
    authorshipNote: "Форк мода от profdragon на C++. Скопирован Мишей на всякий случай в качестве бэкапа.",
    descRu: "Форк модификации для Geometry Dash на базе фреймворка Geode SDK, разработанной profdragon. Мод предназначен для автоматической процедурной генерации схем уровней (лейаутов) под музыкальный ритм трека. Миша не писал этот проект — исходный код был форкнут и скопирован в личный GitHub профиль как резервная копия на всякий случай, чтобы сохранить рабочую версию исходников C++ мода.",
    category: ["fork", "gamedev", "abandoned"],
    primaryLang: "C++",
    langBreakdown: { "C++": "89 KB", "CMake": "1 KB" },
    sizeKB: 241,
    createdAt: "2026-06-18",
    pushedAt: "2026-06-17",
    tags: ["Форк / Бэкап", "C++ (89 KB)", "Geode SDK", "Geometry Dash Mod", "Резервная копия"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/LayoutGenerator",
    icon: "📐"
  },
  {
    name: "bk0010-emulator",
    titleRu: "БК-0010 Эмулятор — Советский 16-битный ПК (Концепт)",
    authorship: "author",
    authorshipLabel: "👑 Авторская задумка Миши",
    authorshipNote: "Инициализированный проект эмулятора советского компьютера БК-0010.",
    descRu: "Задумка авторского эмулятора легендарного советского 16-битного домашнего и учебного микрокомпьютера «Электроника БК-0010» (процессор К1801ВМ1, архитектура PDP-11, видеорежим 512x256 монохром или 256x256 4 цвета). Репозиторий был инициализирован в сентябре 2026 года и пока остается пустым, так как основные силы Миши были сосредоточены на завершении KirillOS и Commodore 64 Raycaster.",
    category: ["author", "lowlevel", "retro", "abandoned"],
    primaryLang: "Retro",
    langBreakdown: {},
    sizeKB: 0,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-26",
    tags: ["Авторский концепт", "БК-0010", "К1801ВМ1", "PDP-11", "СССР Ретро", "В планах"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/bk0010-emulator",
    icon: "📺"
  },
  {
    name: "voice-bot",
    titleRu: "Voice Bot — Экспериментальный голосовой бот (Приватный)",
    authorship: "author",
    authorshipLabel: "👑 Авторский эксперимент Миши",
    authorshipNote: "Приватный репозиторий для тестирования голосовых API на JavaScript.",
    descRu: "Небольшой авторский приватный проект на JavaScript, созданный для экспериментов с голосовыми интерфейсами, обработкой аудиопотоков и бот-автоматизацией. Состоит из одного файла скрипта. Проект выполнил тестовую роль и был переведен в архив.",
    category: ["author", "abandoned"],
    primaryLang: "JavaScript",
    langBreakdown: { "JavaScript": "1 KB" },
    sizeKB: 1,
    createdAt: "2026-09-20",
    pushedAt: "2026-09-20",
    tags: ["Авторский проект", "JavaScript", "Voice API", "Приватный архив"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/voice-bot",
    icon: "🎙️"
  },
  {
    name: "japan",
    titleRu: "japan — Первый репозиторий аккаунта (28 мая 2026)",
    authorship: "author",
    authorshipLabel: "👑 Исторический артефакт Миши",
    authorshipNote: "Первый тестовый репозиторий в момент регистрации профиля.",
    descRu: "Самый первый репозиторий, созданный Мишей в день регистрации аккаунта japNslow — 28 мая 2026 года в 13:58 UTC. Содержит только стандартный файл README с заголовком '# japan'. Это исторический реликт основания аккаунта, оставленный на память о первых минутах на GitHub.",
    category: ["author", "abandoned"],
    primaryLang: "Text",
    langBreakdown: {},
    sizeKB: 0,
    createdAt: "2026-05-28",
    pushedAt: "2026-05-28",
    tags: ["История аккаунта", "28 мая 2026", "Первый репозиторий", "Реликт"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/japan",
    icon: "⛩️"
  }
];

// App State
let currentFilter = 'all';
let currentSort = 'newest';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderPagesShowcase();
  renderCatalog();
  setupEventListeners();
  initTerminal();
});

// Render GitHub Pages Showcase
function renderPagesShowcase() {
  const container = document.getElementById('pagesShowcaseContainer');
  if (!container) return;

  const pagesRepos = REPOS_DATA.filter(r => r.isPages && r.pagesUrl);
  container.innerHTML = pagesRepos.map(repo => `
    <div class="page-card">
      <div>
        <div class="card-top">
          <div class="card-icon-title">
            <div class="card-icon">${repo.icon}</div>
            <div class="card-title-text">
              <h3><a href="${repo.pagesUrl}" target="_blank" rel="noopener">${repo.name}</a></h3>
              <div style="font-size: 0.78rem; font-family: var(--font-mono); margin-top: 2px;">
                <span style="color: var(--accent-cyan);">${repo.primaryLang}</span>
                <span style="color: var(--text-dim); margin-left: 6px;">•</span>
                <span style="color: ${repo.authorship === 'author' ? 'var(--accent-amber)' : (repo.authorship === 'translation' ? 'var(--accent-blue)' : 'var(--text-dim)')}; margin-left: 6px; font-weight: 600;">${repo.authorshipLabel}</span>
              </div>
            </div>
          </div>
          <span class="live-badge">
            <span class="live-dot"></span>
            Online
          </span>
        </div>

        <div style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 600; margin-bottom: 8px;">
          ${repo.authorshipNote}
        </div>

        <p class="card-desc">${repo.descRu}</p>

        <div class="card-tags">
          ${repo.tags.slice(0, 4).map(t => `<span class="tag tag-cyan">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card-actions">
        <a href="${repo.pagesUrl}" target="_blank" rel="noopener" class="btn-card-live">
          <span>Открыть сайт</span> ↗
        </a>
        <button class="btn-card-preview" onclick="openPreviewModal('${repo.name}', '${repo.pagesUrl}')" title="Быстрый просмотр во встроенном фрейме">
          <span>Превью</span> 👁️
        </button>
        <a href="${repo.repoUrl}" target="_blank" rel="noopener" class="btn-card-repo" title="Исходный код на GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      </div>
    </div>
  `).join('');
}

// Render All Repos Catalog
function renderCatalog() {
  const container = document.getElementById('reposGridContainer');
  const countEl = document.getElementById('filteredReposCount');
  if (!container) return;

  let filtered = REPOS_DATA.filter(repo => {
    // Category match
    if (currentFilter === 'all') return true;
    if (currentFilter === 'pages' && !repo.isPages) return false;
    if (currentFilter === 'author' && repo.authorship !== 'author') return false;
    if (currentFilter === 'translation' && repo.authorship !== 'translation') return false;
    if (currentFilter === 'fork' && repo.authorship !== 'fork' && repo.authorship !== 'translation') return false;
    if (currentFilter === 'flagship' && !repo.isFlagship) return false;
    if (currentFilter === 'lowlevel' && !repo.category.includes('lowlevel')) return false;
    if (currentFilter === 'retro' && !repo.category.includes('retro')) return false;
    if (currentFilter === 'gamedev' && !repo.category.includes('gamedev')) return false;
    if (currentFilter === 'abandoned' && !repo.isAbandoned) return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = repo.name.toLowerCase().includes(q);
      const matchDesc = (repo.descRu || '').toLowerCase().includes(q);
      const matchNote = (repo.authorshipNote || '').toLowerCase().includes(q);
      const matchLang = (repo.primaryLang || '').toLowerCase().includes(q);
      const matchTags = repo.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchNote && !matchLang && !matchTags) return false;
    }

    return true;
  });

  // Sort
  if (currentSort === 'newest') {
    filtered.sort((a, b) => new Date(b.pushedAt || b.createdAt) - new Date(a.pushedAt || a.createdAt));
  } else if (currentSort === 'oldest') {
    filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  } else if (currentSort === 'size') {
    filtered.sort((a, b) => b.sizeKB - a.sizeKB);
  } else if (currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (countEl) {
    countEl.textContent = `Найдено: ${filtered.length} из ${REPOS_DATA.length}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-dim);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">В этой вкладке ничего не найдено 🔍</p>
        <p style="font-size: 0.9rem;">Попробуйте выбрать другую вкладку или сбросить поисковый запрос.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(repo => {
    let authorshipBadgeHtml = '';
    if (repo.authorship === 'author') {
      authorshipBadgeHtml = `<span class="tag tag-amber" style="font-size:0.7rem; font-weight:700;">👑 Авторский</span>`;
    } else if (repo.authorship === 'translation') {
      authorshipBadgeHtml = `<span class="tag tag-blue" style="font-size:0.7rem; font-weight:700; color:#4facfe; border-color:#4facfe;">🇷🇺 Перевод Миши</span>`;
    } else if (repo.authorship === 'fork') {
      authorshipBadgeHtml = `<span class="tag" style="font-size:0.7rem; color:var(--text-dim);">🔱 Форк/Бэкап</span>`;
    }

    return `
      <div class="repo-card">
        <div class="repo-card-top">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.5rem;">${repo.icon}</span>
            <div>
              <a href="${repo.repoUrl}" target="_blank" rel="noopener" class="repo-name-link">
                ${repo.name}
              </a>
              <div style="font-size: 0.76rem; color: var(--text-dim); font-family: var(--font-mono);">
                Создан: ${repo.createdAt}
              </div>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
            ${authorshipBadgeHtml}
            ${repo.isPages ? '<span class="tag tag-green" style="font-size:0.68rem; font-weight:700;">🌐 Pages</span>' : ''}
          </div>
        </div>

        <div style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 600; margin-bottom: 6px;">
          ${repo.authorshipNote}
        </div>

        <p class="repo-card-desc">${repo.descRu}</p>

        <div class="card-tags" style="margin-bottom: 14px;">
          ${repo.tags.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>

        <div class="repo-card-meta">
          <div class="repo-lang-badge">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${getLangColor(repo.primaryLang)};"></span>
            <span>${repo.primaryLang || 'Code'}</span>
            <span style="color: var(--text-dim); margin-left: 6px;">(${repo.sizeKB > 1024 ? (repo.sizeKB/1024).toFixed(1) + ' МБ' : repo.sizeKB + ' КБ'})</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            ${repo.pagesUrl ? `
              <button onclick="openPreviewModal('${repo.name}', '${repo.pagesUrl}')" style="background:none; border:none; color:var(--accent-cyan); font-size:0.8rem; cursor:pointer; font-weight:600; padding:0;">
                Превью 👁️
              </button>
              <a href="${repo.pagesUrl}" target="_blank" rel="noopener" style="color:var(--accent-green); font-size:0.8rem; text-decoration:none; font-weight:600;">
                Сайт ↗
              </a>
            ` : ''}
            <a href="${repo.repoUrl}" target="_blank" rel="noopener" style="color:var(--text-muted); font-size:0.8rem; text-decoration:none;">
              GitHub →
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function getLangColor(lang) {
  const map = {
    'C': '#555555',
    'C++': '#f34b7d',
    'Rust': '#dea584',
    'GDScript': '#355570',
    'JavaScript': '#f1e05a',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Python': '#3572A5',
    'Retro': '#00f2fe'
  };
  return map[lang] || '#8b949e';
}

// Event Listeners
function setupEventListeners() {
  // Tabs
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter') || 'all';
      renderCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById('repoSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('repoSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // Close modal on Esc or click overlay
  const modalOverlay = document.getElementById('previewModalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closePreviewModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePreviewModal();
    }
  });
}

// Modal Functions
window.openPreviewModal = function(title, url) {
  const overlay = document.getElementById('previewModalOverlay');
  const titleEl = document.getElementById('modalTitleText');
  const frame = document.getElementById('modalFrame');
  const extBtn = document.getElementById('modalExternalLink');

  if (!overlay || !frame) return;

  titleEl.textContent = `Превью: ${title} (${url})`;
  frame.src = url;
  extBtn.href = url;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closePreviewModal = function() {
  const overlay = document.getElementById('previewModalOverlay');
  const frame = document.getElementById('modalFrame');
  if (!overlay) return;

  overlay.classList.remove('active');
  if (frame) frame.src = 'about:blank';
  document.body.style.overflow = '';
};

// Interactive KirillOS Terminal Emulation
function initTerminal() {
  const output = document.getElementById('terminalOutput');
  const input = document.getElementById('terminalInput');
  if (!output || !input) return;

  // Print initial banner
  printTerminalWelcome(output);

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      input.value = '';
      if (cmd) {
        handleTerminalCommand(cmd, output);
      }
    }
  });

  window.runTermCmd = function(cmd) {
    input.value = '';
    handleTerminalCommand(cmd, output);
  };
}

function printTerminalWelcome(output) {
  output.innerHTML = `
    <div class="term-line term-green">[kboot] 32-bit Protected Mode initialized. AC'97 sound: ready. KirillFS: mounted.</div>
    <div class="term-line term-dim">Добро пожаловать в веб-эмуляцию консоли KirillOS v0.2. Разработчик: <span class="term-yellow">Миша (japNslow)</span>. Введите <span class="term-cyan">help</span> для списка команд.</div>
    <div class="term-line">&nbsp;</div>
  `;
}

function handleTerminalCommand(cmd, output) {
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = `<span class="term-prompt">misha@kirillos:~$</span> <span class="term-white">${escapeHtml(cmd)}</span>`;
  output.appendChild(line);

  const cleanCmd = cmd.toLowerCase().trim();

  const res = document.createElement('div');
  res.className = 'term-line';

  switch (cleanCmd) {
    case 'help':
      res.innerHTML = `
<span class="term-cyan">Доступные команды терминала KirillOS:</span>
  <span class="term-yellow">kfetch</span>     - Системный инфо-баннер с ASCII-логотипом KirillOS v0.2
  <span class="term-yellow">projects</span>   - Авторские разработки Миши
  <span class="term-yellow">pages</span>      - Все развернутые GitHub Pages сайты
  <span class="term-yellow">trans</span>      - О переводе курса Godot GDScript на русский язык
  <span class="term-yellow">c64</span>        - О движке 3D Raycasting для Commodore 64
  <span class="term-yellow">matrix</span>     - Запустить цифровой дождь матрицы
  <span class="term-yellow">date</span>       - Прочитать аппаратные часы CMOS RTC
  <span class="term-yellow">clear</span>      - Очистить терминал
      `;
      break;

    case 'kfetch':
      const now = new Date();
      const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 8);
      res.innerHTML = `
<pre style="font-family: inherit; margin: 0; line-height: 1.25;">
<span class="term-cyan">  _  ___      _ _ _  ____   _____ </span>   <span class="term-yellow">misha</span>@<span class="term-green">kirillos</span>
<span class="term-cyan"> | |/ (_)    (_) | |/ __ \\ / ____|</span>   <span class="term-dim">----------------------------</span>
<span class="term-cyan"> | ' / _ _ __ _| | | |  | | (___  </span>   <span class="term-cyan">OS:</span>       <span class="term-white">KirillOS v0.2 (x86 32-bit Protected Mode)</span>
<span class="term-cyan"> |  < | | '__| | | | |  | |\\___ \\ </span>   <span class="term-cyan">Kernel:</span>   <span class="term-dim">Monolithic ELF32 + kboot MBR (LBA 0)</span>
<span class="term-cyan"> | . \\| | |  | | | | |__| |____) |</span>   <span class="term-cyan">RTC Time:</span> <span class="term-green">${dateStr} (CMOS RTC)</span>
<span class="term-cyan"> |_|\\_\\_|_|  |_|_|_|\\____/|_____/ </span>   <span class="term-cyan">Display:</span>  <span class="term-white">VGA 80x25 Text & Mode 13h (320x200x256)</span>
                                     <span class="term-cyan">Audio:</span>    <span class="term-dim">Intel AC'97 (DMA 48kHz) + PC Speaker</span>
                                     <span class="term-cyan">Disk/FS:</span>  <span class="term-dim">ATA PIO 64 MiB (KirillFS: 32 files, Disk LBA 321)</span>
                                     <span class="term-cyan">Memory:</span>   <span class="term-white">128 MiB RAM (KHeap: 64 KB Arena)</span>
                                     <span class="term-cyan">Features:</span> <span class="term-yellow">Kdhe Hex-Editor, Kano Nano-Clone, Kmidi, KHEXD</span>
                                     <span style="background:#000;color:#000">   </span><span style="background:#00a;color:#00a">   </span><span style="background:#0a0;color:#0a0">   </span><span style="background:#0aa;color:#0aa">   </span><span style="background:#a00;color:#a00">   </span><span style="background:#a0a;color:#a0a">   </span><span style="background:#a50;color:#a50">   </span><span style="background:#aaa;color:#aaa">   </span>
                                     <span style="background:#555;color:#555">   </span><span style="background:#55f;color:#55f">   </span><span style="background:#5f5;color:#5f5">   </span><span style="background:#5ff;color:#5ff">   </span><span style="background:#f55;color:#f55">   </span><span style="background:#f5f;color:#f5f">   </span><span style="background:#ff5;color:#ff5">   </span><span style="background:#fff;color:#fff">   </span>
</pre>
      `;
      break;

    case 'projects':
      res.innerHTML = `
<span class="term-cyan">★ Авторские проекты Миши:</span>
  1. <span class="term-white">KirillOS</span> - 32-битная x86 операционная система с нуля
  2. <span class="term-white">64-raycasting</span> - 3D движок для Commodore 64 (160x200 Multicolor)
  3. <span class="term-white">doom-ios-port</span> - Порт и сборка DOOM Classic для iOS (Doom.ipa)
  4. <span class="term-white">AppleII-webemu</span> - Браузерный эмулятор Apple II на Canvas (MOS 6502)
  5. <span class="term-white">kymis-puzzle</span> & <span class="term-white">game</span> - Авторские веб-игры мая 2026 года
      `;
      break;

    case 'trans':
      res.innerHTML = `
<span class="term-green">🇷🇺 learn-gdscript — Полная русская локализация от Миши:</span>
  • Форк проекта GDQuest, полностью переведенный Мишей на русский язык.
  • Переведены все обучающие уроки, интерактивные задания и UI.
  • Настроен TranslationManager Godot 4 и автодеплой сборки на GitHub Pages.
  • Ссылка: <a href="https://japnslow.github.io/learn-gdscript/" target="_blank" class="term-cyan">https://japnslow.github.io/learn-gdscript/</a>
      `;
      break;

    case 'pages':
      res.innerHTML = `
<span class="term-green">🌐 Активные сайты GitHub Pages (japnslow.github.io):</span>
  • <a href="https://japnslow.github.io/learn-gdscript/" target="_blank" class="term-cyan">learn-gdscript</a>: Онлайн-учебник GDScript (полный русский перевод Миши)
  • <a href="https://japnslow.github.io/AppleII-webemu/" target="_blank" class="term-cyan">AppleII-webemu</a>: Эмулятор Apple II в браузере (авторский проект)
  • <a href="https://japnslow.github.io/kymis-puzzle/" target="_blank" class="term-cyan">kymis-puzzle</a>: Пятнашки с кумысом 3x3 (авторская игра)
  • <a href="https://japnslow.github.io/game/" target="_blank" class="term-cyan">game</a>: Реактивный кликер на 3 секунды (авторская игра)
  • <a href="https://japnslow.github.io/zcb3/" target="_blank" class="term-cyan">zcb3</a>: Страница кликбота Geometry Dash (форк/бэкап)
      `;
      break;

    case 'c64':
      res.innerHTML = `
<span class="term-yellow">Commodore 64 Raycaster Specs:</span>
  CPU: MOS Technology 6510 @ 0.985 / 1.023 MHz
  Resolution: 160x200 Multicolor Bitmap Mode (VIC-II Bank 1 $6000-$7F3F)
  Textures: DOOM Steel Wall, Airlock Door, Castle Blue Stone, Red Brick
  Controls: Joystick in Port 2 (Up/Down move, Left/Right turn, Fire+Strafe)
      `;
      break;

    case 'matrix':
      res.innerHTML = `<span class="term-green">01001011 01101001 01110010 01101100 01001111 01010011 ... Wake up, Neo. The Matrix has you.</span>`;
      break;

    case 'date':
      res.innerHTML = `<span class="term-green">RTC CMOS: ${new Date().toLocaleString('ru-RU')}</span>`;
      break;

    case 'clear':
      output.innerHTML = '';
      return;

    default:
      res.innerHTML = `<span class="term-dim">Команда не найдена: '${escapeHtml(cmd)}'. Введите <span class="term-cyan">help</span> для списка доступных команд.</span>`;
      break;
  }

  output.appendChild(res);
  output.scrollTop = output.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
