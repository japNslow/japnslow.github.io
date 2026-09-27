// Complete repository database for japNslow
const REPOS_DATA = [
  {
    name: "KirillOS",
    titleRu: "KirillOS v0.2 — Собственная 32-битная ОС",
    descRu: "Минималистичная 32-битная монолитная операционная система для x86 (IA-32) с собственным загрузчиком kboot, файловой системой KirillFS, Hex-редактором Kdhe, трекером Kmidi с AC'97/PC Speaker, текстовым редактором Kano, графическим режимом VGA Mode 13h (320x200x256) и компилятором KHEXD для языка K.",
    category: ["flagship", "lowlevel"],
    primaryLang: "C",
    langBreakdown: { "C": "368 KB", "Assembly": "8 KB", "Batch": "6 KB", "Python": "2 KB", "Linker": "1 KB" },
    sizeKB: 205,
    createdAt: "2026-09-24",
    pushedAt: "2026-09-26",
    tags: ["x86", "Protected Mode", "OS Dev", "VGA Mode 13h", "AC'97", "KirillFS", "Kano", "C", "ASM"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/KirillOS",
    icon: "💻"
  },
  {
    name: "64-raycasting",
    titleRu: "C64 3D Raycasting Engine (Multicolor Bitmap)",
    descRu: "Высокооптимизированный 3D Raycasting движок в графическом режиме 160x200 Multicolor Bitmap для компьютера Commodore 64 (MOS 6510 @ 1.0 MHz, VIC-II, SID). Полноценные текстуры стен в стиле DOOM и Wolfenstein 3D, шлюзовые двери, перспективный пол и поддержка джойстика.",
    category: ["flagship", "lowlevel", "gamedev"],
    primaryLang: "C",
    langBreakdown: { "C": "30 KB", "Python": "6 KB", "Makefile": "1 KB" },
    sizeKB: 51,
    createdAt: "2026-09-25",
    pushedAt: "2026-09-25",
    tags: ["Commodore 64", "MOS 6510", "Raycasting", "DOOM", "Retro", "VIC-II", "C", "Python"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/64-raycasting",
    icon: "🕹️"
  },
  {
    name: "doom-ios-port",
    titleRu: "DOOM Classic iOS Port",
    descRu: "Сборка и нативный порт легендарного шутера DOOM под платформу iOS (C++, C, Objective-C). Включает готовый установочный пакет Doom.ipa (11 МБ), инструменты конвертации и поддержку современных компиляторов.",
    category: ["flagship", "gamedev", "lowlevel"],
    primaryLang: "C++",
    langBreakdown: { "C++": "5.0 MB", "C": "700 KB", "Obj-C": "61 KB", "Obj-C++": "17 KB" },
    sizeKB: 11825,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-27",
    tags: ["DOOM", "iOS", "C++", "C", "Objective-C", "Game Engine", "Retro Port"],
    isFlagship: true,
    isAbandoned: false,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/doom-ios-port",
    icon: "🔥"
  },
  {
    name: "AppleII-webemu",
    titleRu: "Apple II Web Emulator (JavaScript Canvas)",
    descRu: "Полноценный браузерный эмулятор культового винтажного компьютера Apple II на чистом JavaScript и HTML5 Canvas. Эмулирует 8-битный микропроцессор MOS 6502, текстовые и Hi-Res цветные видеорежимы, дисковод Disk II и генерацию звука.",
    category: ["flagship", "pages", "lowlevel", "gamedev"],
    primaryLang: "JavaScript",
    langBreakdown: { "JavaScript": "105 KB", "CSS": "12 KB", "HTML": "9 KB" },
    sizeKB: 325,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-26",
    tags: ["Apple II", "MOS 6502", "Web Emulator", "Canvas", "Retro", "JavaScript"],
    isFlagship: true,
    isAbandoned: false,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/AppleII-webemu/",
    repoUrl: "https://github.com/japNslow/AppleII-webemu",
    icon: "🍏"
  },
  {
    name: "learn-gdscript",
    titleRu: "Интерактивный учебник GDScript (Godot 4)",
    descRu: "Интерактивная браузерная платформа для изучения языка программирования GDScript игрового движка Godot Engine 4 с нуля. Выполнение кода прямо в веб-интерфейсе, интерактивные задания, анимация и документация.",
    category: ["flagship", "pages", "gamedev"],
    primaryLang: "GDScript",
    langBreakdown: { "GDScript": "752 KB", "BBCode": "295 KB", "Python": "30 KB", "CSS": "4 KB" },
    sizeKB: 302115,
    createdAt: "2026-09-27",
    pushedAt: "2026-09-27",
    tags: ["Godot 4", "GDScript", "Interactive Web", "GameDev", "Tutorial", "Python"],
    isFlagship: true,
    isAbandoned: false,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/learn-gdscript/",
    repoUrl: "https://github.com/japNslow/learn-gdscript",
    icon: "🤖"
  },
  {
    name: "kymis-puzzle",
    titleRu: "Кумыс Пазл (Пятнашки 3x3)",
    descRu: "Аутентичная веб-игра в жанре пятнашек (3x3 Slider) с восточной эстетикой и забавной механикой награды кумысом. Каждый выигрыш генерирует случайный объём выпитого целебного кумыса.",
    category: ["pages", "gamedev", "abandoned"],
    primaryLang: "HTML",
    langBreakdown: { "HTML/JS": "16 KB" },
    sizeKB: 6,
    createdAt: "2026-05-28",
    pushedAt: "2026-05-28",
    tags: ["Puzzle", "Mini Game", "Кумыс", "JavaScript", "HTML5", "Fun"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/kymis-puzzle/",
    repoUrl: "https://github.com/japNslow/kymis-puzzle",
    icon: "🐎"
  },
  {
    name: "game",
    titleRu: "Кликер реакции «Я тебя люблю»",
    descRu: "Шуточная мини-игра на экстремальную скорость реакции: необходимо успеть сделать 5 кликов за 3 секунды с динамическим вводом имени. В случае поражения блокирует экран.",
    category: ["pages", "gamedev", "abandoned"],
    primaryLang: "HTML",
    langBreakdown: { "HTML/JS": "7 KB" },
    sizeKB: 3,
    createdAt: "2026-05-29",
    pushedAt: "2026-05-29",
    tags: ["Clicker", "Reaction", "HTML5", "JavaScript", "Mini Game"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/game/",
    repoUrl: "https://github.com/japNslow/game",
    icon: "⚡"
  },
  {
    name: "zcb3",
    titleRu: "zcb3 — Geometry Dash Clickbot (Rust)",
    descRu: "Самый многофункциональный кликбот для ритм-игры Geometry Dash, написанный на языке Rust. Высокая точность таймингов, кастомизация звуков кликов и веб-визитка.",
    category: ["pages", "abandoned"],
    primaryLang: "Rust",
    langBreakdown: { "Rust": "492 KB", "HTML": "3 KB" },
    sizeKB: 33949,
    createdAt: "2026-06-23",
    pushedAt: "2026-06-23",
    tags: ["Rust", "Geometry Dash", "Clickbot", "Audio", "Tools"],
    isFlagship: false,
    isAbandoned: true,
    isPages: true,
    pagesUrl: "https://japnslow.github.io/zcb3/",
    repoUrl: "https://github.com/japNslow/zcb3",
    icon: "🦀"
  },
  {
    name: "LayoutGenerator",
    titleRu: "LayoutGenerator — Процедурный генератор для GD",
    descRu: "Мод на языке C++ для Geometry Dash на базе Geode SDK. Автоматически генерирует процедурные схемы и раскладки уровней под музыку.",
    category: ["gamedev", "abandoned"],
    primaryLang: "C++",
    langBreakdown: { "C++": "89 KB", "CMake": "1 KB" },
    sizeKB: 241,
    createdAt: "2026-06-18",
    pushedAt: "2026-06-17",
    tags: ["Geometry Dash", "Geode SDK", "C++", "Procedural Generation", "Modding"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/LayoutGenerator",
    icon: "📐"
  },
  {
    name: "voice-bot",
    titleRu: "Voice Bot (Приватный проект)",
    descRu: "Экспериментальный голосовой бот на JavaScript. Приватный репозиторий для тестирования голосовых API и автоматизации.",
    category: ["abandoned"],
    primaryLang: "JavaScript",
    langBreakdown: { "JavaScript": "1 KB" },
    sizeKB: 1,
    createdAt: "2026-09-20",
    pushedAt: "2026-09-20",
    tags: ["Bot", "JavaScript", "Voice", "Private"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/voice-bot",
    icon: "🎙️"
  },
  {
    name: "bk0010-emulator",
    titleRu: "БК-0010 Эмулятор (В разработке)",
    descRu: "Инициализированный проект эмулятора легендарного советского 16-битного микрокомпьютера Электроника БК-0010 на базе процессора К1801ВМ1.",
    category: ["lowlevel", "abandoned"],
    primaryLang: "Retro",
    langBreakdown: {},
    sizeKB: 0,
    createdAt: "2026-09-26",
    pushedAt: "2026-09-26",
    tags: ["BK-0010", "PDP-11", "USSR Retro", "Emulator", "In Development"],
    isFlagship: false,
    isAbandoned: true,
    isPages: false,
    pagesUrl: null,
    repoUrl: "https://github.com/japNslow/bk0010-emulator",
    icon: "📺"
  },
  {
    name: "japan",
    titleRu: "japan (Первый тестовый репозиторий)",
    descRu: "Самый первый репозиторий аккаунта japNslow, созданный 28 мая 2026 года. Содержит только файл README с одной строкой '# japan'. Настоящий артефакт рождения профиля!",
    category: ["abandoned"],
    primaryLang: "Text",
    langBreakdown: {},
    sizeKB: 0,
    createdAt: "2026-05-28",
    pushedAt: "2026-05-28",
    tags: ["First Repo", "Relic", "Genesis", "Archive", "May 2026"],
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
              <span style="font-size: 0.8rem; color: var(--accent-cyan); font-family: var(--font-mono);">${repo.primaryLang}</span>
            </div>
          </div>
          <span class="live-badge">
            <span class="live-dot"></span>
            Online
          </span>
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
        <button class="btn-card-preview" onclick="openPreviewModal('${repo.name}', '${repo.pagesUrl}')" title="Быстрый просмотр во фрейме">
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
    if (currentFilter === 'pages' && !repo.isPages) return false;
    if (currentFilter === 'flagship' && !repo.isFlagship) return false;
    if (currentFilter === 'abandoned' && !repo.isAbandoned) return false;
    if (currentFilter === 'lowlevel' && !repo.category.includes('lowlevel')) return false;
    if (currentFilter === 'gamedev' && !repo.category.includes('gamedev')) return false;

    // Search query match
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = repo.name.toLowerCase().includes(q);
      const matchDesc = (repo.descRu || '').toLowerCase().includes(q);
      const matchLang = (repo.primaryLang || '').toLowerCase().includes(q);
      const matchTags = repo.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchLang && !matchTags) return false;
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
    countEl.textContent = `Показано: ${filtered.length} из ${REPOS_DATA.length}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-dim);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">Ничего не найдено 🔍</p>
        <p style="font-size: 0.9rem;">Попробуйте изменить поисковый запрос или сбросить фильтры.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(repo => `
    <div class="repo-card">
      <div class="repo-card-top">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 1.4rem;">${repo.icon}</span>
          <div>
            <a href="${repo.repoUrl}" target="_blank" rel="noopener" class="repo-name-link">
              ${repo.name}
            </a>
            <div style="font-size: 0.76rem; color: var(--text-dim); font-family: var(--font-mono);">
              Создан: ${repo.createdAt}
            </div>
          </div>
        </div>
        ${repo.isFlagship ? '<span class="tag tag-amber" style="font-size:0.7rem; font-weight:700;">★ Флагман</span>' : ''}
        ${repo.isPages ? '<span class="tag tag-green" style="font-size:0.7rem; font-weight:700;">🌐 Pages</span>' : ''}
        ${repo.isAbandoned && !repo.isPages ? '<span class="tag" style="font-size:0.7rem; color:var(--text-dim);">💤 Архив</span>' : ''}
      </div>

      <p class="repo-card-desc">${repo.descRu}</p>

      <div class="card-tags" style="margin-bottom: 14px;">
        ${repo.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="repo-card-meta">
        <div class="repo-lang-badge">
          <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${getLangColor(repo.primaryLang)};"></span>
          <span>${repo.primaryLang || 'Code'}</span>
          <span style="color: var(--text-dim); margin-left: 6px;">(${repo.sizeKB > 1024 ? (repo.sizeKB/1024).toFixed(1) + ' МБ' : repo.sizeKB + ' КБ'})</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          ${repo.pagesUrl ? `
            <a href="${repo.pagesUrl}" target="_blank" rel="noopener" style="color:var(--accent-cyan); font-size:0.8rem; text-decoration:none; font-weight:600;">
              Демо ↗
            </a>
          ` : ''}
          <a href="${repo.repoUrl}" target="_blank" rel="noopener" style="color:var(--text-muted); font-size:0.8rem; text-decoration:none;">
            GitHub →
          </a>
        </div>
      </div>
    </div>
  `).join('');
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
    <div class="term-line term-dim">Добро пожаловать в веб-эмуляцию консоли KirillOS v0.2. Введите <span class="term-cyan">help</span> для справки или <span class="term-cyan">kfetch</span>.</div>
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
  <span class="term-yellow">projects</span>   - Список главных флагманских разработок
  <span class="term-yellow">pages</span>      - Все развернутые GitHub Pages сайты
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
<span class="term-cyan">★ Главные проекты japNslow:</span>
  1. <span class="term-white">KirillOS</span> - Собственная x86 32-bit ОС с загрузчиком, VGA Mode 13h, Kmidi AC'97 и KirillFS
  2. <span class="term-white">64-raycasting</span> - 3D движок для Commodore 64 (160x200 Multicolor) с текстурами DOOM
  3. <span class="term-white">doom-ios-port</span> - Порт и компиляция DOOM Classic для iOS (Doom.ipa)
  4. <span class="term-white">AppleII-webemu</span> - Браузерный эмулятор Apple II на Canvas (MOS 6502)
  5. <span class="term-white">learn-gdscript</span> - Онлайн-интерактивный курс GDScript / Godot 4
      `;
      break;

    case 'pages':
      res.innerHTML = `
<span class="term-green">🌐 Активные сайты GitHub Pages (japnslow.github.io):</span>
  • <a href="https://japnslow.github.io/AppleII-webemu/" target="_blank" class="term-cyan">AppleII-webemu</a>: Эмулятор Apple II в браузере
  • <a href="https://japnslow.github.io/learn-gdscript/" target="_blank" class="term-cyan">learn-gdscript</a>: Онлайн-учебник GDScript Godot 4
  • <a href="https://japnslow.github.io/kymis-puzzle/" target="_blank" class="term-cyan">kymis-puzzle</a>: Пятнашки с кумысом (3x3)
  • <a href="https://japnslow.github.io/game/" target="_blank" class="term-cyan">game</a>: Реактивный кликер на 3 секунды
  • <a href="https://japnslow.github.io/zcb3/" target="_blank" class="term-cyan">zcb3</a>: Страница кликбота Geometry Dash
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
      res.innerHTML = `<span class="term-green">01001011 01101001 01110010 01101001 01101100 01101100 01001111 01010011 ... Wake up, Neo. The Matrix has you.</span>`;
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
