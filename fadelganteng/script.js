// Data 13 Bentuk Molekul VSEPR
const vseprData = [
  {
    num: 1,
    title: "Linear",
    formula: "AX₂",
    pei: 2,
    peb: 0,
    color: "#d9534f", // Merah
    atoms: "C = abu-abu | O = merah",
    example: "CO₂",
    desc: "Bentuk lurus, sudut 180°."
  },
  {
    num: 2,
    title: "Segitiga Planar",
    formula: "AX₃",
    pei: 3,
    peb: 0,
    color: "#f0ad4e", // Oranye
    atoms: "B = merah muda | F = hijau",
    example: "BF₃",
    desc: "Bentuk segitiga datar (planar), sudut 120°."
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
    desc: "Bentuk bengkok (V-shape), sudut ≈ 120°."
  },
  {
    num: 4,
    title: "Tetrahedral",
    formula: "AX₄",
    pei: 4,
    peb: 0,
    color: "#5cb85c", // Hijau
    atoms: "C = abu-abu | H = putih",
    example: "CH₄",
    desc: "Bentuk tetrahedral, sudut 109,5°."
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
    desc: "Bentuk seperti piramida segitiga, sudut ≈ 107°."
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
    desc: "Bentuk bengkok (V-shape), sudut 104,5°."
  },
  {
    num: 7,
    title: "Bipiramida Trigonal",
    formula: "AX₅",
    pei: 5,
    peb: 0,
    color: "#0275d8", // Biru
    atoms: "P = oranye | Cl = hijau",
    example: "PCl₅",
    desc: "Memiliki 3 posisi ekuatorial dan 2 posisi aksial."
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
    desc: "Bentuk seperti jungkat-jungkit."
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
    desc: "Bentuk seperti huruf T."
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
    desc: "Bentuk lurus, meskipun ada 3 pasangan elektron bebas."
  },
  {
    num: 11,
    title: "Oktahedral",
    formula: "AX₆",
    pei: 6,
    peb: 0,
    color: "#d9534f", // Merah Tua/Pink
    atoms: "S = kuning | F = hijau",
    example: "SF₆",
    desc: "Bentuk oktahedral, sudut 90°."
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
    desc: "Bentuk seperti piramida segiempat."
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
    desc: "Bentuk segiempat datar (planar)."
  }
];

// Render Kartu ke dalam Grid
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
        <div class="img-placeholder">
          [attachment_0](attachment)
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
