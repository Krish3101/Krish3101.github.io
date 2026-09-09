/* Portfolio data + behaviour. Edit PROJECTS / SKILLS below; the DOM builds itself. */

const GH = 'https://github.com/Krish3101';

/* Fill these in and the matching buttons appear. Left null, they stay hidden —
   so the live site never ships a link that 404s. */
const PROFILE = {
  // Your full LinkedIn profile URL, e.g. 'https://www.linkedin.com/in/your-handle'
  linkedin: null,
  // Drop the PDF at assets/Krishkumar-Kalya-Resume.pdf and this button reveals itself.
  resume: 'assets/Krishkumar-Kalya-Resume.pdf'
};

const PROJECTS = [
  {
    name: 'Supply Chain Dispute Ledger',
    repo: 'dispute-ledger',
    kind: 'Distributed Ledger',
    cats: ['systems'],
    desc: 'An append-only dispute resolution system on Hyperledger Fabric. Partners raise disputes and attach evidence; arbiters resolve them. Every action is attributed, timestamped and immutable.',
    points: [
      'Role-based access enforced on-chain in the chaincode, not just at the API edge',
      'Express REST gateway talking to the Fabric Gateway over gRPC/TLS, secured with JWT',
      'Helmet, rate limiting and input validation on every route'
    ],
    tags: ['Hyperledger Fabric', 'Node.js', 'Express', 'gRPC', 'JWT'],
    live: null
  },
  {
    name: 'Traffic Violation System',
    repo: 'traffic-app',
    kind: 'Rule Engine',
    cats: ['systems'],
    desc: 'A deterministic rule engine for adjudicating speeding violations. Vehicle events go in, configurable thresholds decide whether a violation occurred and which penalty applies.',
    points: [
      'Java 21 and Spring Boot 3.4.5, with emergency-vehicle exemption evaluated before any penalty logic',
      'H2 for local runs, PostgreSQL in production, swapped purely by configuration',
      'Dockerised with a Render blueprint checked into the repo'
    ],
    tags: ['Java 21', 'Spring Boot 3', 'Maven', 'PostgreSQL', 'Docker'],
    live: null
  },
  {
    name: 'Farmland Processing Pipeline',
    repo: 'data-pipeline',
    kind: 'GIS Microservice',
    cats: ['systems', 'ai'],
    desc: 'A high-throughput GIS service that ingests heterogeneous farmland coordinate data and serves strict RFC 7946 GeoJSON in WGS84.',
    points: [
      'Two-tier design: bulk ingestion into PostgreSQL, then spatial pre-calculation in PostGIS',
      'Geometry conversion happens in a materialised view, bypassing expensive Python spatial maths',
      'FastAPI service, fully containerised with separate dev and prod Compose stacks'
    ],
    tags: ['FastAPI', 'PostGIS', 'PostgreSQL', 'GeoJSON', 'Docker'],
    live: null
  },
  {
    name: 'GeoAgent',
    repo: 'geo-agents',
    kind: 'AI Agent',
    cats: ['ai'],
    desc: 'A geospatial assistant that turns natural language into real spatial work — fetching administrative boundaries from OpenStreetMap and Sentinel-2 raster imagery from the Planetary Computer.',
    points: [
      'Pydantic-AI keeps every tool call inside a typed, validated contract',
      'GeoPandas, Shapely, OSMnx and rioxarray behind a FastAPI + WebSocket interface',
      'STAC catalogue queries via pystac-client with Redis caching for repeat lookups'
    ],
    tags: ['Pydantic-AI', 'FastAPI', 'GeoPandas', 'STAC', 'Redis'],
    live: null
  },
  {
    name: 'KisanAI',
    repo: 'kisan-ai',
    kind: 'Full-Stack AI',
    cats: ['ai', 'fullstack'],
    desc: 'Crop risk assessment that combines a plot’s crop and growth stage with a five-day forecast to produce prioritised, reproducible risk assessments in plain language.',
    points: [
      'Deterministic agronomic rules — same forecast in, same assessment out, every time',
      'FastAPI backend with JWT auth, SQLAlchemy persistence and a tested rules layer',
      'React 19 + Tailwind v4 frontend with routing and axios-driven state'
    ],
    tags: ['FastAPI', 'React 19', 'Tailwind', 'SQLAlchemy', 'JWT'],
    live: null
  },
  {
    name: 'MiniMacro Macroprocessor',
    repo: 'MiniMacro-Macroprocessor',
    kind: 'Systems Programming',
    cats: ['systems'],
    desc: 'A two-pass macroprocessor for a custom macro language, with a GUI that visualises the internal tables as the expansion runs.',
    points: [
      'Pass 1 builds the Macro Name Table and Macro Definition Table; Pass 2 builds the Argument List Array and expands',
      'Detects 11 distinct syntactic and semantic errors, including nested definitions and arity mismatches',
      'PyQt6 interface showing MNT, MDT and ALA side by side with the output'
    ],
    tags: ['Python', 'PyQt6', 'Compilers', 'Pytest'],
    live: null
  },
  {
    name: 'Recipe AI',
    repo: 'recipe-finder',
    kind: 'Full-Stack ML',
    cats: ['fullstack', 'ai'],
    desc: 'Enter what is already in your pantry and an ML engine ranks every stored recipe by ingredient similarity, returning the closest matches with a percentage score.',
    points: [
      'scikit-learn CountVectorizer plus cosine similarity over the ingredient corpus',
      'FastAPI and SQLAlchemy backend with bcrypt + JWT authentication',
      'Database seeded from TheMealDB across chicken, beef, vegetarian, seafood, pasta and dessert'
    ],
    tags: ['FastAPI', 'scikit-learn', 'SQLAlchemy', 'React 19', 'Vite'],
    live: null
  },
  {
    name: 'PromptSmith AI',
    repo: 'prompt-ai',
    kind: 'Developer Tool',
    cats: ['ai'],
    desc: 'An offline-first prompt engineering copilot that structures and refines prompts for a chosen target model — and keeps working when the network does not.',
    points: [
      'With an API key it delegates optimisation to an LLM using live web search for current best practices',
      'Without one — or on any network failure — it falls back instantly to a deterministic local restructuring engine',
      'Flask 3 service with a tested fallback path'
    ],
    tags: ['Python', 'Flask 3', 'LLM APIs', 'Pytest'],
    live: null
  },
  {
    name: 'Task Manager',
    repo: 'to-do-app',
    kind: 'Full-Stack',
    cats: ['fullstack'],
    desc: 'A decoupled multi-user task manager with secure registration, login and full CRUD over persistent storage.',
    points: [
      'Express API with JWT authorisation middleware and input validation on every route',
      'Persistence layer abstracted so SQLite (dev) and MySQL (prod) are interchangeable',
      'React + Vite SPA, whole stack orchestrated with Docker Compose'
    ],
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    live: null
  }
];

