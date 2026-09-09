/* Portfolio data + behaviour. Edit PROJECTS / SKILLS below; the DOM builds itself. */

const GH = 'https://github.com/Krish3101';

/* Fill these in and the matching buttons appear. Left null, they stay hidden —
   so the live site never ships a link that 404s. */
const PROFILE = {
  linkedin: 'https://www.linkedin.com/in/krishkumar-kalya-b05b941b3/',
  // Built from resume/resume.tex. Recompile with: tectonic -X compile resume/resume.tex --outdir resume
  resume: 'resume/Krishkumar-Kalya-Resume.pdf'
};

/* One line per project: what it is, in a sentence. Depth lives in the repo README. */
const PROJECTS = [
  {
    name: 'Supply Chain Dispute Ledger',
    repo: 'dispute-ledger',
    kind: 'Distributed Ledger',
    cats: ['systems'],
    desc: 'An append-only dispute resolution system on Hyperledger Fabric, with role-based access enforced on-chain in the chaincode rather than at the API edge.',
    tags: ['Hyperledger Fabric', 'Node.js', 'gRPC', 'JWT'],
    live: null
  },
  {
    name: 'Traffic Violation System',
    repo: 'traffic-rule-engine',
    kind: 'Rule Engine',
    cats: ['systems'],
    desc: 'A deterministic Spring Boot engine that adjudicates speeding events against configurable thresholds and calculates tiered fines, exempting emergency vehicles first.',
    tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Docker'],
    live: null
  },
  {
    name: 'Farmland Processing Pipeline',
    repo: 'farmland-pipeline',
    kind: 'GIS Microservice',
    cats: ['systems'],
    desc: 'A high-throughput ingestion service that pushes geometry conversion down into a PostGIS materialised view and serves strict RFC 7946 GeoJSON in WGS84.',
    tags: ['FastAPI', 'PostGIS', 'GeoJSON', 'Docker'],
    live: null
  },
  {
    name: 'GeoAgent',
    repo: 'geo-agents',
    kind: 'AI Agent',
    cats: ['ai', 'systems'],
    desc: 'A geospatial assistant that turns natural language into real spatial work — OpenStreetMap boundaries and Sentinel-2 imagery — with every tool call inside a typed Pydantic-AI contract.',
    tags: ['Pydantic-AI', 'FastAPI', 'GeoPandas', 'Redis'],
    live: null
  },
  {
    name: 'Kisan Crop Risk',
    repo: 'kisan-crop-risk',
    kind: 'Rules Engine',
    cats: ['ai', 'fullstack'],
    desc: 'Crop risk scoring that grades a plot’s crop and growth stage against a five-day forecast with deterministic agronomic rules, then has an LLM turn the score into plain language — falling back to a canned explanation when the model is unreachable.',
    tags: ['FastAPI', 'React 19', 'SQLAlchemy', 'JWT'],
    live: null
  },
  {
    name: 'MiniMacro Macroprocessor',
    repo: 'MiniMacro-Macroprocessor',
    kind: 'Systems Programming',
    cats: ['systems'],
    desc: 'A two-pass macroprocessor for a custom macro language, with a PyQt6 GUI that shows the MNT, MDT and ALA filling up as the expansion runs.',
    tags: ['Python', 'PyQt6', 'Compilers', 'unittest'],
    live: null
  },
  {
    name: 'Recipe Finder',
    repo: 'recipe-finder',
    kind: 'Full-Stack',
    cats: ['fullstack'],
    desc: 'Pantry-based recipe matching that scores ingredient overlap with CountVectorizer and cosine distance — a bag-of-words comparison, not a trained model, so the same pantry always ranks the same way.',
    tags: ['FastAPI', 'scikit-learn', 'React 19', 'Vite'],
    live: null
  },
  {
    name: 'PromptSmith AI',
    repo: 'prompt-ai',
    kind: 'Developer Tool',
    cats: ['ai'],
    desc: 'An offline-first prompt refinement tool: it delegates to an LLM when an API key is present, and falls back instantly to a deterministic local restructuring engine when it is not.',
    tags: ['Python', 'Flask 3', 'LLM APIs', 'Pytest'],
    live: null
  },
  {
    name: 'Task Manager',
    repo: 'task-manager',
    kind: 'Full-Stack',
    cats: ['fullstack'],
    desc: 'A decoupled multi-user task manager with JWT-scoped per-user isolation and a persistence layer abstracted so SQLite and MySQL are interchangeable.',
    tags: ['React', 'Express', 'MySQL', 'Docker'],
    live: null
  }
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'systems', label: 'Backend & Systems' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'fullstack', label: 'Full-Stack' }
];

