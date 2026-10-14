/*
  CONTENT
  =======
  This is the only file you need to touch to add or edit what shows up on
  the site. Each section below is a plain list of entries. To add something,
  copy one of the existing { ... } blocks, paste it into the array, and
  change the values. Order doesn't matter — the site sorts by date for you.

  Dates: use "YYYY-MM" (e.g. "2026-03") or "YYYY-MM-DD". For a role that's
  still ongoing, set end to "Present".
*/

const SITE = {
  name: "Peyton",
  tagline: "Just a way to organize my thoughts and the rest of my life.",
};

const CAREER = [
  {
    role: "Sr. Program Manager",
    org: "Capital One - Card Technology",
    start: "2025-03",
    end: "Present",
    summary: 
      "- Built the recoveries business triage process to resolve data issues surfaced by internal clients migrating to new API endpoints; burned down 164 complex data issues over 90 days to achieve 100% client migration
      - Manage relationships and drive engagement across 200 internal clients spanning risk & governance, metric reporting, and platform teams – serving as primary point of contact from requirements gathering through production cutover
   - Collaborate with clients to define requirements and translate them into actionable migration roadmaps, partnering with product and tech teams to align technical delivery with program timelines
  - Design and maintain reporting dashboards for program leadership, providing visibility into delivery status and driving cross-team accountability",
    tags: ["deal-making", "government", "cross-border"],
  },
  {
    role: "— replace me —",
    org: "Example Employer",
    start: "2019-06",
    end: "2021-12",
    summary: "One or two sentences on what you actually did and what changed because of it. Specifics beat titles.",
    tags: ["example", "tag"],
  },
];

const INTERESTING = [
  {
    title: "— replace me: title of the thing —",
    source: "example.com",
    url: "https://example.com",
    date: "2026-09",
    note: "Why this snagged your attention — one or two sentences is plenty.",
  },
  {
    title: "— another find —",
    source: "example.com",
    url: "https://example.com",
    date: "2026-08",
    note: "Keep these short. The interesting part is the curation, not the essay.",
  },
];

const OPINIONS = [
  {
    title: "— replace me: a claim you'd defend —",
    date: "2026-09",
    dek: "One line that states the position plainly, before the reader commits to reading further.",
    body: [
      "First paragraph of the actual piece. Write it the way you'd say it out loud to someone smart who disagrees with you.",
      "Second paragraph. Keep paragraphs short — this expands in place, so nobody's committing to a new page to read it.",
    ],
  },
];

const LIFE = [
  {
    date: "2026-09",
    title: "— replace me —",
    note: "A short note, photo caption, or update. This section is the loosest one — treat it like a running journal.",
    image: null, // optional: "https://..." — shows a small thumbnail if set
  },
];
