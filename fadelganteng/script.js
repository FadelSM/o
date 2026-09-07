const vseprData = [
  {
    num: 1,
    title: "Linear",
    formula: "AX₂",
    pei: 2,
    peb: 0,
    color: "#d9534f",
    atoms: "C = abu-abu | O = merah",
    example: "CO₂",
    desc: "Bentuk lurus, sudut 180°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="20" y1="50" x2="80" y2="50" stroke="#333" stroke-width="4" />
            <circle cx="50" cy="50" r="14" fill="#666" stroke="#333" stroke-width="1.5" />
            <circle cx="18" cy="50" r="11" fill="#ff4d4d" stroke="#c00" stroke-width="1.5" />
            <circle cx="82" cy="50" r="11" fill="#ff4d4d" stroke="#c00" stroke-width="1.5" />
            <text x="50" y="75" text-anchor="middle" font-size="9" font-weight="bold">180°</text>
          </svg>`
  },
  {
    num: 2,
    title: "Segitiga Planar",
    formula: "AX₃",
    pei: 3,
    peb: 0,
    color: "#f0ad4e",
    atoms: "B = merah muda | F = hijau",
    example: "BF₃",
    desc: "Bentuk segitiga datar (planar), sudut 120°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="48" x2="50" y2="20" stroke="#333" stroke-width="4" />
            <line x1="50" y1="48" x2="75" y2="68" stroke="#333" stroke-width="4" />
            <line x1="50" y1="48" x2="25" y2="68" stroke="#333" stroke-width="4" />
            <circle cx="50" cy="48" r="13" fill="#ff9999" stroke="#c66" stroke-width="1.5" />
            <circle cx="50" cy="18" r="10" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="78" cy="70" r="10" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="22" cy="70" r="10" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="68" y="45" text-anchor="middle" font-size="9" font-weight="bold">120°</text>
          </svg>`
  },
  {
    num: 3,
    title: "Bengkok",
    formula: "AX₂E",
    pei: 2,
    peb: 1,
    color: "#f0ad4e",
    atoms: "S = kuning | O = merah",
    example: "SO₂",
    desc: "Bentuk bengkok (V-shape), sudut ≈ 120°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="45" x2="25" y2="70" stroke="#333" stroke-width="4" />
            <line x1="50" y1="45" x2="75" y2="70" stroke="#333" stroke-width="4" />
            <ellipse cx="50" cy="22" rx="10" ry="6" fill="#ccccff" stroke="#99a" stroke-width="1.5" />
            <circle cx="47" cy="22" r="2" fill="#333" /><circle cx="53" cy="22" r="2" fill="#333" />
            <circle cx="50" cy="45" r="13" fill="#ffd700" stroke="#cc0" stroke-width="1.5" />
            <circle cx="22" cy="72" r="10" fill="#ff4d4d" stroke="#c00" stroke-width="1.5" />
            <circle cx="78" cy="72" r="10" fill="#ff4d4d" stroke="#c00" stroke-width="1.5" />
            <text x="50" y="68" text-anchor="middle" font-size="8.5" font-weight="bold">≈ 120°</text>
          </svg>`
  },
  {
    num: 4,
    title: "Tetrahedral",
    formula: "AX₄",
    pei: 4,
    peb: 0,
    color: "#5cb85c",
    atoms: "C = abu-abu | H = putih",
    example: "CH₄",
    desc: "Bentuk tetrahedral, sudut 109,5°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="45" x2="50" y2="18" stroke="#333" stroke-width="4" />
            <line x1="50" y1="45" x2="22" y2="72" stroke="#333" stroke-width="4" />
            <line x1="50" y1="45" x2="78" y2="72" stroke="#333" stroke-width="4" />
            <polygon points="50,45 64,82 54,84" fill="#333" />
            <circle cx="50" cy="45" r="13" fill="#666" stroke="#333" stroke-width="1.5" />
            <circle cx="50" cy="15" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="18" cy="75" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="82" cy="75" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="61" cy="83" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <text x="72" y="32" text-anchor="middle" font-size="8.5" font-weight="bold">109,5°</text>
          </svg>`
  },
  {
    num: 5,
    title: "Piramida Trigonal",
    formula: "AX₃E",
    pei: 3,
    peb: 1,
    color: "#5cb85c",
    atoms: "N = biru | H = putih",
    example: "NH₃",
    desc: "Bentuk seperti piramida segitiga, sudut ≈ 107°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="48" x2="22" y2="75" stroke="#333" stroke-width="4" />
            <line x1="50" y1="48" x2="78" y2="75" stroke="#333" stroke-width="4" />
            <polygon points="50,48 62,82 52,84" fill="#333" />
            <ellipse cx="50" cy="22" rx="8" ry="12" fill="#ccccff" stroke="#99a" stroke-width="1.5" />
            <circle cx="47" cy="22" r="2" fill="#333" /><circle cx="53" cy="22" r="2" fill="#333" />
            <circle cx="50" cy="48" r="13" fill="#0080ff" stroke="#005" stroke-width="1.5" />
            <circle cx="18" cy="78" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="82" cy="78" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="58" cy="84" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <text x="80" y="42" text-anchor="middle" font-size="8.5" font-weight="bold">≈ 107°</text>
          </svg>`
  },
  {
    num: 6,
    title: "Bengkok",
    formula: "AX₂E₂",
    pei: 2,
    peb: 2,
    color: "#5cb85c",
    atoms: "O = merah | H = putih",
    example: "H₂O",
    desc: "Bentuk bengkok (V-shape), sudut 104,5°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="50" x2="22" y2="78" stroke="#333" stroke-width="4" />
            <polygon points="50,50 62,82 52,84" fill="#333" />
            <ellipse cx="38" cy="25" rx="7" ry="11" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(-25 38 25)" />
            <ellipse cx="62" cy="25" rx="7" ry="11" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(25 62 25)" />
            <circle cx="50" cy="50" r="13" fill="#ff4d4d" stroke="#c00" stroke-width="1.5" />
            <circle cx="18" cy="80" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <circle cx="58" cy="84" r="9" fill="#fff" stroke="#ccc" stroke-width="1.5" />
            <text x="50" y="68" text-anchor="middle" font-size="8.5" font-weight="bold">104,5°</text>
          </svg>`
  },
  {
    num: 7,
    title: "Bipiramida Trigonal",
    formula: "AX₅",
    pei: 5,
    peb: 0,
    color: "#0275d8",
    atoms: "P = oranye | Cl = hijau",
    example: "PCl₅",
    desc: "Memiliki 3 posisi ekuatorial dan 2 posisi aksial.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="85" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="80" y2="65" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="22" y2="65" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <polygon points="50,50 60,80 52,82" fill="#333" />
            <circle cx="50" cy="50" r="12" fill="#ff8c00" stroke="#c60" stroke-width="1.5" />
            <circle cx="50" cy="12" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="50" cy="88" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="82" cy="67" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="18" cy="67" r="8" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="57" cy="82" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="64" y="35" font-size="8" font-weight="bold">90°</text>
            <text x="80" y="52" font-size="8" font-weight="bold">120°</text>
          </svg>`
  },
  {
    num: 8,
    title: "Seesaw (Jungkat-jungkit)",
    formula: "AX₄E",
    pei: 4,
    peb: 1,
    color: "#0275d8",
    atoms: "S = kuning | F = hijau",
    example: "SF₄",
    desc: "Bentuk seperti jungkat-jungkit.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="85" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="22" y2="65" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <polygon points="50,50 60,80 52,82" fill="#333" />
            <ellipse cx="78" cy="42" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(-15 78 42)" />
            <circle cx="50" cy="50" r="12" fill="#ffd700" stroke="#cc0" stroke-width="1.5" />
            <circle cx="50" cy="12" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="50" cy="88" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="18" cy="67" r="8" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="57" cy="82" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="63" y="28" font-size="8" font-weight="bold">&lt; 90°</text>
            <text x="63" y="62" font-size="8" font-weight="bold">120°</text>
          </svg>`
  },
  {
    num: 9,
    title: "Bentuk-T",
    formula: "AX₃E₂",
    pei: 3,
    peb: 2,
    color: "#0275d8",
    atoms: "Cl = ungu | F = hijau",
    example: "ClF₃",
    desc: "Bentuk seperti huruf T.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="85" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="18" y2="50" stroke="#333" stroke-width="4" />
            <ellipse cx="78" cy="35" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(-20 78 35)" />
            <ellipse cx="72" cy="68" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(25 72 68)" />
            <circle cx="50" cy="50" r="12" fill="#8a2be2" stroke="#507" stroke-width="1.5" />
            <circle cx="50" cy="12" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="50" cy="88" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="15" cy="50" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="34" y="38" font-size="8" font-weight="bold">90°</text>
            <text x="34" y="70" font-size="8" font-weight="bold">180°</text>
          </svg>`
  },
  {
    num: 10,
    title: "Linear",
    formula: "AX₂E₃",
    pei: 2,
    peb: 3,
    color: "#0275d8",
    atoms: "Xe = biru muda | F = hijau",
    example: "XeF₂",
    desc: "Bentuk lurus, meskipun ada 3 pasangan elektron bebas.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="85" stroke="#333" stroke-width="4" />
            <ellipse cx="80" cy="38" rx="10" ry="6" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(-20 80 38)" />
            <ellipse cx="68" cy="68" rx="10" ry="6" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(30 68 68)" />
            <ellipse cx="24" cy="52" rx="10" ry="6" fill="#ccccff" stroke="#99a" stroke-width="1.5" transform="rotate(-90 24 52)" />
            <circle cx="50" cy="50" r="12" fill="#87ceeb" stroke="#579" stroke-width="1.5" />
            <circle cx="50" cy="12" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="50" cy="88" r="9" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="35" y="72" font-size="8" font-weight="bold">180°</text>
          </svg>`
  },
  {
    num: 11,
    title: "Oktahedral",
    formula: "AX₆",
    pei: 6,
    peb: 0,
    color: "#d9534f",
    atoms: "S = kuning | F = hijau",
    example: "SF₆",
    desc: "Bentuk oktahedral, sudut 90°.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="85" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="22" y2="65" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <line x1="50" y1="50" x2="78" y2="35" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <polygon points="50,50 60,80 52,82" fill="#333" />
            <polygon points="50,50 25,25 21,32" fill="#333" />
            <circle cx="50" cy="50" r="12" fill="#ffd700" stroke="#cc0" stroke-width="1.5" />
            <circle cx="50" cy="12" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="50" cy="88" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="18" cy="67" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="80" cy="33" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="57" cy="82" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="22" cy="24" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="64" y="38" font-size="8" font-weight="bold">90°</text>
          </svg>`
  },
  {
    num: 12,
    title: "Piramida Segiempat",
    formula: "AX₅E",
    pei: 5,
    peb: 1,
    color: "#d9534f",
    atoms: "Br = cokelat | F = hijau",
    example: "BrF₅",
    desc: "Bentuk seperti piramida segiempat.",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="15" x2="50" y2="50" stroke="#333" stroke-width="4" />
            <line x1="50" y1="50" x2="22" y2="65" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <line x1="50" y1="50" x2="78" y2="35" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <polygon points="50,50 60,80 52,82" fill="#333" />
            <polygon points="50,50 25,25 21,32" fill="#333" />
            <ellipse cx="50" cy="82" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" />
            <circle cx="50" cy="50" r="12" fill="#8b4513" stroke="#531" stroke-width="1.5" />
            <circle cx="50" cy="12" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="18" cy="67" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="80" cy="33" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="57" cy="82" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="22" cy="24" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
          </svg>`
  },
  {
    num: 13,
    title: "Planar Segiempat",
    formula: "AX₄E₂",
    pei: 4,
    peb: 2,
    color: "#d9534f",
    atoms: "Xe = biru muda | F = hijau",
    example: "XeF₄",
    desc: "Bentuk segiempat datar (planar).",
    svg: `<svg viewBox="0 0 100 100" class="molecule-svg">
            <line x1="50" y1="50" x2="22" y2="65" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <line x1="50" y1="50" x2="78" y2="35" stroke="#333" stroke-width="2" stroke-dasharray="3" />
            <polygon points="50,50 60,80 52,82" fill="#333" />
            <polygon points="50,50 25,25 21,32" fill="#333" />
            <ellipse cx="50" cy="20" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" />
            <ellipse cx="50" cy="82" rx="11" ry="7" fill="#ccccff" stroke="#99a" stroke-width="1.5" />
            <circle cx="50" cy="50" r="12" fill="#87ceeb" stroke="#579" stroke-width="1.5" />
            <circle cx="18" cy="67" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="80" cy="33" r="7" fill="#a3e0a3" stroke="#4a4" stroke-width="1" />
            <circle cx="57" cy="82" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <circle cx="22" cy="24" r="8" fill="#66cc66" stroke="#4a4" stroke-width="1.5" />
            <text x="64" y="38" font-size="8" font-weight="bold">90°</text>
          </svg>`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById("cardGrid");

  vseprData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("vsepr-card");
    cardElement.style.borderColor = card.color;

    cardElement.innerHTML = `
      <div class="card-header" style="background-color: ${card.color}">
        <span class="card-num">${card.num}</span>
        <span class="card-title">${card.title}</span>
        <span class="card-formula">${card.formula}</span>
      </div>
      <div class="card-body">
        <div class="pei-peb">
          <span>PEI = ${card.pei}</span>
          <span>PEB = ${card.peb}</span>
        </div>
        <div class="molecule-container">
          ${card.svg}
        </div>
        <div class="card-atoms">${card.atoms}</div>
        <div class="card-example">
          <strong>Contoh:</strong> ${card.example}
        </div>
        <div class="card-desc">${card.desc}</div>
      </div>
    `;

    cardGrid.appendChild(cardElement);
  });
});