const SKILLS = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Spring Boot', 'FastAPI', 'Node.js', 'Express', 'REST', 'JWT', 'gRPC'] },
  { group: 'Data & Storage', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'Redis', 'Hyperledger Fabric'] },
  { group: 'AI & Geospatial', items: ['Pydantic-AI', 'scikit-learn', 'GeoPandas', 'Shapely'] },
  { group: 'Frontend', items: ['React', 'Tailwind CSS'] },
  { group: 'Tooling', items: ['Docker', 'Git', 'Maven', 'Pytest', 'JUnit', 'Linux'] }
];

/* ---------- render ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const arrow = '<svg class="card__arrow" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"/></svg>';

function projectCard(p) {
  const live = p.live
    ? `<a class="card__link card__link--live" href="${esc(p.live)}" target="_blank" rel="noopener">Live demo</a>`
    : '';
  return `
    <article class="card" data-cats="${p.cats.join(' ')}">
      <p class="card__kind">${esc(p.kind)}</p>
      <h3 class="card__title">
        <a href="${GH}/${esc(p.repo)}" target="_blank" rel="noopener">${esc(p.name)}${arrow}</a>
      </h3>
      <p class="card__desc">${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
      <div class="card__links">
        <a class="card__link" href="${GH}/${esc(p.repo)}" target="_blank" rel="noopener">Source</a>
        ${live}
      </div>
    </article>`;
}

const grid = document.getElementById('project-grid');
grid.innerHTML = PROJECTS.map(projectCard).join('');

document.getElementById('project-filters').innerHTML = FILTERS.map((f, i) => `
  <button class="chip${i === 0 ? ' is-active' : ''}" type="button" data-filter="${f.id}"
          aria-pressed="${i === 0}">${esc(f.label)}</button>`).join('');

document.getElementById('project-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  const want = btn.dataset.filter;
  document.querySelectorAll('#project-filters .chip').forEach((c) => {
    const on = c === btn;
    c.classList.toggle('is-active', on);
    c.setAttribute('aria-pressed', String(on));
  });
  grid.querySelectorAll('.card').forEach((card) => {
    card.hidden = want !== 'all' && !card.dataset.cats.split(' ').includes(want);
  });
});

document.getElementById('skills-grid').innerHTML = SKILLS.map((s) => `
  <div class="skill">
    <h3>${esc(s.group)}</h3>
    <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </div>`).join('');

/* ---------- theme ---------- */
const root = document.documentElement;
const stored = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
root.setAttribute('data-theme', stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
});

/* ---------- nav: highlight the section in view ---------- */
const navLinks = new Map(
  [...document.querySelectorAll('.nav__links a')].map((a) => [a.getAttribute('href').slice(1), a])
);
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = navLinks.get(entry.target.id);
    if (link) link.classList.toggle('is-current', entry.isIntersecting);
  });
}, { rootMargin: '-55% 0px -40% 0px' });
navLinks.forEach((_, id) => {
  const section = document.getElementById(id);
  if (section) spy.observe(section);
});

/* ---------- optional profile links ---------- */
const linkedin = document.getElementById('link-linkedin');
if (PROFILE.linkedin) {
  linkedin.href = PROFILE.linkedin;
  linkedin.hidden = false;
}

// Reveal the resume button only once the PDF is actually in place.
const resume = document.getElementById('link-resume');
if (PROFILE.resume) {
  fetch(PROFILE.resume, { method: 'HEAD' })
    .then((r) => { if (r.ok) { resume.href = PROFILE.resume; resume.hidden = false; } })
    .catch(() => { /* leave it hidden */ });
}

document.getElementById('year').textContent = new Date().getFullYear();
