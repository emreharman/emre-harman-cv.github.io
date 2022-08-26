const pdfBtn = document.getElementById("pdfBtn");
const languageSelect = document.getElementById("language");

const dictionary = [
  {
    id: "personalDescription",
    tr: "Merhaba ben Emre Harman. Frontend Developer olarak çalışıyorum",
    en: "Hi, I'm Emre Harman. I've been working as a Frontend Developer for 1 year",
    de: "Hallo, ich bin Emre Harman. Ich arbeite als Frontend-Entwickler",
    count: 10,
  },
  {
    id: "educationTitle",
    tr: "EĞİTİM",
    en: "EDUCATION",
    de: "Ausbildung",
    count: 30,
  },
  {
    id: "experienceTitle",
    tr: "DENEYİM",
    en: "EXPERIENCES",
    de: "ERFAHRUNG",
    count: 0,
  },
  {
    id: "skillsTitle",
    en: "SKILLS",
    tr: "YETENEKLER",
    count: 5,
  },
];

pdfBtn.addEventListener("click", function () {
  const myCv = document.getElementById("myCv");
  const nameSurname = document.getElementById("nameSurname");
  var opt = {
    margin: 0,
    filename: nameSurname.innerText + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(myCv).save();
});

languageSelect.addEventListener("change", function (event) {
  translate(event.target.value);
});

function translate(selectedLanguage) {
  dictionary.map((item) => {
    const element = document.getElementById(item.id);
    switch (selectedLanguage) {
      case "tr":
        element.innerText = item.tr;
        break;
      case "en":
        element.innerText = item.en;
        break;
      case "de":
        element.innerText = item.de;
        break;
      default:
        console.log("default");
        break;
    }
  });
}