const SKILLS = [
  { group: 'Languages', items: ['Java', 'Python', 'JavaScript', 'SQL', 'Bash', 'HTML/CSS'] },
  { group: 'Backend', items: ['Spring Boot 3', 'FastAPI', 'Node.js', 'Express', 'Flask', 'REST', 'JWT', 'gRPC'] },
  { group: 'Data & Storage', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQLite', 'SQLAlchemy', 'Redis', 'Hyperledger Fabric'] },
  { group: 'Frontend', items: ['React 19', 'Vite', 'Tailwind CSS', 'Bootstrap', 'PyQt6'] },
  { group: 'AI & Geospatial', items: ['Pydantic-AI', 'scikit-learn', 'GeoPandas', 'Shapely', 'OSMnx', 'STAC / Sentinel-2'] },
  { group: 'Tooling', items: ['Docker', 'Docker Compose', 'Git', 'Maven', 'uv', 'Pytest', 'JUnit', 'Linux'] }
];

/* ---------- render ---------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function projectCard(p) {
  const live = p.live
    ? `<a class="btn btn--primary" href="${esc(p.live)}" target="_blank" rel="noopener">Live demo</a>`
    : '';
  return `
    <article class="card" data-cats="${p.cats.join(' ')}">
      <div class="card__top">
        <h3 class="card__title">${esc(p.name)}</h3>
        <span class="card__kind">${esc(p.kind)}</span>
      </div>
      <p class="card__desc">${esc(p.desc)}</p>
      <ul class="card__points">${p.points.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      <div class="card__links">
        <a class="btn" href="${GH}/${esc(p.repo)}" target="_blank" rel="noopener">Source</a>
        ${live}
      </div>
    </article>`;
}

document.getElementById('project-grid').innerHTML = PROJECTS.map(projectCard).join('');

document.getElementById('skills-grid').innerHTML = SKILLS.map((s) => `
  <div class="skill">
    <h3>${esc(s.group)}</h3>
    <ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </div>`).join('');

/* ---------- filtering ---------- */
const cards = [...document.querySelectorAll('#project-grid .card')];
document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const f = chip.dataset.filter;
    cards.forEach((card) => {
      const match = f === 'all' || card.dataset.cats.split(' ').includes(f);
      card.classList.toggle('is-hidden', !match);
    });
  });
});

/* ---------- theme ---------- */
const root = document.documentElement;
const stored = (() => { try { return localStorage.getItem('theme'); } catch { return null; } })();
const initial = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
root.setAttribute('data-theme', initial);

document.getElementById('theme-toggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
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
