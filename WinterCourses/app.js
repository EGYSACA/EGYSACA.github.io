const nameInput = document.getElementById("name");
const out = document.getElementById("out");
const go = document.getElementById("go");
const clearBtn = document.getElementById("clear");

// Super simple mapping: A-Z -> a few common hieroglyph characters (Unicode)
const map = {
  A: "𓄿", B: "𓃀", C: "𓎡", D: "𓂧", E: "𓇌", F: "𓆑",
  G: "𓎼", H: "𓉔", I: "𓇋", J: "𓆓", K: "𓎡", L: "𓃭",
  M: "𓅓", N: "𓈖", O: "𓍯", P: "𓊪", Q: "𓈎", R: "𓂋",
  S: "𓋴", T: "𓏏", U: "𓅱", V: "𓆑", W: "𓅱", X: "𓐍",
  Y: "𓇌", Z: "𓊃"
};

function convertToGlyphs(text) {
  let result = "";
  for (const ch of text.toUpperCase()) {
    if (map[ch]) result += map[ch];
    else if (ch === " ") result += "   ";
    else result += ""; // ignore punctuation in this easy version
  }
  return result || "𓁹";
}

go.onclick = () => {
  out.textContent = convertToGlyphs(nameInput.value.trim());
};

clearBtn.onclick = () => {
  nameInput.value = "";
  out.textContent = "𓁹";
  nameInput.focus();
};

// Optional: press Enter to convert
nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") go.click();
});
