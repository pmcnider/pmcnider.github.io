// Renders CONTENT (from content.js) into the page. You shouldn't need to
// edit this file to add content — see content.js instead.

function formatDate(d) {
  if (!d || d === "Present") return "Present";
  const parts = d.split("-");
  const date = new Date(parts[0], (parts[1] || 1) - 1, parts[2] || 1);
  const opts = parts.length >= 3 ? { year: "numeric", month: "short", day: "numeric" } : { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", opts);
}

function sortByDateDesc(list, key) {
  return [...list].sort((a, b) => {
    const av = a[key] === "Present" ? "9999-99" : a[key];
    const bv = b[key] === "Present" ? "9999-99" : b[key];
    return av < bv ? 1 : -1;
  });
}

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function renderCareer(list) {
  const container = document.getElementById("career-rows");
  const sorted = sortByDateDesc(list, "start");
  if (!sorted.length) {
    container.appendChild(el("div", "empty", "Nothing here yet — add an entry to CAREER in content.js."));
    return;
  }
  sorted.forEach((item) => {
    const row = el("div", "row row--career");
    row.innerHTML = `
      <div class="row__top">
        <div>
          <span class="row__role">${item.role}</span>
          <span class="row__org"> — ${item.org}</span>
        </div>
        <div class="row__period">${formatDate(item.start)} – ${formatDate(item.end)}</div>
      </div>
      <p class="row__summary">${item.summary}</p>
      ${
        item.tags && item.tags.length
          ? `<div class="row__tags">${item.tags.map((t) => `<span class="row__tag">${t}</span>`).join("")}</div>`
          : ""
      }
    `;
    container.appendChild(row);
  });
}

function renderInteresting(list) {
  const container = document.getElementById("interesting-rows");
  const sorted = sortByDateDesc(list, "date");
  if (!sorted.length) {
    container.appendChild(el("div", "empty", "Nothing here yet — add an entry to INTERESTING in content.js."));
    return;
  }
  sorted.forEach((item) => {
    const row = el("div", "row row--find");
    row.innerHTML = `
      <a class="row__find-title" href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
      <div class="row__meta">${item.source} · ${formatDate(item.date)}</div>
      <p class="row__summary">${item.note}</p>
    `;
    container.appendChild(row);
  });
}

function renderOpinions(list) {
  const container = document.getElementById("opinions-rows");
  const sorted = sortByDateDesc(list, "date");
  if (!sorted.length) {
    container.appendChild(el("div", "empty", "Nothing here yet — add an entry to OPINIONS in content.js."));
    return;
  }
  sorted.forEach((item) => {
    const details = document.createElement("details");
    details.className = "row row--opinion";
    const bodyHtml = item.body.map((p) => `<p>${p}</p>`).join("");
    details.innerHTML = `
      <summary>
        <div class="row__opinion-head">
          <p class="row__opinion-title">${item.title}</p>
          <p class="row__opinion-dek">${item.dek}</p>
        </div>
        <span class="row__toggle">+</span>
      </summary>
      <div class="row__opinion-body">${bodyHtml}</div>
    `;
    container.appendChild(details);
  });
}

function renderLife(list) {
  const container = document.getElementById("life-rows");
  const sorted = sortByDateDesc(list, "date");
  if (!sorted.length) {
    container.appendChild(el("div", "empty", "Nothing here yet — add an entry to LIFE in content.js."));
    return;
  }
  sorted.forEach((item) => {
    const row = el("div", "row row--life");
    row.innerHTML = `
      ${item.image ? `<img src="${item.image}" alt="" />` : ""}
      <div class="row__life-body">
        <span class="row__period">${formatDate(item.date)}</span>
        <p class="row__role">${item.title}</p>
        <p class="row__summary">${item.note}</p>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderHeroIndex() {
  const rows = [
    { label: "Career", count: CAREER.length, href: "#career" },
    { label: "Things I find interesting", count: INTERESTING.length, href: "#interesting" },
    { label: "Opinions", count: OPINIONS.length, href: "#opinions" },
    { label: "My life", count: LIFE.length, href: "#life" },
  ];
  const container = document.getElementById("hero-index");
  rows.forEach((r) => {
    const a = el("a", "hero__index-row");
    a.href = r.href;
    a.innerHTML = `
      <span class="hero__index-label">${r.label}</span>
      <span class="hero__index-meta">${r.count} ${r.count === 1 ? "entry" : "entries"}</span>
    `;
    container.appendChild(a);
  });
}

function setupNavHighlight() {
  const links = document.querySelectorAll(".topnav__links a");
  const sections = Array.from(links).map((l) => document.querySelector(l.getAttribute("href")));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === id));
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => s && observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-name").textContent = SITE.name;
  document.getElementById("hero-statement").textContent = SITE.tagline;
  document.title = SITE.name;

  renderHeroIndex();
  renderCareer(CAREER);
  renderInteresting(INTERESTING);
  renderOpinions(OPINIONS);
  renderLife(LIFE);
  setupNavHighlight();
});
